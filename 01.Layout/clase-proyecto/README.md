# Sitio Multipágina con Vite + PostCSS

## 📁 Estructura del Proyecto

```
final/
├── index.html              # Página principal
├── contact.html            # Página de contacto
├── vite.config.ts          # Configuración multipágina
├── postcss.config.cjs      # Configuración PostCSS
├── package.json
├── tsconfig.json
│
├── public/                 # Archivos estáticos
│
└── src/
    ├── ts/                 # Scripts TypeScript
    │   ├── main.ts        # Script para index.html
    │   └── contact.ts     # Script para contact.html
    │
    └── css/               # Estilos CSS
        ├── main.css       # Estilos globales (base)
        │
        ├── init/          # Normalización y reset
        │   ├── normalize.css
        │   └── reset.css
        │
        ├── variables/     # Variables CSS
        │   └── variables.css
        │
        ├── mixins/        # Mixins PostCSS
        │   └── mixins.css
        │
        ├── components/    # Componentes reutilizables
        │   └── buttons.css
        │
        └── pages/         # Estilos específicos por página
            ├── home.css
            └── contact.css
```

## 🎯 Arquitectura CSS

### Flujo de importación:

**index.html** → `/src/ts/main.ts` → imports:

- `../css/main.css` (globales)
- `../css/pages/home.css` (específicos)

**contact.html** → `/src/ts/contact.ts` → imports:

- `../css/main.css` (globales)
- `../css/pages/contact.css` (específicos)

### Capas CSS:

1. **init/** - Reset y normalización del navegador
2. **variables/** - Variables CSS globales (colores, tipografía, spacing)
3. **mixins/** - Mixins de PostCSS para reutilización
4. **main.css** - Estilos base compartidos (body, links, etc.)
5. **components/** - Componentes UI reutilizables (botones, cards, etc.)
6. **pages/** - Estilos específicos de cada página

## 🚀 Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## ✅ Ventajas de esta estructura:

1. **Code splitting automático** - Vite separa el CSS por página
2. **No hay CSS innecesario** - Cada página solo carga lo que necesita
3. **Estilos globales compartidos** - DRY principle
4. **Escalable** - Fácil agregar más páginas
5. **PostCSS** - Mixins, nesting, variables nativas

## 📝 Cómo agregar una nueva página:

1. Crear `nueva-pagina.html` en la raíz
2. Agregar entrada en `vite.config.ts`:
   ```ts
   input: {
     main: resolve(__dirname, 'index.html'),
     contact: resolve(__dirname, 'contact.html'),
     nueva: resolve(__dirname, 'nueva-pagina.html')  // ← nuevo
   }
   ```
3. Crear `/src/ts/nueva-pagina.ts`
4. Crear `/src/css/pages/nueva-pagina.css`
5. En el `.ts` importar:
   ```ts
   import '../css/main.css';
   import '../css/pages/nueva-pagina.css';
   ```

## 🎨 PostCSS Features utilizados:

- **postcss-nested** - Nesting como Sass
- **postcss-simple-vars** - Variables al estilo Sass
- **postcss-mixins** - Mixins reutilizables
- **postcss-preset-env** - Características CSS modernas
