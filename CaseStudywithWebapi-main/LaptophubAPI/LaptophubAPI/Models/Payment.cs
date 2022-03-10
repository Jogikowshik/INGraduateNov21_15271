using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Models
{
    public class Payment
    {
        [Key]
        public int id { get; set; }
        public int OrderId { get; set; }
        public int customerId { get; set; }
        public int totalamount { get; set; }
        public string paymenttype { get; set; }
    }
}

