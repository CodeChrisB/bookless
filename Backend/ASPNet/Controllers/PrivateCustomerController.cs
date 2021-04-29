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
          new PrivateCustomer{ Name="Egger"}
        };

        [HttpGet]
        public ActionResult<List<PrivateCustomer>> Get()
        {
            return Ok(customers);
        }
    }
}