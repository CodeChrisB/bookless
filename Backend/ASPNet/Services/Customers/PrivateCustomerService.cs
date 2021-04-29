using System.Collections.Generic;
using ASPNet.Models;
using System.Linq;

namespace ASPNet.Services.Customers
{
    public class PrivateCustomerService : IPrivateCustomerService
    {

        private static List<PrivateCustomer> customers = new List<PrivateCustomer>(){
          new PrivateCustomer(),
          new PrivateCustomer{ Name="Egger" ,Id=1},
          new PrivateCustomer{ Name="Egger" ,Id=2},
          new PrivateCustomer{ Name="Egger" ,Id=3},
          new PrivateCustomer{ Name="Egger" ,Id=4}
        };


        public PrivateCustomer AddPrivateCustomer(PrivateCustomer customer)
        {
           customers.Add(customer);
            return customer;
        }

        public List<PrivateCustomer> GetAllCustomers()
        {
            return customers;
        }

        public PrivateCustomer GetPrivateCustomerById(int id)
        {
            return customers.FirstOrDefault(c=>c.Id==id);
        }

        public List<PrivateCustomer> GetRange(int begin, int end)
        {
            return customers.GetRange(begin,end);
        }
    }
}