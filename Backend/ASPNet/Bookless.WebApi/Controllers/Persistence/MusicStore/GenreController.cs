//@Ignore
using Microsoft.AspNetCore.Mvc;
using TContract = Bookless.Contracts.Persistence.MusicStore.IGenre;
using TModel = Bookless.Transfer.Models.Persistence.MusicStore.Genre;

namespace Bookless.WebApi.Controllers.Persistence.MusicStore
{
	[Route("api/[controller]")]
	[ApiController]
	public sealed class GenreController : GenericController<TContract, TModel>{}
}
