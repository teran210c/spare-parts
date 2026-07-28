using Microsoft.EntityFrameworkCore;
using backend.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// 1. CONFIGURACIÓN DE CORS (Blindaje contra bloqueos) 🔽
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // URL estándar de Vite
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// 2. CONEXIÓN A TU BASE DE DATOS DE NEON 🔽
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// 3. ACTIVAR EL MIDDLEWARE DE CORS 🔽
// Es crítico que vaya exactamente aquí: antes de HttpsRedirection, Authorization y MapControllers
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
