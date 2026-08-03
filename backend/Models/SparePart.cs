using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("spare_part")]
public class SparePart
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("machine_id")]
    public int? MachineId { get; set; }

    [Column("location")]
    public string? Location { get; set; }

    [Column("part_number_mpx")]
    public string? PartNumberMpx { get; set; }

    [Column("part_number_supplier")]
    public string? PartNumberSupplier { get; set; }

    [Column("brand")]
    public string? Brand { get; set; }

    [Column("area")]
    public string? Area { get; set; }

    [Column("description_usa")]
    public string? DescriptionUsa { get; set; }

    [Column("description_mex")]
    public string? DescriptionMex { get; set; }

    [Column("image_url")]
    public string? ImageUrl { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; } = 0; // Representa el campo INV

    [Column("min_stock")]
    public int MinStock { get; set; } = 0;

    [Column("max_stock")]
    public int MaxStock { get; set; } = 0;

    [Column("status")]
    public string? Status { get; set; }
}
