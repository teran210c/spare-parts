using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models
{
    [Table("lines")] // Vincula con el nombre exacto de la tabla en Neon
    public class Line
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("name")]
        [StringLength(255)]
        public string Name { get; set; } = string.Empty;

        [Column("dept")]
        [StringLength(255)]
        public string? Dept { get; set; }

        [Column("position")]
        public int Position { get; set; }


        // Relación: Una línea tiene muchas máquinas
        [JsonIgnore] // Evita bucles infinitos al serializar a JSON
        public virtual ICollection<Machine> Machines { get; set; } = new List<Machine>();
    }
}
