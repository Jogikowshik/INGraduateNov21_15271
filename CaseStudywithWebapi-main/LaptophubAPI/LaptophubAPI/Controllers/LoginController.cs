using LaptophubAPI.Data;
using LaptophubAPI.Helpers;
using LaptophubAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace LaptophubAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _config;
        public LoginController(AppDbContext db, IConfiguration config)
        {
            _db = db;
            _config = config;
        }


        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            var UserDetails = _db.User.AsQueryable();
            return Ok(UserDetails);
        }

        [HttpPost("signup")]

        public IActionResult SignUp([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }
            else
            {
                userObj.password = EncDscPassword.EncryptPassword(userObj.password);
                _db.User.Add(userObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "User Add Successfully"
                });
            }
        }

        [HttpPost("login")]

        public IActionResult Login([FromBody] User userObj)
        {
            
            if (userObj == null)
            {
                return BadRequest();
            }
            else
            {
                var user = _db.User.Where(a => a.username == userObj.username).FirstOrDefault();


                if (user != null && EncDscPassword.DecryptPassword(user.password) == userObj.password)
                {
                    var token = GenerateToken(user.username);
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Logged In Successfully",
                        Jwttoken=token
                    });
                }
                else
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "User Not Found"
                    });
                }
            }
        }

        private string GenerateToken(string username)
        {
            var tokenhandler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:key"]));
            var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Email,username)
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credential
                ) ;
            return tokenhandler.WriteToken(token);
        }
    }
}
