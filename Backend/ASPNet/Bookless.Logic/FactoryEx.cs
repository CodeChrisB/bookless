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
			if (typeof(C) == typeof(Bookless.Contracts.Persistence.MusicStore.IGenre))
			{
				controller = new Controllers.Persistence.MusicStore.GenreController(context) as IControllerAccess<C>;
			}
			else if (typeof(C) == typeof(Bookless.Contracts.Persistence.MusicStore.IArtist))
			{
				controller = new Controllers.Persistence.MusicStore.ArtistController(context) as IControllerAccess<C>;
			}
			else if (typeof(C) == typeof(Bookless.Contracts.Persistence.MusicStore.IAlbum))
			{
				controller = new Controllers.Persistence.MusicStore.AlbumController(context) as IControllerAccess<C>;
			}
		}
		static partial void CreateController<C>(ControllerObject controllerObject, ref IControllerAccess<C> controller) where C : IIdentifiable
		{
			controllerObject.CheckArgument(nameof(controllerObject));

			if (typeof(C) == typeof(Bookless.Contracts.Persistence.MusicStore.IGenre))
			{
				controller = new Controllers.Persistence.MusicStore.GenreController(controllerObject) as IControllerAccess<C>;
			}
			else if (typeof(C) == typeof(Bookless.Contracts.Persistence.MusicStore.IArtist))
			{
				controller = new Controllers.Persistence.MusicStore.ArtistController(controllerObject) as IControllerAccess<C>;
			}
			else if (typeof(C) == typeof(Bookless.Contracts.Persistence.MusicStore.IAlbum))
			{
				controller = new Controllers.Persistence.MusicStore.AlbumController(controllerObject) as IControllerAccess<C>;
			}
		}
	}
}
