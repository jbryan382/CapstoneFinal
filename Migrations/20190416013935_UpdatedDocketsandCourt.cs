using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class UpdatedDocketsandCourt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "Dockets",
                newName: "date_created");

            migrationBuilder.RenameColumn(
                name: "CaseName",
                table: "Dockets",
                newName: "case_name");

            migrationBuilder.RenameColumn(
                name: "Jurisdiction",
                table: "Courthouses",
                newName: "full_name");

            migrationBuilder.RenameColumn(
                name: "FJCCourtId",
                table: "Courthouses",
                newName: "fjc_court_id");

            migrationBuilder.AddColumn<double>(
                name: "position",
                table: "Courthouses",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "position",
                table: "Courthouses");

            migrationBuilder.RenameColumn(
                name: "date_created",
                table: "Dockets",
                newName: "DateCreated");

            migrationBuilder.RenameColumn(
                name: "case_name",
                table: "Dockets",
                newName: "CaseName");

            migrationBuilder.RenameColumn(
                name: "full_name",
                table: "Courthouses",
                newName: "Jurisdiction");

            migrationBuilder.RenameColumn(
                name: "fjc_court_id",
                table: "Courthouses",
                newName: "FJCCourtId");
        }
    }
}
