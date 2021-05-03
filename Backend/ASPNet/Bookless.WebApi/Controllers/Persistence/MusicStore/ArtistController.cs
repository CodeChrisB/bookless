//@Ignore
using Microsoft.AspNetCore.Mvc;
using TContract = Bookless.Contracts.Persistence.MusicStore.IArtist;
using TModel = Bookless.Transfer.Models.Persistence.MusicStore.Artist;

namespace Bookless.WebApi.Controllers.Persistence.MusicStore
{
	[Route("api/[controller]")]
	[ApiController]
	public sealed class ArtistController : GenericController<TContract, TModel>
	{
	}
}
