//@BaseCode

namespace Bookless.Contracts
{
	public partial interface ICopyable<T>
	{
		void CopyProperties(T other);
	}
}
