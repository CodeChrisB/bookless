using CommonBase.Attributes;
using Bookless.Contracts.Modules.Crm;

namespace Bookless.Contracts.Persistence.CRM
{
	[ContractInfo(ContextType = ContextType.Table)]
	public interface ICompanyCustomer : IVersionable, ICopyable<ICompanyCustomer>
	{
		//company country
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string companyName { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string uid { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string town { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string plz { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 128)]
		string street { get; set; }

		[ContractPropertyInfo(Required = true, MaxLength = 128)] 
		string country { get; set; }

		//order data
		[ContractPropertyInfo(Required = true)]
		string[] orderAdresses { get; set; }

		//contact person

		ContactPerson[] contactPersons { get; set; }

		/*
		 * 
		 * com name
		 * uid
		 * town
		 * plz
		 * street
		 * country
		 * +++++++++++++
		 * town[]
		 * +++++++++++++++
		 * contactperson[]
		 * 
		 */

	}
}
