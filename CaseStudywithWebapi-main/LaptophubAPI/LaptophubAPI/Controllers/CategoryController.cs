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
    public class CategoryController : ControllerBase
    {
        private readonly AppDbContext _db;
        public CategoryController(AppDbContext db)
        {
            _db = db;
        }



        [HttpPost("add_category")]

        public IActionResult AddCategory(Category categoryObj)
        {
            if (categoryObj == null)
            {
                return BadRequest();
            }
            else
            {
                _db.Category.Add(categoryObj);
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Category Add Successfully"
                }); ;
            }
        }


        [HttpPut("update_Category")]

        public IActionResult UpdateCategory(Category categoryObj)
        {
            if (categoryObj == null)
            {
                return BadRequest();
            }
            var user = _db.Category.AsNoTracking().FirstOrDefault(x => x.id == categoryObj.id);

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
                _db.Entry(categoryObj).State = EntityState.Modified;
                _db.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Category Update Successfully"
                });
            }
        }

        [HttpDelete("delete_Category/{id}")]

        public IActionResult DeleteCategory(int id)
        {
            var user = _db.Category.Find(id);
            if (user == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Category Not Found"
                });
            }
            else
            {
                _db.Remove(user);
                _db.SaveChanges();

                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Category Delete Successfully"
                });
            }
        }

        [HttpGet("get_allCategory")]

        public IActionResult GetAllCategorys()
        {
            var Categorys = _db.Category.AsQueryable();
            return Ok(Categorys.ToList());
        }

        [HttpGet("get_allCategory/{id}")]
        public IActionResult GetAllCategorys(int id)
        {
            var Category = _db.Category.Find(id);
            if (Category == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Category Not Found"
                });
            }
            else
            {
                return Ok(Category);
            }
        }

    }
}
