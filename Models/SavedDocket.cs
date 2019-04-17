using System.Collections.Generic;

namespace CapstoneFinal.Models
{
  public class SavedDocket
  {
    public int Id { get; set; }
    public int DocketId { get; set; }
    public Docket Docket { get; set; }
    public int UsersId { get; set; }
    public Users Users { get; set; }
  }
}