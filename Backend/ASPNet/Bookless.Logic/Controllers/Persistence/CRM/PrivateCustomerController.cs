using Bookless.Logic.Contracts;
using TContract = Bookless.Contracts.Persistence.CRM.IPrivateCustomer;
using TEntity = Bookless.Logic.Entities.CRM.PrivateCustomer;

namespace Bookless.Logic.Controllers.Persistence.CRM
{
	class PrivateCustomerController : GenericPersistenceController<TContract, TEntity>
	{
		public PrivateCustomerController(IContext context) : base(context)
		{
		}
		public PrivateCustomerController(ControllerObject controllerObject) : base(controllerObject)
		{
		}
	}
}