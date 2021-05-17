//@Ignore
using CommonBase.Attributes;

namespace Bookless.Contracts.Persistence.CRM
{
	[ContractInfo(ContextType = ContextType.Table)]
	public partial interface IPrivateCustomer : IVersionable, ICopyable<IPrivateCustomer>
	{
		//private data
		[ContractPropertyInfo(Required = true,  IsUnique = true)]
		int CustomerId { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string fName { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string lName { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		char gender { get; set; }
		[ContractPropertyInfo(Required = true)]
		string phone { get; set; }

		//adress data
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string Town { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string Plz { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string Street { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string Country { get; set; }

		//order adress
		[ContractPropertyInfo(Required = true)]
		string[] orderAdress { get; set; }

	}
}
