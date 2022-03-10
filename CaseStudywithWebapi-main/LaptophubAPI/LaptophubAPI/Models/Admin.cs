using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    public class Admin
    {
        [Key]
        public int id { get; set; }
        public int eid { get; set; }
        public string fullname { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string mobile { get; set; }
        public string location { get; set; }
    }
}
