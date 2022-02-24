using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Collections.Generic;
using UploadFile.Models;

namespace UploadFile.Controllers
{
    [Route("api/demo")]
    public class DemoController : Controller
    {
        private IWebHostEnvironment webHostEnvironment;
        private IHttpContextAccessor httpContextAccessor;

        public DemoController(IWebHostEnvironment _webHostEnvironment, IHttpContextAccessor _httpContextAccessor)
        {
            webHostEnvironment =  _webHostEnvironment;
            httpContextAccessor = _httpContextAccessor;
        }

        [Produces("application/json")]
        [HttpPost("uploads")]
        public IActionResult Uploads(IFormFile[] files)
        {
            try
            {
                var baseURL = httpContextAccessor.HttpContext.Request.Scheme + ":/" +
                    httpContextAccessor.HttpContext.Request.Host +
                    httpContextAccessor.HttpContext.Request.PathBase;
                var fileUploadInfos = new List<FileUploadInfo>();
                foreach (var file in files)
                {
                    var path = Path.Combine(webHostEnvironment.WebRootPath, "uploads", file.FileName);
                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        file.CopyTo(fileStream);
                    }
                    fileUploadInfos.Add(new FileUploadInfo 
                    { 
                      Name = baseURL + "/uploads/" + file.FileName,
                      Length = file.Length
                    });

                }
                
                
                return Ok(fileUploadInfos);
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
