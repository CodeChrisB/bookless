//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts.Persistence.MusicStore;

namespace Bookless.Logic.Entities.MusicStore
{
	internal partial class Artist : VersionEntity, IArtist
	{
		public string Name { get; set; }

		public void CopyProperties(IArtist other)
		{
			other.CheckArgument(nameof(other));

			Id = other.Id;
			RowVersion = other.RowVersion;
			Name = other.Name;
		}
	}
}
