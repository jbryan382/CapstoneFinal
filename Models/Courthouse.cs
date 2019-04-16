using System;
using System.Collections.Generic;

namespace CapstoneFinal.Models
{
  public class Courthouse
  {
    public int Id { get; set; }
    public string Address { get; set; }
    public string full_name { get; set; }
    public string fjc_court_id { get; set; }
    public double position { get; set; }
    public List<Docket> Dockets { get; set; } = new List<Docket>();
  }
}