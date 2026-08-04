using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models;

[Table("machine_model")]
public class MachineModel
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("name")]
    public string Name { get; set; } = string.Empty;

    [Column("brand")]
    public string? Brand { get; set; }

    // Relación Muchos a Muchos automática con Repuestos (Administra model_spare_part)
    [JsonIgnore]
    public virtual ICollection<SparePart> SpareParts { get; set; } = new List<SparePart>();
}
