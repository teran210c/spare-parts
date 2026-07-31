using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers;

[ApiController]
// Opción A: Fuerza la ruta exacta de forma manual para evitar que .NET la autogenere con variaciones
[Route("api/machine")]
public class MachineController : ControllerBase
{
    private readonly AppDbContext _context;

    public MachineController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/machine
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Machine>>> GetMachines([FromQuery] int? lineId)
    {
        try
        {
            // Creamos la consulta base (Queryable) sin ejecutarla aún en la DB
            var query = _context.Machines.AsQueryable();

            // Si el cliente envía un lineId en la URL, agregamos el filtro WHERE
            if (lineId.HasValue)
            {
                query = query.Where(m => m.LineId == lineId.Value);
            }

            var machines = await query.ToListAsync();
            return Ok(machines);

        }
        catch (Exception ex)
        {
            // Si hay un error con el DbContext o Neon, lo atrapará aquí
            return StatusCode(500, $"Error interno: {ex.Message}");
        }
    }
}
