//@BaseCode
using CommonBase.Extensions;
using System;

namespace Bookless.Logic.Controllers
{
	internal abstract partial class ControllerObject : IDisposable
	{
		private bool contextOwner;
		protected Contracts.IContext Context { get; set; }
		public ControllerObject(Contracts.IContext context)
		{
			context.CheckArgument(nameof(context));

			contextOwner = true;
			Context = context;
		}
		public ControllerObject(ControllerObject other)
		{
			other.CheckArgument(nameof(other));

			contextOwner = false;
			Context = other.Context;
		}

		#region Dispose pattern
		private bool disposedValue;

		protected virtual void Dispose(bool disposing)
		{
			if (!disposedValue)
			{
				if (disposing)
				{
					// TODO: dispose managed state (managed objects)
					if (contextOwner)
					{
						Context.Dispose();
					}
					Context = null;
				}

				// TODO: free unmanaged resources (unmanaged objects) and override finalizer
				// TODO: set large fields to null
				disposedValue = true;
			}
		}

		// // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
		// ~ControllerObject()
		// {
		//     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
		//     Dispose(disposing: false);
		// }

		public void Dispose()
		{
			// Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
			Dispose(disposing: true);
			GC.SuppressFinalize(this);
		}
		#endregion Dispose pattern
	}
}
