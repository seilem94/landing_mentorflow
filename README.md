# MentorFlow — Landing Page

> Stack: React 19 + Vite 6 + Tailwind CSS v4 + React Router v7

---

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.example .env

# 3. Levantar dev server
npm run dev        # http://localhost:5173

# 4. Build de producción
npm run build
npm run preview    # revisar build localmente
```

---

## Estructura de carpetas

```
mentorflow/
├── public/                     # Archivos estáticos (favicon, og-image, etc.)
├── src/
│   ├── components/
│   │   ├── layout/             # Componentes de shell: Navbar, Footer, Sidebar (futuro)
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/           # Secciones de página (una por bloque visual)
│   │   │   ├── HeroSection.jsx
│   │   │   ├── StatsStrip.jsx
│   │   │   ├── FeaturesSection.jsx
│   │   │   ├── HowItWorksSection.jsx
│   │   │   ├── MetricsSection.jsx
│   │   │   └── CtaSection.jsx
│   │   └── ui/                 # Átomos reutilizables (Button, Badge, Card, etc.)
│   │       ├── Button.jsx
│   │       └── SectionLabel.jsx
│   ├── pages/                  # Una por ruta. Solo composición, sin lógica propia.
│   │   └── LandingPage.jsx
│   ├── hooks/                  # Custom hooks — lógica reutilizable
│   │   ├── useScrollReveal.js  # Animación de entrada con IntersectionObserver
│   │   └── useContactForm.js   # Estado + submit del formulario de demo
│   ├── services/               # Llamadas externas (fetch, APIs). Sin lógica de UI.
│   │   └── contact.js          # requestDemo() — stub listo para conectar a API
│   ├── constants/
│   │   └── content.js          # TODO el copy de la landing centralizado aquí
│   ├── utils/
│   │   └── cn.js               # Combinar clases CSS condicionalmente
│   ├── styles/
│   │   └── globals.css         # Design tokens CSS, reset, animaciones globales
│   ├── App.jsx                 # Router raíz — agregar rutas aquí
│   └── main.jsx                # Entry point
├── index.html
├── vite.config.js
├── eslint.config.js
├── .prettierrc
├── .env.example
└── package.json
```

---

## Arquitectura por capas

```
┌─────────────────────────────────────────┐
│  Pages  (pages/)                        │  ← Composición de secciones. Sin lógica.
├─────────────────────────────────────────┤
│  Sections  (components/sections/)       │  ← Bloques visuales completos de la página
├─────────────────────────────────────────┤
│  Layout  (components/layout/)           │  ← Shell: nav, footer, wrappers
├─────────────────────────────────────────┤
│  UI Atoms  (components/ui/)             │  ← Button, Badge, Card — sin estado propio
├─────────────────────────────────────────┤
│  Hooks  (hooks/)                        │  ← Lógica reutilizable con estado React
├─────────────────────────────────────────┤
│  Services  (services/)                  │  ← Fetch, APIs externas — sin UI
├─────────────────────────────────────────┤
│  Constants  (constants/)               │  ← Datos, copy, configuración estática
└─────────────────────────────────────────┘
```

**Regla clave:** cada capa solo puede importar de capas inferiores.
Una `Section` puede usar `UI atoms` y `hooks`, pero no puede importar otra `Section`.
Un `Service` no importa nada de React.

---

## Design tokens

Todos los valores de diseño viven como variables CSS en `src/styles/globals.css`:

| Token             | Valor           | Uso                        |
|-------------------|-----------------|----------------------------|
| `--bg`            | `#0a0a0f`       | Fondo principal            |
| `--bg2`           | `#0f0f18`       | Fondo secundario           |
| `--bg3`           | `#13131f`       | Cards, modales             |
| `--amber`         | `#e8a045`       | Color de marca / CTAs      |
| `--amber-dim`     | `#c07a20`       | Hover, gradientes          |
| `--amber-faint`   | `rgba(232,160,69,0.07)` | Fondos de iconos  |
| `--teal`          | `#2dd4bf`       | Acento secundario          |
| `--text`          | `#f0ede8`       | Texto principal            |
| `--text-muted`    | `#8a8790`       | Texto secundario           |
| `--text-dim`      | `#4a4855`       | Texto decorativo / labels  |
| `--font-display`  | Bricolage Grotesque | Títulos               |
| `--font-body`     | DM Sans         | Cuerpo de texto            |

---

## Agregar una nueva sección

1. Crear `src/components/sections/NuevaSección.jsx`
2. Agregar el copy en `src/constants/content.js`
3. Importar y colocar en `src/pages/LandingPage.jsx`

```jsx
// LandingPage.jsx
import { NuevaSeccion } from '@/components/sections/NuevaSeccion.jsx'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        ...
        <NuevaSeccion />
        ...
      </main>
      <Footer />
    </>
  )
}
```

---

## Agregar una nueva ruta (futuro)

```jsx
// App.jsx
import LoginPage from '@/pages/LoginPage.jsx'

<Routes>
  <Route path="/"       element={<LandingPage />} />
  <Route path="/login"  element={<LoginPage />} />
</Routes>
```

---

## Conectar el formulario de demo a una API real

Editar `src/services/contact.js` — descomentar el fetch y apuntar a `VITE_API_URL`:

```js
export async function requestDemo(email) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/demo-request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  return res.json()
}
```

Luego en `.env`:
```
VITE_API_URL=https://api.mentorflow.io
```

---

## Migración a Next.js (cuando sea el momento)

La estructura ya está preparada para migrar sin reescribir:

1. Crear proyecto Next.js con App Router
2. Mover `src/components/`, `src/hooks/`, `src/services/`, `src/constants/` — **sin cambios**
3. Convertir `src/pages/LandingPage.jsx` → `app/page.jsx` (ajustar imports)
4. Mover `src/styles/globals.css` → importar desde `app/layout.jsx`
5. Marcar con `'use client'` los componentes que usen hooks de React

---

## Scripts disponibles

| Comando            | Descripción                          |
|--------------------|--------------------------------------|
| `npm run dev`      | Dev server con HMR                   |
| `npm run build`    | Build de producción en `/dist`       |
| `npm run preview`  | Servidor local del build             |
| `npm run lint`     | ESLint — revisar errores             |
| `npm run lint:fix` | ESLint — corregir automáticamente    |
| `npm run format`   | Prettier — formatear archivos        |
