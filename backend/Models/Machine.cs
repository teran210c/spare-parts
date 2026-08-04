using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("machine")]
public class Machine
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("line_id")]
    public int LineId { get; set; }

    [Column("machine_model_id")]
    public int MachineModelId { get; set; }

    [Required]
    [Column("name")]
    public string Name { get; set; } = string.Empty;
}
