//@Ignore
//@Ignore
using Microsoft.AspNetCore.Mvc;
using TContract = Bookless.Contracts.Persistence.CRM.IPrivateCustomer;
using TModel = Bookless.Transfer.Models.Persistence.CRM.PrivateCustomer;

namespace Bookless.WebApi.Controllers.Persistence.CRM
{
	[Route("api/[controller]")]
	[ApiController]
	public sealed class PrivateCustomerController : GenericController<TContract, TModel>
	{
	}
}
