using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CapstoneFinal.Models;
using content;
using Microsoft.AspNetCore.Authorization;

namespace content.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class DocketsController : ControllerBase
  {
    private DatabaseContext _context;

    public DocketsController()
    {
      this._context = new DatabaseContext();
    }


    // GET: api/Dockets
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Docket>>> GetDockets()
    {
      return await _context.Dockets.ToListAsync();
    }

    // GET: api/Dockets/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Docket>> GetDocket(int id)
    {
      var docket = await _context.Dockets.FindAsync(id);

      if (docket == null)
      {
        return NotFound();
      }

      return docket;
    }

    // PUT: api/Dockets/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutDocket(int id, Docket docket)
    {
      if (id != docket.Id)
      {
        return BadRequest();
      }

      _context.Entry(docket).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!DocketExists(id))
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

    // POST: api/Dockets
    [HttpPost]
    public async Task<ActionResult<Docket>> PostDocket(Docket docket)
    {
      _context.Dockets.Add(docket);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetDocket", new { id = docket.Id }, docket);
    }

    // DELETE: api/Dockets/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Docket>> DeleteDocket(int id)
    {
      var docket = await _context.Dockets.FindAsync(id);
      if (docket == null)
      {
        return NotFound();
      }

      _context.Dockets.Remove(docket);
      await _context.SaveChangesAsync();

      return docket;
    }

    private bool DocketExists(int id)
    {
      return _context.Dockets.Any(e => e.Id == id);
    }
  }
}
