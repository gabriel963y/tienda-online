# NextGen Store 🛍️

Tienda online moderna construida con React + Vite. Un e-commerce completo con catálogo de productos, carrito de compras, lista de deseos, blog, y más.

## ✨ Funcionalidades

- **Catálogo de productos** — Navegación con filtros por categoría, precio y ordenamiento.
- **Vista detallada** — Galería de imágenes, reseñas de clientes y selector de cantidad.
- **Carrito de compras** — Offcanvas con resumen, modificación de cantidades y checkout.
- **Lista de deseos** — Offcanvas para guardar productos favoritos.
- **Blog** — Sección con posts, barra de búsqueda, posts recientes y CTA.
- **Autenticación** — Página de inicio de sesión con formulario estilizado y opción "Recordarme".
- **Página de contacto** — Formulario de contacto e información.
- **Diseño responsive** — Bootstrap 5 + Bootswatch con componentes react-bootstrap.
- **Transiciones suaves** — Carrusel hero con Embla Carousel y autoplay.
- **Notificaciones** — Toastify para feedback visual al agregar productos.

## 🧰 Stack

| Tecnología          | Uso                          |
|---------------------|------------------------------|
| React 19            | UI                           |
| Vite 8              | Build tool                   |
| React Router 7      | Enrutamiento                 |
| Bootstrap 5.3       | Estilos y layout             |
| Bootswatch          | Tema Bootstrap               |
| react-bootstrap     | Componentes Bootstrap        |
| Embla Carousel      | Carrusel hero con autoplay   |
| Zustand             | Estado global (productos)    |
| React Context       | Estado (carrito, wishlist)   |
| react-icons         | Iconos                       |
| react-toastify      | Notificaciones               |

## 🚀 Scripts

```bash
pnpm run dev      # Entorno de desarrollo
pnpm run build    # Build de producción
pnpm run preview  # Vista previa del build
pnpm run lint     # ESLint
pnpm run format   # Prettier
```

## 📁 Estructura

```
src/
├── components/     # Componentes reutilizables
│   ├── Blog/
│   ├── CartContext/
│   ├── Contact/
│   ├── CustomerReviews/
│   ├── Header/ (navbar, topbar, carrito offcanvas, wishlist offcanvas)
│   ├── HeroCarousel/
│   ├── Login/
│   ├── PopularMenu/
│   ├── Productos/
│   ├── PromoBanner/
│   └── SingleProduct/
├── hooks/          # Custom hooks
├── pages/          # Páginas (Home, Products, SingleProduct, Blog, Contact, Login)
├── services/       # Lógica de negocio (filtros, ordenamiento)
├── store/          # Stores de Zustand
└── utils/          # Utilidades
```
