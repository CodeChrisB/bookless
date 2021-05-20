//@BaseCode
using Microsoft.EntityFrameworkCore;
using Bookless.Contracts;
using Bookless.Logic.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bookless.Logic.Contracts
{
	internal interface IContext : IDisposable
	{
		DbSet<E> Set<C, E>()
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task<int> CountAsync<C, E>()
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task<int> CountByAsync<C, E>(string predicate)
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task<E> GetByIdAsync<C, E>(int id)
			where C : IIdentifiable
			where E : IdentityEntity, C;
		Task<IEnumerable<E>> GetRangeAsync<C, E>(int begin,int end)
			where C : IIdentifiable
			where E : IdentityEntity, C;
		Task<IEnumerable<E>> GetAllAsync<C, E>()
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task<IEnumerable<E>> QueryAllAsync<C, E>(string predicate)
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task<E> InsertAsync<C, E>(E entity)
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task<E> UpdateAsync<C, E>(E entity)
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task DeleteAsync<C, E>(int id)
			where C : IIdentifiable
			where E : IdentityEntity, C;

		Task<int> SaveChangesAsync();
	}
}
