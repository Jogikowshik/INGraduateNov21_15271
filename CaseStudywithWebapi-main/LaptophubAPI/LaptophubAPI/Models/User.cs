using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        public string fullname { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string mobileno { get; set; }
        public string address { get; set; }
        
    }
}
