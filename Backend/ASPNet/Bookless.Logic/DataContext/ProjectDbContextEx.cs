//@Ignore
using Microsoft.EntityFrameworkCore;
using ClientCorntracts = Bookless.Contracts;

namespace Bookless.Logic.DataContext
{
	partial class ProjectDbContext
	{

		public DbSet<Entities.CRM.PrivateCustomer> PrivateCustomer { get; set; }

		partial void GetDbSet<C, E>(ref DbSet<E> dbset) where E : class
		{
			if (typeof(C) == typeof(ClientCorntracts.Persistence.CRM.IPrivateCustomer))
			{
				dbset = PrivateCustomer as DbSet<E>;
			}
		}

		partial void BeforeOnModelCreating(ModelBuilder modelBuilder, ref bool handled)
		{
			var genreBuilder = modelBuilder.Entity<Entities.CRM.PrivateCustomer>();

			genreBuilder.HasKey(p => p.Id);
			genreBuilder.Property(p => p.RowVersion).IsRowVersion();
			genreBuilder.Property(p => p.fName)
						 .IsRequired()
						 .HasMaxLength(256);
			genreBuilder.HasIndex(p => p.Id)
						 .IsUnique();
		}
	}
}
