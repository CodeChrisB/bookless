//@Ignore
using Microsoft.EntityFrameworkCore;
using ClientCorntracts = Bookless.Contracts;

namespace Bookless.Logic.DataContext
{
	partial class ProjectDbContext
	{
		public DbSet<Entities.MusicStore.Genre> Genres { get; set; }
		public DbSet<Entities.MusicStore.Artist> Artists { get; set; }
		public DbSet<Entities.MusicStore.Album> Albums { get; set; }


		partial void GetDbSet<C, E>(ref DbSet<E> dbset) where E : class
		{
			if (typeof(C) == typeof(ClientCorntracts.Persistence.MusicStore.IGenre))
			{
				dbset = Genres as DbSet<E>;
			}
			else if (typeof(C) == typeof(ClientCorntracts.Persistence.MusicStore.IArtist))
			{
				dbset = Artists as DbSet<E>;
			}
			else if (typeof(C) == typeof(ClientCorntracts.Persistence.MusicStore.IAlbum))
			{
				dbset = Albums as DbSet<E>;
			}
		}

		partial void BeforeOnModelCreating(ModelBuilder modelBuilder, ref bool handled)
		{
			var genreBuilder = modelBuilder.Entity<Entities.MusicStore.Genre>();

			genreBuilder.HasKey(p => p.Id);
			genreBuilder.Property(p => p.RowVersion).IsRowVersion();
			genreBuilder.Property(p => p.Name)
						 .IsRequired()
						 .HasMaxLength(256);
			genreBuilder.HasIndex(p => p.Name)
						 .IsUnique();

			var artistBuilder = modelBuilder.Entity<Entities.MusicStore.Artist>();

			artistBuilder.HasKey(p => p.Id);
			artistBuilder.Property(p => p.RowVersion).IsRowVersion();
			artistBuilder.Property(p => p.Name)
						 .IsRequired()
						 .HasMaxLength(256);
			artistBuilder.HasIndex(p => p.Name)
						 .IsUnique();

			var albumBuilder = modelBuilder.Entity<Entities.MusicStore.Album>();

			albumBuilder.HasKey(p => p.Id);
			albumBuilder.Property(p => p.RowVersion).IsRowVersion();
			albumBuilder.Property(p => p.Title)
						 .IsRequired()
						 .HasMaxLength(1024);
			albumBuilder.HasIndex(p => p.Title)
						 .IsUnique();
		}
	}
}
