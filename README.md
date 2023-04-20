# Tailwind CSS Tutorial

Learn Tailwind CSS – Course for Beginners

URL: https://youtu.be/ft30zcMlFao

Tailwind CSS v3.3.1

1. Configuración y conceptos principales
2. Color
3. Customization
4. Typography
5. Spaces & sizes
6. Flex
7. Grids
8. Layouts
9. Borders
10. Effects & filters
11. Animations
12. Design System
13. Core concepts
14. Dark mode


---

## 1. Configuración y conceptos principales

### 1.1 Configuración

1. Crear proyecto:

```sh
npx create-next-app@latest tailwind-css-tut --typescript --eslint

cd tailwind-css-tut
```
  -  Opciones:

```sh
√ Would you like to use Tailwind CSS with this project? ... [No]

√ Would you like to use `src/` directory with this project? ... [No]

√ Would you like to use experimental `app/` directory with this project? ... [Yes]

√ What import alias would you like configured? ... @/* [Enter]
```

2. Instalar Tailwind CSS:

```sh
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

3. Configurar las rutas de plantillas en `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

4. Agregar las directivas de Tailwind a tu CSS en `globals.css`: 

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Ejecutar aplicación: 

```sh
npm run dev
```

6. Probar la app modificando `page.tsx`:

```js
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

---

### 1.2 Conceptos principales

1. Clases de utilidad (utility classes)


**Responsive design: modifiers**

```
sm, md, lg, etc.
```

| Breakpoint prefix | Minimum width | CSS |
| --- | --- | --- |
| sm | 640px | @media (min-width: 640px) { ... } |
| md | 768px | @media (min-width: 768px) { ... } |
| lg | 1024px | @media (min-width: 1024px) { ... } |
| xl | 1280px | @media (min-width: 1280px) { ... } |
| 2xl | 1536px | @media (min-width: 1536px) { ... } |


```
md:w-32

hover:underline

focus:outline-non

active:bg-violet-700

last:pb-0

odd:bg-white

even:bg-slate-50

first:pt-0

last:pb-0

before:block

after:text-red-500

placeholder:italics

marker:text-sky-400

selection: bg:fuchsia-300

dark:bg-slate-900
```

Temas configurables en `tailwind.config.js`:

```js
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```
---

## 2. Color



```sh
```


---
---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
