//@Ignore
using Bookless.Logic.Contracts;
using TContract = Bookless.Contracts.Persistence.MusicStore.IArtist;
using TEntity = Bookless.Logic.Entities.MusicStore.Artist;

namespace Bookless.Logic.Controllers.Persistence.MusicStore
{
	class ArtistController : GenericPersistenceController<TContract, TEntity>
	{
		public ArtistController(IContext context) : base(context)
		{
		}
		public ArtistController(ControllerObject controllerObject) : base(controllerObject)
		{
		}
	}
}
