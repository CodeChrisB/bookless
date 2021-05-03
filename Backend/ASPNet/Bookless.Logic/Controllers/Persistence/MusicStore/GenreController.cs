//@Ignore
using Bookless.Logic.Contracts;
using TContract = Bookless.Contracts.Persistence.MusicStore.IGenre;
using TEntity = Bookless.Logic.Entities.MusicStore.Genre;

namespace Bookless.Logic.Controllers.Persistence.MusicStore
{
	class GenreController : GenericPersistenceController<TContract, TEntity>
	{
		public GenreController(IContext context) : base(context)
		{
		}
		public GenreController(ControllerObject controllerObject) : base(controllerObject)
		{
		}
	}
}
