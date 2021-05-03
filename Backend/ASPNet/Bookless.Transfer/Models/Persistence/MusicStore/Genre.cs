//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts.Persistence.MusicStore;

namespace Bookless.Transfer.Models.Persistence.MusicStore
{
	public partial class Genre : VersionModel, Contracts.Persistence.MusicStore.IGenre
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
