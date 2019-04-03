using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace content.Migrations
{
    public partial class AddedFKToCourthouse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courthouse",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Address = table.Column<string>(nullable: true),
                    Jurisdiction = table.Column<string>(nullable: true),
                    FJCCourtId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courthouse", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Docket",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    CaseName = table.Column<string>(nullable: true),
                    DocketNumber = table.Column<int>(nullable: false),
                    HearingDate = table.Column<DateTime>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateTerminated = table.Column<DateTime>(nullable: true),
                    CurrentStatus = table.Column<string>(nullable: true),
                    CourthouseId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docket", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Docket_Courthouse_CourthouseId",
                        column: x => x.CourthouseId,
                        principalTable: "Courthouse",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Docket_CourthouseId",
                table: "Docket",
                column: "CourthouseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Docket");

            migrationBuilder.DropTable(
                name: "Courthouse");
        }
    }
}
