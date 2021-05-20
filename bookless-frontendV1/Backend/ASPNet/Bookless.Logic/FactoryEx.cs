//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts;
using Bookless.Contracts.Client;
using Bookless.Logic.Contracts;
using Bookless.Logic.Controllers;

namespace Bookless.Logic
{
	partial class Factory
	{
		static partial void CreateController<C>(IContext context, ref IControllerAccess<C> controller) where C : IIdentifiable
		{
			if (typeof(C) == typeof(Bookless.Contracts.Persistence.CRM.IPrivateCustomer))
			{
				controller = new Controllers.Persistence.CRM.PrivateCustomerController(context) as IControllerAccess<C>;
			}
		}
		static partial void CreateController<C>(ControllerObject controllerObject, ref IControllerAccess<C> controller) where C : IIdentifiable
		{
			controllerObject.CheckArgument(nameof(controllerObject));

			if (typeof(C) == typeof(Bookless.Contracts.Persistence.CRM.IPrivateCustomer))
			{
				controller = new Controllers.Persistence.CRM.PrivateCustomerController(controllerObject) as IControllerAccess<C>;
			}
		}
	}
}
