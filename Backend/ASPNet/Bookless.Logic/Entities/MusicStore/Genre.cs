//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts.Persistence.MusicStore;

namespace Bookless.Logic.Entities.MusicStore
{
	internal partial class Genre : VersionEntity, IGenre
	{
		public string Name { get; set; }

		public void CopyProperties(IGenre other)
		{
			other.CheckArgument(nameof(other));

			Id = other.Id;
			RowVersion = other.RowVersion;
			Name = other.Name;
		}
	}
}
