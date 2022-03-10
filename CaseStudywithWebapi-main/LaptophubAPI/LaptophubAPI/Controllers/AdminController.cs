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
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _config;
        public AdminController(AppDbContext db, IConfiguration config)
        {
            _db = db;
            _config = config;
        }
        [HttpGet("admins")]
        public IActionResult GetAdmins()
        {
            var AdminDetails = _db.Admin.AsQueryable();
            return Ok(AdminDetails);
        }

        [HttpPost("signup")]

        public IActionResult SignUp([FromBody] Admin adminObj)
        {
            if (adminObj == null)
            {
                return BadRequest();
            }
            else
            {
                adminObj.password = EncDscPassword.EncryptPassword(adminObj.password);
                _db.Admin.Add(adminObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Admin Add Successfully"
                });
            }
        }

        [HttpPost("adminlogin")]

        public IActionResult Login([FromBody] Admin adminObj)
        {

            if (adminObj == null)
            {
                return BadRequest();
            }
            else
            {
                var Admin = _db.Admin.Where(a => a.username == adminObj.username).FirstOrDefault();


                if (Admin != null && EncDscPassword.DecryptPassword(Admin.password) == adminObj.password)
                {
                    var token = GenerateToken(Admin.username);
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "Logged In Successfully",
                        Jwttoken = token
                    });
                }
                else
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "Admin Not Found"
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
                );
            return tokenhandler.WriteToken(token);
        }
    }
}
