//@Ignore
using Microsoft.AspNetCore.Mvc;
using TContract = Bookless.Contracts.Persistence.CRM.ICompanyCustomer;
using TModel = Bookless.Transfer.Models.Persistence.CRM.CompanyCustomer;

namespace Bookless.WebApi.Controllers.Persistence.CRM
{
	[Route("api/[controller]")]
	[ApiController]
	public sealed class CompanyController : GenericController<TContract, TModel>
	{
	}
}
