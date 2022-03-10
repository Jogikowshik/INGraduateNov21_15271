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
    public class PaymentController : ControllerBase
    {

        private readonly AppDbContext _db;
        public PaymentController(AppDbContext db)
        {
            _db = db;
        }

        [HttpPost("add_Payment")]

        public IActionResult AddPayment(Payment paymentObj)
        {
            if (paymentObj == null)
            {
                return BadRequest();
            }
            else
            {
                _db.Payment.Add(paymentObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Payment Add Successfully"
                }); ;
            }
        }


    }
}
