using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace content.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class SearchController : ControllerBase
  {
    private DatabaseContext db;

    public SearchController()
    {
      this.db = new DatabaseContext();
    }

    [HttpGet("dockets")]

    public ActionResult SearchForDockets([FromQuery] string query)
    {

      query = query.ToLower();
      var results = db.Dockets.Where(w =>
      w.case_name.ToLower().Contains(query) ||
      w.CurrentStatus.ToLower().Contains(query) ||
      w.DocketNumber.ToString().Contains(query) ||
      w.HearingDate.ToString().Contains(query) ||
      w.date_created.ToString().Contains(query) ||
      w.DateTerminated.ToString().Contains(query)


      );
      return Ok(new { SearchingFor = query, results = results });
    }

  }
}