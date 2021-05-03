//@BaseCode

using CommonBase.Extensions;
using Bookless.Logic.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookless.Logic.Controllers.Persistence
{
	internal abstract partial class GenericPersistenceController<C, E> : GenericController<C, E>
		where C : Bookless.Contracts.IIdentifiable
		where E : Entities.IdentityEntity, Bookless.Contracts.ICopyable<C>, C, new()
	{
		protected GenericPersistenceController(IContext context) : base(context)
		{
		}

		protected GenericPersistenceController(ControllerObject other) : base(other)
		{
		}

		public override Task<int> CountAsync()
		{
			return Context.CountAsync<C, E>();
		}
		public override Task<int> CountByAsync(string predicate)
		{
			return Context.CountByAsync<C, E>(predicate);
		}

		protected virtual E BeforeReturn(E entity) { return entity; }
		public override async Task<C> GetByIdAsync(int id)
		{
			var result = await Context.GetByIdAsync<C, E>(id).ConfigureAwait(false);

			return BeforeReturn(result);
		}

		public override async Task<C> GetRangeAsync(int begin,int end)
		{
			var result = await Context.GetRangeAsync<C, E>(begin,end);

			return result;
		}


		public override async Task<IEnumerable<C>> GetAllAsync()
		{
			return (await Context.GetAllAsync<C, E>()
							     .ConfigureAwait(false))
							     .Select(e => BeforeReturn(e));
		}
		public override async Task<IEnumerable<C>> QueryAllAsync(string predicate)
		{
			return (await Context.QueryAllAsync<C, E>(predicate)
				                 .ConfigureAwait(false))
								 .Select(e => BeforeReturn(e));
		}
		protected virtual E BeforeInsert(E entity) { return entity; }
		public override async Task<C> InsertAsync(C entity)
		{
			entity.CheckArgument(nameof(entity));

			var insertEntity = new E();

			insertEntity.CopyProperties(entity);

			BeforeInsert(insertEntity);
			var result = await Context.InsertAsync<C, E>(insertEntity).ConfigureAwait(false);
			AfterInsert(result);
			return result;
		}
		protected virtual E AfterInsert(E entity) { return entity; }

		protected virtual E BeforeUpdate(E entity) { return entity; }
		public override async Task<C> UpdateAsync(C entity)
		{
			entity.CheckArgument(nameof(entity));

			var updateEntity = await Context.GetByIdAsync<C, E>(entity.Id).ConfigureAwait(false);

			updateEntity.CopyProperties(entity);
			
			BeforeUpdate(updateEntity);
			var result = await Context.UpdateAsync<C, E>(updateEntity).ConfigureAwait(false);
			AfterUpdate(result);
			return result;
		}
		protected virtual E AfterUpdate(E entity) { return entity; }

		public override async Task DeleteAsync(int id)
		{
			var entity = await GetByIdAsync(id).ConfigureAwait(false);

			if (entity == null)
				throw new Exception($"Invalid id: '{id}'");

			await Context.DeleteAsync<C, E>(id).ConfigureAwait(false);
		}

	}
}
