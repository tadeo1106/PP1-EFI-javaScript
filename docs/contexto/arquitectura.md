# Arquitectura del Proyecto

## Stack Tecnológico
- **Frontend Core:** React con Vite.
- **Estilos:** Tailwind CSS.
- **Enrutamiento:** `react-router-dom` (BrowserRouter, Routes, Route, Outlet).
- **Estado Local / Async:** Hooks nativos (`useState`, `useEffect`) y hooks custom (`src/hook/`).
- **Estado Global:** Context API (`createContext`, `useContext`) para datos compartidos (ej. Favoritos / Carrito).
- **Servicios API:** Módulo en `src/api/` para llamadas HTTP asíncronas (`fetch` / `axios`).

## Estructura de Directorios
- `src/api/`: Servicios de conexión y llamadas a la API REST.
- `src/commponets/`: Componentes modulares y reutilizables (UI, layout, cards, navbar, footer).
- `src/hook/`: Custom hooks para encapsular lógica de estado y peticiones.
- `src/pages/`: Vistas principales asociadas a rutas (Home, Cartelera, Admin, etc.).
- `src/context/`: Contextos globales con Context API.
- `docs/contexto/`: Base de conocimiento viva del proyecto.
