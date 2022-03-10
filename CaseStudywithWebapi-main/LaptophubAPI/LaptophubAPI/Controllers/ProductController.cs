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
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _db;
        public ProductController(AppDbContext db)
        {
            _db = db;
        }

        [HttpPost("add_product")]

        public IActionResult AddProduct(Product productObj)
        {
            if (productObj == null)
            {
                return BadRequest();
            }
            else
            {
                _db.Product.Add(productObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Product Add Successfully"
                }); ;
            }
        }


        [HttpPut("update_product")]

        public IActionResult UpdateProduct(Product productObj)
        {
            if (productObj == null)
            {
                return BadRequest();
            }
            var user = _db.Product.AsNoTracking().FirstOrDefault(x => x.id == productObj.id);

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
                _db.Entry(productObj).State = EntityState.Modified;
                _db.SaveChanges();
                return Ok("Product update successfully");
            }
        }

        [HttpDelete("delete_product/{id}")]

        public IActionResult DeleteProduct(int id)
        {
            var user = _db.Product.Find(id);
            if(user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Product Not Found"
                });
            }
            else
            {
                _db.Remove(user);
                _db.SaveChanges();

                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Product Delete Successfully"
                });
            }
        }

        [HttpGet("get_allProduct")]

        public IActionResult GetAllProducts()
        {
            var products = _db.Product.AsQueryable();
            return Ok(products.ToList()); 
        }

        [HttpGet("get_allProduct/{id}")]
        public IActionResult GetAllProducts(int id)
        {
            var product = _db.Product.Find(id);
            if(product == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Product Not Found"
                });
            }
            else
            {
                return Ok(product);
            }
        }

    }
}