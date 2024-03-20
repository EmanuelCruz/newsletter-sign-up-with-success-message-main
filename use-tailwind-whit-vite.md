# Instalar Tailwind CSS con Vite (para "Frontend Mentor")

## Pasos

1. Descargar el zip del challenge de Frontend Mentor
2. Descomprimirlo
3. Inicializar Git (opcional)

   ```bash
   git init
   ```

4. Crear proyecto Tailwind con Vite CLI

   ```bash
   pnpm create vite
   ```

5. Instalar Tailwind CSS

    ```bash
    npmp install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

6. Configuración de Tailwind CSS

   Modificar styles.css por tailwind.css o dejarlo con el mismo nombre, borrar el contenido y reemplazarlo por:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

7. Modificar el archivo de configuracion de tailwind `tailwind.config.js`

    ```js
    content: [
        "./**/*.html",
      ],
    ```

8. Instalar plugin Prettier para ordenar clases de Tailwind

    ```bash
    pnpm install -D prettier prettier-plugin-tailwindcss
    ```

    Despues, agregar en el archivo de configuración de Tailwind

    ```js
    plugins: ["prettier-plugin-tailwindcss"],
    ```

9. Limpiar archivos innecesarios

    Borrar los siguientes archivos:

    ```bash
    rm -rf public counter.js main.js javascript.svg
    ```

10. Reemplazar contendio de index.html

    Revisar si el archivo index.html es el de fronted mentor y no el que genera Vite al crear el proyecto.

    Agregar en la etiqueta link para leer los estilos de tailwind.css

    ```html
    <link rel="stylesheet" href="tailwind.css">
    ```
