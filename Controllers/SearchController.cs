using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace content.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class SearchController : ControllerBase
  {
    private DatabaseContext db;

    public SearchController(DatabaseContext context)
    {
      this.db = context;
    }

    [HttpGet("dockets")]

    public async Task<ActionResult> SearchForDockets([FromQuery] string query)
    {

      query = query.ToLower();
      // var results = await db.Dockets.Include(i => i.CourtHouse).Where(w =>
      // w.CourtHouse.full_name.Contains(query)
      // ).ToListAsync();
      var results = await db.Dockets.Include(i => i.CourtHouse).Where(w =>
      w.case_name.ToLower().Contains(query) ||
      w.DocketNumber.ToString().Contains(query) ||
      w.CourtHouse.full_name.ToLower().Contains(query) ||
      w.date_created.ToString().Contains(query) ||
      w.DateTerminated.ToString().Contains(query)
      ).ToListAsync();
      return Ok(new { SearchingFor = query, results = results });
    }

  }
}