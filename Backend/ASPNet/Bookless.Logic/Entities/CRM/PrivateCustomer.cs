using CommonBase.Extensions;
using Bookless.Contracts.Persistence.CRM;

namespace Bookless.Logic.Entities.CRM
{
    class PrivateCustomer : VersionEntity, IPrivateCustomer
    {
        public string fName { get; set; }
        public string lName{ get; set; }
        public char gender{ get; set; }
        public string phone{ get; set; }
        public string Town{ get; set; }
        public string Plz{ get; set; }
        public string Street{ get; set; }
        public string Country{ get; set; }
        public string[] orderAdress{ get; set; }
        public void CopyProperties(IPrivateCustomer other)
        {
            fName = other.fName;
            lName = other.lName;
            gender = other.gender;
            phone = other.phone;
            Town = other.Town;
            Plz = other.Plz;
            Street = other.Street;
            Country = other.Country;
            orderAdress = other.orderAdress;
        }
    }
}