using System;
using System.Collections.Generic;

namespace CapstoneFinal.Models
{
  public class Users
  {
    public int Id { get; set; }
    public string userID { get; set; }
    public List<Docket> Dockets { get; set; } = new List<Docket>();
  }
}