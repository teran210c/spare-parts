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
        public async Task<ActionResult<IEnumerable<Line>>> GetLines()
        {
            return await _context.Lines.ToListAsync();
        }

        // GET: api/lines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Line>> GetLine(int id)
        {
            var line = await _context.Lines.FindAsync(id);

            if (line == null)
            {
                return NotFound(new { message = "Línea no encontrada" });
            }

            return line;
        }
    }
}
