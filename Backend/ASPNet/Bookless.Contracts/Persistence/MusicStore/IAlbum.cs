//@Ignore
using CommonBase.Attributes;

namespace Bookless.Contracts.Persistence.MusicStore
{
	[ContractInfo(ContextType = ContextType.Table)]
	public partial interface IAlbum : IVersionable, ICopyable<IAlbum>
	{
		int ArtistId { get; set; }
		[ContractPropertyInfo(Required = true, MaxLength = 1024, IsUnique = true)]
		string Title { get; set; }
	}
}
