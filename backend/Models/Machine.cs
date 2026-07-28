using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("machine")]
public class Machine
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("name")]
    public string Name { get; set; } = string.Empty;

    [Column("brand")]
    public string? Brand { get; set; }

    [Column("dept")]
    public string? Dept { get; set; }

    [Column("line")]
    public string? Line { get; set; }
}
