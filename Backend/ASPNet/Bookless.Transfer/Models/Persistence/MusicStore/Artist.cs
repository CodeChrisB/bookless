//@Ignore
using CommonBase.Extensions;
using Bookless.Contracts.Persistence.CRM;
using Bookless.Contracts.Persistence.MusicStore;

namespace Bookless.Transfer.Models.Persistence.MusicStore
{
	public partial class Artist : VersionModel, IArtist
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
