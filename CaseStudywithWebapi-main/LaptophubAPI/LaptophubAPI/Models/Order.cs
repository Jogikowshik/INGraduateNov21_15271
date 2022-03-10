using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    public class Order
    {
        [Key]
        public int id { get; set; }
        public int productid { get; set; }
        public int customerid { get; set; }
        public DateTime orderdate { get; set; }
        public string orderaddress { get; set; }
        public int totalamount { get; set; }
        public string status { get; set; }
        public int cartid { get; set; }
    }
}
