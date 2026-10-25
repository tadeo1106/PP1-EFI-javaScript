# Convenciones de Desarrollo

- **Estrategia Git:** GitFlow con ramas `main`, `develop`, y `feature/*`. No commitear directamente en `main`.
- **Componentes:** Funcionales con nombres PascalCase, exportación nombrada o por defecto consistente.
- **Manejo de Formularios:** Inputs controlados con `useState` y validaciones previas al envío.
- **Estados Asíncronos:** Toda llamada a API debe contemplar explícitamente:
  - `loading` (spinner / skeleton)
  - `error` (mensaje claro de error)
  - `data` / `success`
- **Tailwind CSS:** Clases de utilidad para todos los estilos visuales.
