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

   [HttpGet]
public async Task<ActionResult> GetMachinesByLine([FromQuery] int lineId)
{
    var machines = await _context.Machines
        .Where(m => m.LineId == lineId)
        .Select(m => new 
        {
            id = m.Id,
            name = m.Name, // Ej: "Printer - Línea 1"
            // Buscamos la marca cruzando los datos con su catálogo técnico
            brand = _context.MachineModels
                            .Where(mm => mm.Id == m.MachineModelId)
                            .Select(mm => mm.Brand)
                            .FirstOrDefault() ?? "Generic"
        })
        .ToListAsync();

    return Ok(machines);
}


}
