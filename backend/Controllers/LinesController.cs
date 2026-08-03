using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data; // Cambia esto por la carpeta de tu ApplicationDbContext
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LinesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/lines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Line>>> GetLines([FromQuery] string dept)
        {
            var resultado = await _context.Lines
                .Where(l => l.Dept == dept)
                .OrderBy(l => l.Position)
                .ToListAsync();

            return Ok(resultado);
        }

    }
}
