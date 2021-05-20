//@BaseCode

using CommonBase.Extensions;
using Bookless.Contracts;

namespace Bookless.Logic.Entities
{
	internal abstract partial class IdentityEntity : IIdentifiable
	{
		public int Id { get; set; }
	}
}
