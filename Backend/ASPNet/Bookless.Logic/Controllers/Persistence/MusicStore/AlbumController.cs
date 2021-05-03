//@Ignore
using Bookless.Logic.Contracts;
using TContract = Bookless.Contracts.Persistence.MusicStore.IAlbum;
using TEntity = Bookless.Logic.Entities.MusicStore.Album;

namespace Bookless.Logic.Controllers.Persistence.MusicStore
{
	class AlbumController : GenericPersistenceController<TContract, TEntity>
	{
		public AlbumController(IContext context) : base(context)
		{
		}
		public AlbumController(ControllerObject controllerObject) : base(controllerObject)
		{
		}
	}
}
