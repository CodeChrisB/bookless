//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts.Persistence.CRM;
using Bookless.Contracts.Modules.Crm;

namespace Bookless.Transfer.Models.Persistence.CRM
{
    public partial class CompanyCustomer : VersionModel, Contracts.Persistence.CRM.ICompanyCustomer
    {
        public string companyName { get; set; }
        public string uid { get; set; }
        public string town { get; set; }
        public string plz { get; set; }
        public string street { get; set; }
        public string country { get; set; }
        public string[] orderAdresses { get; set; }
        public ContactPerson[] contactPersons { get; set; }

        public void CopyProperties(ICompanyCustomer other)
        {
            other.CheckArgument(nameof(other));

            Id = other.Id;
            //RowVersion = other.RowVersion;
           //Todo
        }
    }
}
