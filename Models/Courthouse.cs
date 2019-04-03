using System;
using System.Collections.Generic;

namespace CapstoneFinal.Models
{
  public class Courthouse
  {
    public int Id { get; set; }
    public string Address { get; set; }
    public string Jurisdiction { get; set; }
    public string FJCCourtId { get; set; }
    public List<Docket> Dockets { get; set; } = new List<Docket>();
  }
}