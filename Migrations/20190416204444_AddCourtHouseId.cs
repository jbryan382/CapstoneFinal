using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class AddCourtHouseId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CourtHouseId",
                table: "Courthouses",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CourtHouseId",
                table: "Courthouses");
        }
    }
}
