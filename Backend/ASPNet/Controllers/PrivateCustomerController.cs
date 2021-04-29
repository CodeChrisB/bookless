using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ASPNet.Models;

namespace ASPNet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PrivateCustomerController : ControllerBase
    {
      private static List<PrivateCustomer> customers = new List<PrivateCustomer>(){
          new PrivateCustomer(),
          new PrivateCustomer{ Name="Egger" ,Id=1},
          new PrivateCustomer{ Name="Egger" ,Id=2},
          new PrivateCustomer{ Name="Egger" ,Id=3},
          new PrivateCustomer{ Name="Egger" ,Id=4}
        };

        [HttpGet("GetAll")]
        public ActionResult<List<PrivateCustomer>> Get()
        {
            return Ok(customers);
        }

        [HttpGet("{id}")]
        public ActionResult<List<PrivateCustomer>> GetSingle(int id)
        {
            return Ok(customers.FirstOrDefault(c=>c.Id==id));
        }

        [HttpGet("{begin}/{end}")]
        public ActionResult<List<PrivateCustomer>> GetRange(int begin,int end)
        {
            return Ok(customers.GetRange(begin,end));
        }

        [HttpPost]
        public ActionResult<List<PrivateCustomer>> AddCPrivateCustomer(PrivateCustomer customer){
            customers.Add(customer);
            return Ok(customer);
        }
        


    }
}