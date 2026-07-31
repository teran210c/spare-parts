using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models;

[Table("machine")]
public class Machine
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("name")]
    [StringLength(255)]
    public string Name { get; set; } = string.Empty;

    [Column("brand")]
    [StringLength(255)]
    public string? Brand { get; set; }

    // 1. AGREGA LA LLAVE FORÁNEA HACIA LA TABLA LINES
    [Required]
    [Column("line_id")]
    public int LineId { get; set; }

    // 2. AGREGA LA RELACIÓN DE OBJETO EN C#
    [ForeignKey("LineId")]
    [JsonIgnore] // Evita bucles infinitos en las consultas de la API
    public virtual Line? Line { get; set; }

    // Relación inversa: Una máquina tiene muchos repuestos
    [JsonIgnore]
    public virtual ICollection<SparePart> SpareParts { get; set; } = new List<SparePart>();
}