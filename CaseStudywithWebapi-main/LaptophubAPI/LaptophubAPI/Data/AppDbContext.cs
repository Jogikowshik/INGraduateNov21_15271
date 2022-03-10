using LaptophubAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LaptophubAPI.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
                
        }

        public DbSet<Product> Product { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Admin> Admin { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Orderitem> Orderitem { get; set; }
        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().ToTable("tbl_product");
            modelBuilder.Entity<User>().ToTable("tbl_user");
            modelBuilder.Entity<Admin>().ToTable("tbl_admin");
            modelBuilder.Entity<Category>().ToTable("tbl_category");
            modelBuilder.Entity<Cart>().ToTable("tbl_cart");
            modelBuilder.Entity<Payment>().ToTable("tbl_payment");
            modelBuilder.Entity<Order>().ToTable("tbl_order");
            modelBuilder.Entity<Orderitem>().ToTable("tbl_orderitem");
        }
    }
    
}

