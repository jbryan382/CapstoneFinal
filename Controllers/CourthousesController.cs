using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CapstoneFinal.Models;
using content;

namespace content.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourthousesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public CourthousesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Courthouses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Courthouse>>> GetCourthouses()
        {
            return await _context.Courthouses.ToListAsync();
        }

        // GET: api/Courthouses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Courthouse>> GetCourthouse(int id)
        {
            var courthouse = await _context.Courthouses.FindAsync(id);

            if (courthouse == null)
            {
                return NotFound();
            }

            return courthouse;
        }

        // PUT: api/Courthouses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourthouse(int id, Courthouse courthouse)
        {
            if (id != courthouse.Id)
            {
                return BadRequest();
            }

            _context.Entry(courthouse).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourthouseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Courthouses
        [HttpPost]
        public async Task<ActionResult<Courthouse>> PostCourthouse(Courthouse courthouse)
        {
            _context.Courthouses.Add(courthouse);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourthouse", new { id = courthouse.Id }, courthouse);
        }

        // DELETE: api/Courthouses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Courthouse>> DeleteCourthouse(int id)
        {
            var courthouse = await _context.Courthouses.FindAsync(id);
            if (courthouse == null)
            {
                return NotFound();
            }

            _context.Courthouses.Remove(courthouse);
            await _context.SaveChangesAsync();

            return courthouse;
        }

        private bool CourthouseExists(int id)
        {
            return _context.Courthouses.Any(e => e.Id == id);
        }
    }
}
