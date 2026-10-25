# Examen Final Integrador (EFI) - PP1 JavaScript

## Objetivo
Desarrollar una aplicación web en React que consuma información de una API de forma asíncrona, aplique enrutamiento con múltiples vistas y gestione el estado global de la aplicación.

## Modalidad y Fechas
- **Nota combinada:** En conjunto con la materia *PP1 - Python* (promedio de ambos EFIs).
- **Grupos:** Máximo hasta 4 personas (el mismo grupo para ambas materias).
- **Defensa oral:** Mostrando el proyecto en funcionamiento y respondiendo preguntas.
- **Fecha límite de entrega:** **Miércoles 4 de noviembre**.

---

## Requisitos Técnicos Obligatorios

### R1: Enrutamiento y Navegación (`react-router-dom`)
- **Rutas Base:** Al menos 4 rutas principales en la aplicación (ej. Inicio `/`, Cartelera/Catálogo `/cartelera`, Admin `/admin`, Favoritos `/favoritos`).
- **Ruta Dinámica:** Al menos 1 ruta dinámica con parámetro para detalle (`/pelicula/:id` o `/item/:id`).
- **Ruta Anidada:** Al menos 1 ruta anidada utilizando subrutas (ej. `/admin/peliculas`, `/admin/salas`, etc., o en cartelera por categoría).

### R2: Consumo de API y Manejo de Estado (`useState` y `useEffect`)
- Consumo asíncrono (`fetch` o `axios`) para operaciones CRUD: **leer (GET)**, **crear (POST)** y **eliminar (DELETE)**.
- Uso obligatorio de `useState` para:
  - Estado de los datos.
  - Indicadores de carga (*loading*).
  - Manejo y feedback de errores (*error*).
- Uso obligatorio de `useEffect` para desencadenar peticiones en carga inicial o ante cambios de filtros/parámetros.
- Formularios controlados con validaciones (campos obligatorios, formato, longitud).

### R3: Gestión de Estado Global con Context API
- Implementación de Context API (`createContext` y `useContext`) para compartir estado global.
- Casos de uso sugeridos: Favoritos, Carrito de entradas, Tema (claro/oscuro), etc.

### R4: Hosting de la aplicación en Vercel
- Configuración de variables de entorno (`.env`, `VITE_API_URL`, etc.).
- Despliegue funcional para el día del examen.

---

## Condiciones de Entrega
1. **Metodología Ágil:** Tablero Kanban o registro de tareas.
2. **Modularidad:** Separación de componentes reutilizables y limpios.
3. **Estilos:** Tailwind CSS.
4. **README.md completo:**
   - Título de la aplicación.
   - Breve descripción de la temática y API utilizada.
   - Pasos para ejecución local (`npm install`, `npm run dev`).
   - Nombres y Apellidos de los integrantes.
5. **Repositorio público en GitHub.**
6. **Estrategia GitFlow:** ramas `main`, `develop`, y `feature/*`.
