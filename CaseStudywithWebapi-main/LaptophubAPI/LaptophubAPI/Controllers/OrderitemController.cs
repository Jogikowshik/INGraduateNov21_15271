using LaptophubAPI.Data;
using LaptophubAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderitemController : ControllerBase
    {

        private readonly AppDbContext _db;
        public OrderitemController(AppDbContext db)
        {
            _db = db;
        }

        [HttpPost("add_orderitem")]

        public IActionResult AddOrderitem(Orderitem orderObj)
        {
            if (orderObj == null)
            {
                return BadRequest();
            }
            else
            {
                _db.Orderitem.Add(orderObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Orderitem Add Successfully"
                }); ;
            }
        }
        [HttpGet("get_allOrderItem/{id}")]
        public IActionResult GetAllOrderitem(int id)
        {
            var product = _db.User.Find(id);
            if (product == null)
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
