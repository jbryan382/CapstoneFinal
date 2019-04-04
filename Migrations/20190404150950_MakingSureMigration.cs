using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class MakingSureMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Docket_Courthouse_CourthouseId",
                table: "Docket");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Docket",
                table: "Docket");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Courthouse",
                table: "Courthouse");

            migrationBuilder.RenameTable(
                name: "Docket",
                newName: "Dockets");

            migrationBuilder.RenameTable(
                name: "Courthouse",
                newName: "Courthouses");

            migrationBuilder.RenameIndex(
                name: "IX_Docket_CourthouseId",
                table: "Dockets",
                newName: "IX_Dockets_CourthouseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Dockets",
                table: "Dockets",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Courthouses",
                table: "Courthouses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Dockets_Courthouses_CourthouseId",
                table: "Dockets",
                column: "CourthouseId",
                principalTable: "Courthouses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dockets_Courthouses_CourthouseId",
                table: "Dockets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Dockets",
                table: "Dockets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Courthouses",
                table: "Courthouses");

            migrationBuilder.RenameTable(
                name: "Dockets",
                newName: "Docket");

            migrationBuilder.RenameTable(
                name: "Courthouses",
                newName: "Courthouse");

            migrationBuilder.RenameIndex(
                name: "IX_Dockets_CourthouseId",
                table: "Docket",
                newName: "IX_Docket_CourthouseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Docket",
                table: "Docket",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Courthouse",
                table: "Courthouse",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Docket_Courthouse_CourthouseId",
                table: "Docket",
                column: "CourthouseId",
                principalTable: "Courthouse",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
