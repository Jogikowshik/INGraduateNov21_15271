using LaptophubAPI.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _db;
        public OrderController(AppDbContext db)
        {
            _db = db;
        }

        [HttpPost("add_order")]

        public IActionResult AddOrder(Order orderObj)
        {
            if (orderObj == null)
            {
                return BadRequest();
            }
            else
            {
                _db.Order.Add(orderObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Order Add Successfully"
                }); ;
            }
        }

        [HttpGet("get_allOrder/{id}")]
        public IActionResult GetAllOrder(int id)
        {
            var order = _db.Order.AsNoTracking().Where(x => x.customerid == id);
            if (order == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Product Not Found"
                });
            }
            else
            {
                return Ok(order);
            }
        }
        [HttpGet("get_allOrder")]

        public IActionResult GetAllOrder()
        {
            var orders = _db.Order.AsQueryable();
            return Ok(orders.ToList());
        }
    }
}
