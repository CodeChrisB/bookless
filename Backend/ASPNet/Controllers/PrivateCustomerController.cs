using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ASPNet.Models;
using ASPNet.Services.Customers;

namespace ASPNet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrivateCustomerController : ControllerBase
    {


        private readonly IPrivateCustomerService privateCustomerService;

        public PrivateCustomerController(IPrivateCustomerService privateCustomerService){
            this.privateCustomerService = privateCustomerService; 
        }

        [HttpGet("GetAll")]
        public ActionResult<List<PrivateCustomer>> Get()
        {
           return this.privateCustomerService.GetAllCustomers();
        }

        [HttpGet("{id}")]
        public PrivateCustomer GetSingle(int id)
        {
            return this.privateCustomerService.GetPrivateCustomerById(id);
        }

        [HttpGet("{begin}/{end}")]
        public ActionResult<List<PrivateCustomer>> GetRange(int begin,int end)
        {
            return this.privateCustomerService.GetRange(begin,end);
        }

        [HttpPost]
        public PrivateCustomer AddCPrivateCustomer(PrivateCustomer customer){
           return this.privateCustomerService.AddPrivateCustomer(customer);
        }
        


    }
}