using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bookless.Contracts.Client
{
    public partial interface IControllerAccess<T> : IDisposable
        where T : IIdentifiable
    {
        #region Async-Methods
        /// <summary>
        /// Gets the number of quantity in the collection.
        /// </summary>
        /// <returns>Number of entities in the collection.</returns>
        Task<int> CountAsync();
        /// <summary>
        /// Returns the number of quantity in the collection based on a predicate.
        /// </summary>
        /// <param name="predicate">A string to test each element for a condition.</param>
        /// <returns>Number of entities in the collection.</returns>
        Task<int> CountByAsync(string predicate);

        /// <summary>
        /// Returns the element of type T with the identification of id.
        /// </summary>
        /// <param name="id">The identification.</param>
        /// <returns>The element of the type T with the corresponding identification.</returns>
        Task<T> GetByIdAsync(int id);
        /// <summary>
        /// Returns the elements of type T in the range id
        /// </summary>
        Task<IEnumerable<T>> GetRangeAsync(int begin,int end);
        /// <summary>
        /// Returns all interfaces of the entities in the collection.
        /// </summary>
        /// <returns>All interfaces of the entity collection.</returns>
        Task<IEnumerable<T>> GetAllAsync();
        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="predicate">A function to test each element for a condition.</param>
        /// <returns>The filter result.</returns>
        Task<IEnumerable<T>> QueryAllAsync(string predicate);

        /// <summary>
        /// Creates a new element of type T.
        /// </summary>
        /// <returns>The new element.</returns>
        Task<T> CreateAsync();
        /// <summary>
        /// The entity is being tracked by the context but does not yet exist in the repository. 
        /// </summary>
        /// <param name="entity">The entity which is to be inserted.</param>
        /// <returns>The inserted entity.</returns>
        Task<T> InsertAsync(T entity);
        /// <summary>
        /// The entity is being tracked by the context and exists in the repository, and some or all of its property values have been modified.
        /// </summary>
        /// <param name="entity">The entity which is to be updated.</param>
        /// <returns>The the modified entity.</returns>
        Task<T> UpdateAsync(T entity);
        /// <summary>
        /// Removes the entity from the repository with the appropriate identity.
        /// </summary>
        /// <param name="id">The identification.</param>
        Task DeleteAsync(int id);

        /// <summary>
        /// Saves any changes in the underlying persistence.
        /// </summary>
        Task<int> SaveChangesAsync();
        #endregion Async-Methods
    }
}
