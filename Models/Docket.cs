using System;
using CapstoneFinal.ViewModels;

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
    public Courthouse CourtHouse { get; set; }
    public Docket()
    {
      // default empty ctor
    }
    public Docket(DocketViewModel vm)
    {
      this.CurrentStatus = vm.CurrentStatus;
      this.DateTerminated = vm.DateTerminated;
      this.DocketNumber = vm.DocketNumber;
      this.HearingDate = vm.HearingDate;
      this.Id = vm.Id;
      this.case_name = vm.case_name;
      this.date_created = vm.date_created;
    }
  }
}