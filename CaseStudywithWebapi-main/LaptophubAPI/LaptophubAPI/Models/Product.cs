using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }

        public string productname { get; set; }

        public string description { get; set; }

        public string image { get; set; }

        public int price { get; set; }

        public int quantity { get; set; }
        public string category { get; set; }
    }
}
