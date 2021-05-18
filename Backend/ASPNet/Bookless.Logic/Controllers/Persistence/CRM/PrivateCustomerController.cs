using Bookless.Logic.Contracts;
using TContract = Bookless.Contracts.Persistence.CRM.ICompanyCustomer;
using TEntity = Bookless.Logic.Entities.CRM.CompanyCustomer;

namespace Bookless.Logic.Controllers.Persistence.CRM
{
	class CompanyCustomerController : GenericPersistenceController<TContract, TEntity>
	{
		public CompanyCustomerController(IContext context) : base(context)
		{
		}
		public CompanyCustomerController(ControllerObject controllerObject) : base(controllerObject)
		{
		}
	}
}