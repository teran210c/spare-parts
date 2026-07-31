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

    [Column("serial_number")]
    public long? SerialNumber { get; set; }

    [Required]
    [Column("name")]
    public string Name { get; set; } = string.Empty;

    [Column("model")]
    public string? Model { get; set; }

    [Column("source")]
    public string? Source { get; set; }

    [Column("owner")]
    public string? Owner { get; set; }

    [Column("clerk")]
    public string? Clerk { get; set; }

    [Column("quantity")]
    public int Quantity { get; set; } = 0;

    [Column("life_time")]
    public int? LifeTime { get; set; }

    [Column("image_url")]
    public string? ImageUrl { get; set; }
}
