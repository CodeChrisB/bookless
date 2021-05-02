using ASPNet.Models;
using System.Collections.Generic;
namespace ASPNet.Services.Customers
{
    public interface IPrivateCustomerService
    {
        
        List<PrivateCustomer> GetAllCustomers();
        List<PrivateCustomer> GetRange(int begin,int end);
        PrivateCustomer GetPrivateCustomerById(int id);
        PrivateCustomer AddPrivateCustomer(PrivateCustomer customer);

    }
}