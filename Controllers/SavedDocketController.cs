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
  public class SavedDocketController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public SavedDocketController()
    {
      this._context = new DatabaseContext();
    }

    //     // GET: api/SavedDocket
    //     [HttpGet]
    //     public async Task<ActionResult<IEnumerable<SavedDocket>>> GetSavedDocket()
    //     {
    //       var tokenId = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
    //       var user = await _context.Users.FirstOrDefaultAsync(f => f.userID == tokenId);
    //       return await _context.SavedDocket.Include(i => i.Docket).Where(w => w.usersId == user.Id).ToListAsync();
    //     }

    //     // GET: api/SavedDocket/5
    //     [HttpGet("{id}")]
    //     public async Task<ActionResult<SavedDocket>> GetSavedDocket(int id)
    //     {
    //       var savedDocket = await _context.SavedDocket.FindAsync(id);

    //       if (savedDocket == null)
    //       {
    //         return NotFound();
    //       }

    //       return savedDocket;
    //     }

    //     // PUT: api/SavedDocket/5
    //     [HttpPut("{id}")]
    //     public async Task<IActionResult> PutSavedDocket(int id, SavedDocket savedDocket)
    //     {
    //       if (id != savedDocket.Id)
    //       {
    //         return BadRequest();
    //       }

    //       _context.Entry(savedDocket).State = EntityState.Modified;

    //       try
    //       {
    //         await _context.SaveChangesAsync();
    //       }
    //       catch (DbUpdateConcurrencyException)
    //       {
    //         if (!SavedDocketExists(id))
    //         {
    //           return NotFound();
    //         }
    //         else
    //         {
    //           throw;
    //         }
    //       }

    //       return NoContent();
    //     }

    //     // POST: api/SavedDocket
    //     [HttpPost]
    //     public async Task<ActionResult<SavedDocket>> PostSavedDocket(SavedDocket savedDocket)
    //     {
    //       var userId = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;

    //       var user = await _context.Users.FirstOrDefaultAsync(f => f.userID == userId);
    //       savedDocket.usersId = user.Id;
    //       _context.SavedDocket.Add(savedDocket);
    //       await _context.SaveChangesAsync();

    //       return savedDocket;
    //     }

    //     // DELETE: api/SavedDocket/5
    //     [HttpDelete("{id}")]
    //     public async Task<ActionResult> DeleteSavedDocket(int id)
    //     {
    //       // get the saveddocket that was selected
    //       var userId = User.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
    //       // verify that it does belong to the user
    //       var user = _context.Users.FirstOrDefaultAsync(f => f.userID == userId);
    //       var savedDocket = await _context.SavedDocket.FirstOrDefaultAsync(f => f.Id == id && f.usersId == user.Id);

    //       if (savedDocket == null)
    //       {
    //         return NotFound();
    //       }

    //       // delete
    //       _context.SavedDocket.Remove(savedDocket);
    //       await _context.SaveChangesAsync();
    //       return Ok();
    //     }

    //     private bool SavedDocketExists(int id)
    //     {
    //       return _context.SavedDocket.Any(e => e.Id == id);
    //     }
  }
}
