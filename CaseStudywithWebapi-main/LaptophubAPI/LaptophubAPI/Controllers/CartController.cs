using LaptophubAPI.Data;
using LaptophubAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly AppDbContext _db;
        public CartController(AppDbContext db)
        {
            _db = db;
        }


        [HttpPost("add_Cart")]

        public IActionResult AddCart(Cart cartObj)
        {
            if (cartObj == null)
            {
                return BadRequest();
            }
            else
            {
                _db.Cart.Add(cartObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Cart Add Successfully"
                }); ;
            }
        }


        [HttpPut("update_Cart")]

        public IActionResult UpdateCart(Cart cartObj)
        {
            if (cartObj == null)
            {
                return BadRequest();
            }
            var user = _db.Cart.AsNoTracking().FirstOrDefault(x => x.id == cartObj.id);

            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "UserNot Found"
                });
            }
            else
            {
                _db.Entry(cartObj).State = EntityState.Modified;
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Cart Update Successfully"
                });
            }
        }

        [HttpDelete("delete_Cart/{id}")]

        public IActionResult DeleteCart(int id)
        {
            var user = _db.Cart.Find(id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Cart Not Found"
                });
            }
            else
            {
                _db.Remove(user);
                _db.SaveChanges();

                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Cart Delete Successfully"
                });
            }
        }

        [HttpGet("get_allCart")]

        public IActionResult GetAllCarts()
        {
            var Carts = _db.Cart.AsQueryable();
            return Ok(Carts.ToList());
        }

        [HttpGet("get_allCart/{id}")]
        public IActionResult GetAllCarts(int id)
        {
            var Cart = _db.Cart.Find(id);
            if (Cart == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Cart Not Found"
                });
            }
            else
            {
                return Ok(Cart);
            }
        }


        [HttpGet("get_allCartProduct/{id}")]
        public IActionResult GetAllCartsbyproduct(int id)
        {
            var Cart = _db.Product.Find(id);
            if (Cart == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Cart Not Found"
                });
            }
            else
            {
                return Ok(Cart);
            }
        }

    }
}
