using System.Collections.Generic;
using ASPNet.Models.CRM;
namespace ASPNet.Models
{
    public class CompanyCustomer
    {
        public long id { get; set; }
        public string name { get; set; }
        public string uid { get; set; }
        public string town { get; set; }
        public string plz { get; set; }
        public string street { get; set; }
        public string country { get; set; }

        public List<string> shippingAdress = new List<string>();
        public List<ContactPerson> contactPersons = new List<ContactPerson>();
    }

}