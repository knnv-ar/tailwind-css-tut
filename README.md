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

### 2.1 Instalación de la extensión

Instalamos la extensión `Tailwind CSS IntelliSense`

### 2.2 Color de texto

URL: https://tailwindcss.com/docs/customizing-colors

```
text-green-600
```

### 2.3 Color de fondo

```
bg-green-600 text-white
```

### 2.3 Color de borde

URL: https://tailwindcss.com/docs/border-width

```
border-4 border-green-600
```

### 2.4 Uso de colores personalizados (tailwind.config.js)

URL: https://tailwindcss.com/docs/customizing-colors#using-custom-colors

Veamos cómo incorporar un color personalizado bajo el nombre `verdecito`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verdecito: "#49e659"
      }
    }
  },
  plugins: [],
}
```

Y luego:

```
text-verdecito border-4 border-green-600
```

Para graduaciones de color se puede usar:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "verdecito": {
        100: "#49e659",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63"
        }
      }
    }
  },
  plugins: [],
}
```

---

## 3. Personalización

### 3.1 ¿Qué podemos personalizar?

URL: https://tailwindcss.com/docs/configuration

Podemos personalizar:

- contenido (content)
- tema (theme)
- pantallas (screens)
- colores (colors)
- espaciado (spacing)
- plugins (plugins)
- presets (presets)

Veamos un ejemplo de archivo `tailwind.config.js`:

```js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
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
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
```

### 3.2 Pantallas

Un ejemplo de pantallas (screens): 

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
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
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

Mientras que para usarlo ponemos primero tenemos que decirle que por defecto usamos `sm` pero cuando vayamos a pantalla grande queremos que use `lg`:

```
text-sm lg:text-lg
```

Otro ejemplo que pasa por 4 pantallas:

```
text-xs sm:text-base md:text-lg lg:text-3xl
```

### 3.3 Espaciado

URL: https://tailwindcss.com/docs/customizing-spacing

Un ejemplo de espaciado (spacing): 

```js
module.exports = {
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  }
}
```

Para determinar un margin bottom 1 usamos `mb-1`:

```
mb-1
```

### 3.4 Plugins

URL: https://tailwindcss.com/docs/plugins

En Tailwind CSS podemos crear plugins, que podemos interpretar como funciones auxiliares (helper functions) que nos ayudan a establecer hojas de estilos con javascript: 

Veamos su estructura en `tailwind.config.js`:

```js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ]
}
```

Las funciones de complemento reciben un único argumento de objeto que se puede desestructurar en varias funciones auxiliares:

- `addUtilities()`, para registrar nuevos estilos de utilidad estática
- `matchUtilities()`, para registrar nuevos estilos de utilidad dinámicos
- `addComponents()`, para registrar nuevos estilos de componentes estáticos
- `matchComponents()`, para registrar nuevos estilos de componentes dinámicos
- `addBase()`, para registrar nuevos estilos base
- `addVariant()`, para registrar variantes estáticas personalizadas
- `matchVariant()`, para registrar variantes dinámicas personalizadas
- `theme()`, para buscar valores en la configuración del tema del usuario
- `config()`, para buscar valores en la configuración de Tailwind del usuario
- `corePlugins()`, para verificar si un complemento principal está habilitado
- `e()`, para escapar manualmente cadenas destinadas a ser utilizadas en nombres de clase

### 3.5 Para valores arbitrarios

URL: https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values

Podemos incorporar valores arbitrarios directamente usando el estilo en line (inline style) con los corchetes. Veamos un ejemplo:

```js
<div class="top-[117px]">
  <!-- ... -->
</div>
```

Veamos otro:

```js
div class="bg-[#bada55] text-[22px] before:content-['Festivus']">
  <!-- ... -->
</div>
```

### 3.6 Para usar reglas de CSS y la directiva `@layer`

URL: https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer

En el archivo `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    background-color: lime;
  }
}
```

Otra variante del último ejemplo puede darse con la directiva `@apply`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-slate-600;
    @apply text-white;
  }
}
```

O podemos simplificarlo encadenando las clases de esta manera:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply bg-slate-600 text-white;
  }
}
```

### 3.7 Múltiples archivos CSS

Si usás multiples archivos css podés incorporarlos usando el plugin `postcss-import`:

URL: https://tailwindcss.com/docs/adding-custom-styles#using-multiple-css-files

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### 3.8 Escribir plugins

URL: https://tailwindcss.com/docs/adding-custom-styles#writing-plugins

### 3.9 Recomendaciones

Al inicio del proyecto: 

1. abrir el archivo `tailwind.config.js` y añadir todas mis clases, espaciados, tipografías
2. añadir todo el contenido css personalizado en el archivo `globals.css`

## 4. Tipografía

### 4.1 Tamaño de tipografía (font size)

URL: https://tailwindcss.com/docs/font-size

Por defecto Tailwind CSS anula los valores por defecto de los estilos regulares de las etiquetas usuales: `h1`, `h2`, `h3`, `p`, etc. Veamos este archivo `page.tsx`:

```js
export default function Home() {
  return (
    <div>
      <h1>Title 1</h1>
      <h1>Title 2</h1>
      <h1>Title 3</h1>
      <p>A regular paragraph</p>
      <p>A description paragraph</p>
      <p className="note">A little note</p>      
    </div>
  )
}
```

Para eso tendremos que escribirlo de la sig. manera en `page.tsx`:

```js
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Title 1</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="text-xs note">A little note</p>      
    </div>
  )
}
```

Y en relación al peso de la tipografía (**font weight**) pensemos que el `normal` equivale a un peso de `400` mientras que una negrita (`bold`) equivale a un peso de `700`.

Veamos la siguiente tabla:

| Class | Properties |
| --- | --- |
| font-thin	| font-weight: 100; |
| font-extralight | font-weight: 200; |
| font-light | font-weight: 300; |
| font-normal	| font-weight: 400; |
| font-medium	| font-weight: 500; |
| font-semibold	| font-weight: 600; |
| font-bold	 | font-weight: 700; |
| font-extrabold | font-weight: 800; |
| font-black | font-weight: 900; |

### 4.2 Personalizando tu tema

Para personalizar con valores arbitrarios escribimos en el archivo `tailwind.config.js`:

```js
module.exports = {
  theme: {
    fontSize: {
      xs: '12px',
      sm: '15px',
      base: '18px'
    }
  }
}
```

El problema con esto es que se anularán los valores de las clases que no hayamos escrito. Para remediar esto movemos todo el contenido del bloque `fontSize` a `extend`:

```js
module.exports = {
  theme: {
    fontSize: {
      xs: '12px',
      sm: '15px',
      base: '18px'
    }
  }
}
```

### 4.3 Personalizando la familia de tipografía (font family)

1. Primero vamos a Google Fonts y seleccionamos los cuerpos tipográficos que queremos utilizar en la ventana **Review**.

2. Copiamos el `@import` correspondiente a la ventana `Use on the web`:

```
@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap');
```

3. En el archivo `globals.css` copiamos:

```js
// los import siempre van arriba
@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply text-black;
  }
}
```

4. Volvemos a la página Google Fonts y en la sección `CSS rules to specify families` copiamos:

```
font-family: 'Gentium Book Plus', serif;
```

5. Y lo pegamos en `globals.css`:

```js
// los import siempre van arriba
@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply text-black;
    font-family: 'Gentium Book Plus', serif;
  }
}
```

### 4.4 Suavizado de tipografías (font smoothing)

Podemos utilizar las clases `antialiased` (de renderizado más rápido) y `subpixel-antialiased` (de renderizado más lento pero mejor calidad).

```js
<p class="subpixel-antialiased ...">The quick brown fox ...</p>
<p class="antialiased ...">The quick brown fox ...</p>
```

### 4.5 Estilo de tipografías (font style)

Podemos utilizar las clases `not-italic` y `italic`.

```js
<p class="italic ...">The quick brown fox ...</p>
<p class="not-italic ...">The quick brown fox ...</p>
```

### 4.6 Decoración de texto (text decoration)

Podemos utilizar las clases `underline`, `overline`, `line-through` y `no-underline`.

```js
<p class="underline ...">The quick brown fox ...</p>
<p class="overline ...">The quick brown fox ...</p>
<p class="line-through ...">The quick brown fox ...</p>
<p class="no-underline ...">The quick brown fox ...</p>
```

### 4.7 Color de decoración de texto (text decoration color)

Podemos determinar el color de cada uno de las propiedades de decoración de texto.

```js
<div>
  <p>
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <a class="underline decoration-sky-500">My Company, Inc</a>.
    Outside of work, I like to <a class="underline decoration-pink-500">watch
    pod-racing</a> and have <a class="underline decoration-indigo-500">light-saber</a> fights.
  </p>
</div>
```

### 4.8 Estilo de decoración de texto (text decoration style)

Podemos determinar el estilo de decoración de texto.

```js
<p class="underline decoration-solid ...">The quick brown fox...</p>
<p class="underline decoration-double ...">The quick brown fox...</p>
<p class="underline decoration-dotted ...">The quick brown fox...</p>
<p class="underline decoration-dashed ...">The quick brown fox...</p>
<p class="underline decoration-wavy ...">The quick brown fox...</p>
```

### 4.9 Grosor de decoración de texto (Text Decoration Thickness)

Podemos determinar el grosor de decoración de texto.

```js
<p class="underline decoration-1 ...">The quick brown fox...</p>
<p class="underline decoration-2 ...">The quick brown fox...</p>
<p class="underline decoration-4 ...">The quick brown fox...</p>
```

### 4.10 Desplazamiento de subrayado de texto (Text Underline Offset)

Podemos determinar el desplazamiento de subrayado de texto.

```js
<p class="underline underline-offset-1 ...">The quick brown fox...</p>
<p class="underline underline-offset-2 ...">The quick brown fox...</p>
<p class="underline underline-offset-4 ...">The quick brown fox...</p>
<p class="underline underline-offset-8 ...">The quick brown fox...</p>
```

### 4.11 Altura de linea (Line Height)

Podemos determinar altura de linea.

```js
<p class="underline underline-offset-1 ...">The quick brown fox...</p>
<p class="underline underline-offset-2 ...">The quick brown fox...</p>
<p class="underline underline-offset-4 ...">The quick brown fox...</p>
<p class="underline underline-offset-8 ...">The quick brown fox...</p>
```

### 4.12 Transformadores de texto (Text Transform)

Podemos determinar transformadores de texto.

```js
<p class="normal-case ...">The quick brown fox ...</p>
<p class="uppercase ...">The quick brown fox ...</p>
<p class="lowercase ...">The quick brown fox ...</p>
<p class="capitalize ...">The quick brown fox ...</p>
```

### 4.13 Desbordamiento de texto [ayudantes de palabras] (Text Overflow)

Podemos determinar desbordamiento de texto tal como: `truncate`, `text-ellipsis` y `text-clip`.

```js
<div style={{ width: '200px' }}>
  <p className="truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius lectus nec rutrum iaculis. Curabitur dapibus pulvinar sapien, nec volutpat ex malesuada in. Donec egestas nunc sed est ultrices congue. Morbi id diam vitae tellus dignissim placerat ut eget augue. Cras sed magna vel lorem scelerisque consectetur sit amet eget odio. Morbi eget ipsum vitae magna posuere fringilla sed quis magna. Vivamus nec consequat ligula. Nulla facilisi. In pharetra elit in ligula ornare, in tincidunt risus accumsan. Nam felis risus, rhoncus in nisl ac, pellentesque pellentesque nisi. Donec posuere a augue ac fermentum. Mauris vestibulum lacinia nisi, ut bibendum purus tristique nec. Proin eu libero porttitor arcu scelerisque varius vitae convallis urna. Quisque hendrerit enim non felis imperdiet viverra.</p>
</div>
```

### 4.14 Espacio en blanco [ayudantes de palabras, espacios y ajustes de lineas] (Whitespace)

Podemos determinar espacio en blanco tales como: `whitespace-normal`, `whitespace-nowrap`, `whitespace-pre`, `whitespace-pre-line`, `whitespace-pre-wrap` y `whitespace-break-spaces`.

```js
<div class="w-3/4 ...">
  <div class="whitespace-normal ...">Hey everyone!

It's almost 2022       and we still don't know if there       is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
</div> 
```

### 4.15 Salto de palabra (Word Break)

Podemos determinar espacio en blanco tales como: `break-normal`, `break-words`, `break-all` y `break-keep`.

```js
<p class="break-normal ...">...</p>
```

## 5. Espacios y tamaños (spaces and sizes)

### 5.1 Rellenos (padding)

URL: https://tailwindcss.com/docs/padding

p-0 | padding de 0px en todos los lados

p-1 | padding de 4px en todos los lados

p-4 | padding de 16px en todos los lados

pb-4 | padding de 16px en el lado inferior

pt-4 | padding de 16px en el lado superior

pr-4 | padding de 16px en el lado derecho

pl-4 | padding de 16px en el lado izquierdo

px-4 | padding de 16px en los lados izquierdo y derecho

py-4 | padding de 16px en los lados superior e inferior

### 5.2 Márgenes (margin)

URL: https://tailwindcss.com/docs/margin

Funciona como padding pero cambiando la letra `p` por la `m`. Para los títulos se utiliza muchas veces un margen en el lado inferior con `mb`: por ejemplo `mb-2`.

m-0 | margin de 0px en todos los lados

### 5.3 Espacio entre elementos secundarios (space between)

URL: https://tailwindcss.com/docs/space

Se puede usar valores negativo como para superponer elementos: `-mt-8`.






```js
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
