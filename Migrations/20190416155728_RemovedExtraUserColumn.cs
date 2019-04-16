using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class RemovedExtraUserColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userToken",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userToken",
                table: "Users",
                nullable: true);
        }
    }
}
