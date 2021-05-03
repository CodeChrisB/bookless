using CommonBase.Extensions;
using Bookless.Contracts.Persistence.CRM;

namespace Bookless.Logic.Entities.CRM
{
    class PrivateCustomer : VersionEntity, IPrivateCustomer
    {
        public int CustomerId { get; set; }
        public string fName { get; set; }
        public void CopyProperties(IPrivateCustomer other)
        {
            fName = other.fName;
        }
    }
}