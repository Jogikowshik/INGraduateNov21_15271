using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    public class Category
    {
        [Key]
        public int id { get; set; }

        public string categoryname { get; set; }
    }
}
