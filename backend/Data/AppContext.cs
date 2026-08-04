using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Machine> Machines { get; set; }
    public DbSet<Line> Lines { get; set; } 
    public DbSet<MachineModel> MachineModels { get; set; }
    public DbSet<SparePart> SpareParts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Mapeo implícito Muchos a Muchos para model_spare_part
        modelBuilder.Entity<MachineModel>()
            .HasMany(m => m.SpareParts)
            .WithMany(s => s.MachineModels)
            .UsingEntity<Dictionary<string, object>>(
                "model_spare_part", // Nombre exacto de tu tabla intermedia en Postgres
                j => j.HasOne<SparePart>().WithMany().HasForeignKey("spare_part_id"),
                j => j.HasOne<MachineModel>().WithMany().HasForeignKey("machine_model_id")
            );
    }
}
