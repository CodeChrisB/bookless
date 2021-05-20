//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts.Persistence.CRM;

namespace Bookless.Transfer.Models.Persistence.CRM
{
    public partial class PrivateCustomer : VersionModel, Contracts.Persistence.CRM.IPrivateCustomer
    {
        public string fName { get; set; }
        public string lName { get; set; }
        public char gender { get; set; }
        public string phone { get; set; }
        public string Town { get; set; }
        public string Plz { get; set; }
        public string Street { get; set; }
        public string Country { get; set; }
        public string[] orderAdress { get; set; }

        public void CopyProperties(IPrivateCustomer other)
        {
            other.CheckArgument(nameof(other));

            Id = other.Id;
            RowVersion = other.RowVersion;
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
