using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SparePartController : ControllerBase
{
    private readonly AppDbContext _context;

    public SparePartController(AppDbContext context)
    {
        _context = context;
    }

    // 1. OBTENER TODAS LAS REFACCIONES INCLUYENDO SUS MODELOS COMPATIBLES
    [HttpGet]
    public async Task<ActionResult<IEnumerable<SparePart>>> GetSpareParts()
    {
        return await _context.SpareParts
            .Include(s => s.MachineModels)
            .ToListAsync();
    }

    // NUEVO 2. OBTENER REFACCIONES MEDIANTE EL ID DE UNA MÁQUINA FÍSICA (Resuelve el 404 de React)
    [HttpGet("machine/{machineId}")]
    public async Task<ActionResult<IEnumerable<SparePart>>> GetSparePartsByMachine(int machineId)
    {
        // A. Buscamos la máquina física en la planta (ej: ID 34)
        var machine = await _context.Machines.FindAsync(machineId);
        if (machine == null)
        {
            return NotFound("La máquina física especificada no existe.");
        }

        // B. Buscamos el modelo técnico e incluimos sus refacciones unificadas del Tool Crib
        var modelWithParts = await _context.MachineModels
            .Include(m => m.SpareParts)
            .FirstOrDefaultAsync(m => m.Id == machine.MachineModelId);

        if (modelWithParts == null)
        {
            return Ok(new List<SparePart>());
        }

        // C. Devolvemos la lista limpia de refacciones que le quedan a ese tipo de máquina
        return Ok(modelWithParts.SpareParts);
    }

    // 3. CREAR UNA NUEVA REFACCIÓN Y ENLAZARLA A UN MODELO DE MÁQUINA
    [HttpPost]
    public async Task<ActionResult<SparePart>> CreateSparePart([FromBody] SparePartInputDto input)
    {
        var machineModel = await _context.MachineModels.FindAsync(input.MachineModelId);
        if (machineModel == null)
        {
            return BadRequest("El modelo de máquina especificado no existe.");
        }

        var sparePart = new SparePart
        {
            Location = input.Location,
            PartNumberMpx = input.PartNumberMpx,
            PartNumberSupplier = input.PartNumberSupplier,
            Brand = input.Brand,
            Area = input.Area,
            DescriptionUsa = input.DescriptionUsa,
            DescriptionMex = input.DescriptionMex,
            ImageUrl = input.ImageUrl,
            Quantity = input.Quantity,
            MinStock = input.MinStock,
            MaxStock = input.MaxStock,
            Status = input.Status
        };

        sparePart.MachineModels.Add(machineModel);

        _context.SpareParts.Add(sparePart);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetSpareParts), new { id = sparePart.Id }, sparePart);
    }
}

public class SparePartInputDto
{
    public int MachineModelId { get; set; }
    public string? Location { get; set; }
    public string? PartNumberMpx { get; set; }
    public string? PartNumberSupplier { get; set; }
    public string? Brand { get; set; }
    public string? Area { get; set; }
    public string? DescriptionUsa { get; set; }
    public string? DescriptionMex { get; set; }
    public string? ImageUrl { get; set; }
    public int Quantity { get; set; }
    public int MinStock { get; set; }
    public int MaxStock { get; set; }
    public string? Status { get; set; }
}
