//@Ignore
using CommonBase.Attributes;

namespace Bookless.Contracts.Persistence.CRM
{
	[ContractInfo(ContextType = ContextType.Table)]
	public partial interface IPrivateCustomer : IVersionable, ICopyable<IPrivateCustomer>
	{
		int CustomerId { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 1024, IsUnique = true)]
		string fName { get; set; }
	}
}
