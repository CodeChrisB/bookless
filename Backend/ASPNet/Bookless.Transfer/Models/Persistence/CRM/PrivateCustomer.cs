//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts.Persistence.CRM;
using Bookless.Contracts.Persistence.MusicStore;

namespace Bookless.Transfer.Models.Persistence.CRM
{
    public partial class PrivateCustomer : VersionModel, Contracts.Persistence.CRM.IPrivateCustomer
    {
        public int CustomerId { get; set; }
        public string fName { get; set; }
        public void CopyProperties(IPrivateCustomer other)
        {
            other.CheckArgument(nameof(other));

            Id = other.Id;
            RowVersion = other.RowVersion;
            fName = other.fName;
        }
    }
}
