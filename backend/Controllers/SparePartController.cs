using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("api/sparepart")] // La URL base será: http://localhost:5267/api/sparepart
public class SparePartController : ControllerBase
{
    private readonly AppDbContext _context;

    public SparePartController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/sparepart
    // Trae TODOS los repuestos de la base de datos
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SparePart>>> GetSpareParts()
    {
        try
        {
            var spareParts = await _context.SpareParts.ToListAsync();
            return Ok(spareParts);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error interno: {ex.Message}");
        }
    }

    // GET: api/sparepart/machine/1
    // Trae solo los repuestos asignados a una máquina específica
    [HttpGet("machine/{machineId}")]
    public async Task<ActionResult<IEnumerable<SparePart>>> GetSparePartsByMachine(int machineId)
    {
        try
        {
            var spareParts = await _context.SpareParts
                .Where(sp => sp.MachineId == machineId)
                .ToListAsync();

            return Ok(spareParts);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error interno: {ex.Message}");
        }
    }
}
