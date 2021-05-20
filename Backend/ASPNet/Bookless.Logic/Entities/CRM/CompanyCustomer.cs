using CommonBase.Extensions;
using Bookless.Contracts.Persistence.CRM;
using Bookless.Contracts.Modules.Crm;

namespace Bookless.Logic.Entities.CRM
{
    class CompanyCustomer : VersionEntity, ICompanyCustomer
    {
        public string companyName{ get; set; }
        public string uid{ get; set; }
        public string town{ get; set; }
        public string plz{ get; set; }
        public string street{ get; set; }
        public string country{ get; set; }
        public string[] orderAdresses{ get; set; }
        public ContactPerson[] contactPersons{ get; set; }

        public void CopyProperties(ICompanyCustomer other)
        {
            companyName = other.companyName;
            uid = other.uid;
            town = other.town;
            plz = other.plz;
            street = other.street;
            country = other.country;
            orderAdresses = other.orderAdresses;
            contactPersons = other.contactPersons;
        }

    }
}