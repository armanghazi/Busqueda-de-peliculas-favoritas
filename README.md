# Búsqueda de Películas Favoritas

Este proyecto es una aplicación web que permite a los usuarios buscar sus películas favoritas utilizando la API de The Movie Database (TMDb). Ofrece filtros por fecha de lanzamiento, géneros, calificación y certificaciones, incluyendo la búsqueda basada en el estándar de certificación de España.

## Características

- **Búsqueda de Películas**: Filtra películas por fecha de lanzamiento, géneros, calificación y certificaciones.
- **Favoritos**: Marca películas como favoritas.
- **Traducción**: Utiliza Google Translate para traducir la página a diferentes idiomas .

## Estructura del Proyecto

- `index.html`: Página principal de la aplicación.
- `result.html`: Página de resultados de búsqueda.
- `style.css`: Estilos CSS para la aplicación.
- `script.js`: Script principal que maneja la lógica de la aplicación.
- `js/`: Carpeta que contiene los scripts JavaScript organizados en subcarpetas:
  - `components/`: Componentes de UI.
  - `services/`: Servicios de datos y API.
  - `utils/`: Utilidades y configuración.
  - `init/`: Funciones de inicialización.

## Instalación

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/armanghazi/Busqueda-de-peliculas-favoritas.git
   ```
2. Navega al directorio del proyecto.
   ```bash
   cd Busqueda-de-peliculas-favoritas
   ```
3. Abre `index.html` en tu navegador para ver la aplicación en acción.

## Uso

- Selecciona los filtros deseados en la página principal y haz clic en "Buscar películas" para ver los resultados.
- Marca películas como favoritas haciendo clic en el botón de corazón.
- Cambia el idioma de la página utilizando el widget de Google Translate.

## Configuración

- Asegúrate de tener una clave de API válida de TMDb y configúrala en `js/utils/config.js`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
