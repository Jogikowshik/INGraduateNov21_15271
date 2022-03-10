using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    public class Orderitem
    {
        [Key]
        public int id { get; set; }
        public int userid { get; set; }
        public int productid { get; set; }
        public string productname { get; set; }
        public string image { get; set; }
        public int quantity { get; set; }
        public int totalamount { get; set; }

    }
}
