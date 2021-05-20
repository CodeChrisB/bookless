//@BaseCode
using Bookless.Logic.Contracts;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bookless.Logic.Controllers
{
	internal abstract partial class GenericController<C, E> : ControllerObject, Bookless.Contracts.Client.IControllerAccess<C>
		where C : Bookless.Contracts.IIdentifiable
		where E : Entities.IdentityEntity, C, new()
	{
		protected GenericController(IContext context) : base(context)
		{
		}

		protected GenericController(ControllerObject other) : base(other)
		{
		}

		public abstract Task<int> CountAsync();

		public abstract Task<int> CountByAsync(string predicate);

		public virtual Task<C> CreateAsync()
		{
			return Task.Factory.StartNew<C>(() => new E());
		}

		public abstract Task DeleteAsync(int id);

		public abstract Task<IEnumerable<C>> GetAllAsync(); 

		public abstract Task<C> GetByIdAsync(int id);
		public abstract Task<IEnumerable<C>> GetRangeAsync(int begin,int end);
		
		public abstract Task<C> InsertAsync(C entity); 

		public abstract Task<IEnumerable<C>> QueryAllAsync(string predicate); 

		public virtual Task<int> SaveChangesAsync()
		{
			return Context.SaveChangesAsync();
		}

		public abstract Task<C> UpdateAsync(C entity);
 	}
}