# Cómo añadir React Testing Library a un proyecto React (Vite)


### Dependencias

```
npm install --save-dev vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event 
```

### Configuración

`package.json`:
```
{
 "scripts": {
    ...
    "test": "vitest"
    ...
  }
  ...
}
```

`vite.config.js`:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js',
  }
})
```

### Cómo ejecutar los tests: 

```
npm test
```