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
using CapstoneFinal.ViewModels;

namespace content.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
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
      return await _context.Dockets.Include(i => i.CourtHouse).ToListAsync();
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

    // POST: api/Dockets/bulk
    [HttpPost("bulk")]
    public async Task<IEnumerable<Docket>> PostDocket(IEnumerable<DocketViewModel> docketsViewModels)
    {
      var dockets = new List<Docket>();
      // loop through the view models
      // foreach on, 
      foreach (var vm in docketsViewModels)
      {
        // Attempt 1
        //get the courthouse for your own database
        var courthouse = await _context.Courthouses.FirstOrDefaultAsync(f => f.CourtHouseId == vm.CourthouseId);
        // and set the courthouseid == id of the courthouse in your database
        var docket = new Docket(vm)
        {
          CourthouseId = courthouse.Id
        };
        dockets.Add(docket);
      }
      _context.Dockets.AddRange(dockets);
      await _context.SaveChangesAsync();
      return dockets;
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
