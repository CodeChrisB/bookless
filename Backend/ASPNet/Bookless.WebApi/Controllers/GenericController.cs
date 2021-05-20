//@BaseCode
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookless.WebApi.Controllers
{
	public abstract class GenericController<I, M> : ControllerBase, IDisposable
        where I : Contracts.IIdentifiable
        where M : Transfer.Models.IdentityModel, I, Contracts.ICopyable<I>, new()
    {
		private bool disposedValue;

		private Contracts.Client.IControllerAccess<I> Controller { get; set; }

		public GenericController()
		{
            Controller = Logic.Factory.Create<I>();
		}

		protected M ToModel(I entity)
		{
			var result = new M();

			result.CopyProperties(entity);
			return result;
		}
		[HttpGet("/api/[controller]/Count")]
		public Task<int> GetCountAsync()
		{
			return Controller.CountAsync();
		}
		[HttpGet("/api/[controller]/Count/{predicate}")]
		public Task<int> GetCountByAsync(string predicate)
		{
			return Controller.CountByAsync(predicate);
		}
		[HttpGet("/api/[controller]/{id}")]
		public async Task<M> GetByIdAsync(int id)
		{
			var entity = await Controller.GetByIdAsync(id);

			return ToModel(entity);
		}

		[HttpGet("/api/[controller]/GetRange/{begin}/{end}")]
		public async Task<IEnumerable<M>> GetRangeAsync(int begin,int end)
		{
			var entities = await Controller.GetRangeAsync(begin,end);

			return entities.Select(e => ToModel(e));
		}

		[HttpGet("/api/[controller]/GetAll")]
		public async Task<IEnumerable<M>> GetAllAsync()
		{
			var entities = await Controller.GetAllAsync();

			return entities.Select(e => ToModel(e));
		}

		[HttpGet("/api/[controller]/Create")]
		public async Task<M> CreateAsync()
		{
			var entity = await Controller.CreateAsync();

			return ToModel(entity);
		}

		[HttpPost("/api/[controller]")]
		public async Task<M> PostAsync([FromBody] M model)
		{
			var entity = await Controller.InsertAsync(model);

			await Controller.SaveChangesAsync();
			return ToModel(entity);
		}
		[HttpPut("/api/[controller]")]
		public async Task<M> PutAsync([FromBody]M model)
		{
			var entity = await Controller.UpdateAsync(model);

			await Controller.SaveChangesAsync();
			return ToModel(entity);
		}
		[HttpDelete("/api/[controller]/{id}")]
		public async Task DeleteAsync(int id)
		{
			await Controller.DeleteAsync(id);
			await Controller.SaveChangesAsync();
		}

		#region Disposable pattern
		protected virtual void Dispose(bool disposing)
		{
			if (!disposedValue)
			{
				if (disposing)
				{
					// TODO: dispose managed state (managed objects)
					if (Controller != null)
					{
						Controller.Dispose();
					}
					Controller = null;
				}

				// TODO: free unmanaged resources (unmanaged objects) and override finalizer
				// TODO: set large fields to null
				disposedValue = true;
			}
		}

		// // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
		// ~GenericController()
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
		#endregion Disposable pattern
	}
}
