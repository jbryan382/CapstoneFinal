using System;

namespace CapstoneFinal.Models
{
  public class Docket
  {
    public int Id { get; set; }
    public string case_name { get; set; }
    public int DocketNumber { get; set; }
    public DateTime? HearingDate { get; set; }
    public DateTime? date_created { get; set; }
    public DateTime? DateTerminated { get; set; }
    public string CurrentStatus { get; set; }
    public int CourthouseId { get; set; }
    public Courthouse CourtHouses { get; set; }
  }
}