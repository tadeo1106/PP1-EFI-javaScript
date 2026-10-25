# Registro de Decisiones de Arquitectura (ADR)

## ADR-001: Consigna EFI y Cumplimiento de Requisitos R1-R4
- **Contexto:** El proyecto debe cumplir con los requisitos obligatorios del Examen Final Integrador: 4 rutas base, 1 dinámica, 1 anidada, consumo asíncrono con CRUD (GET, POST, DELETE), Context API y despliegue en Vercel.
- **Decisión:** Priorizar el cumplimiento estricto de cada requisito de la consigna.
- **Consecuencias:** 
  - La sección Admin puede aprovecharse para el CRUD de recursos (ej. Películas / Funciones) y las subrutas anidadas (ej. `/admin/peliculas`, `/admin/salas`).
  - No es requerido un sistema complejo de autenticación por consigna; prescindir de login estático o mockeado simplifica el flujo para cumplir los requisitos de evaluación directos.

