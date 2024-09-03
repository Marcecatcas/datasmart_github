# Datamart-Project

Este proyecto de Angular implementa un componente llamado `GitHubUser` que permite a los usuarios buscar y visualizar información de un usuario de GitHub. Utiliza la API pública de GitHub para obtener los datos.

## Funcionalidades

El componente `GitHubUser` proporciona las siguientes funcionalidades:

- **Búsqueda de Usuarios**: Permite al usuario ingresar un nombre de usuario de GitHub en un campo de texto.
  - Si el campo de búsqueda está vacío, se muestra un mensaje de advertencia.
  - Si el usuario no existe en GitHub, se muestra un mensaje de error.
- **Información del Usuario**: Muestra el nombre de usuario, la foto de perfil y la biografía del usuario de GitHub.
- Si no posee biografia aparece un mensaje informativo
- **Seguidores y Repositorios**: Muestra el número de seguidores y el número de repositorios públicos del usuario.
- **Repositorios Recientes**: Muestra una lista de los repositorios más recientes del usuario, incluyendo el nombre y la descripción de cada repositorio.
  - Cada repositorio reciente tiene un enlace que lleva directamente a la página del repositorio en GitHub.
  - En caso de no tener descripcion aparece un mensaje respectivo.

## Requisitos

- **Angular**: Este proyecto utiliza Angular, por lo que debes tener Angular CLI instalado.
- **API de GitHub**: Utiliza la API pública de GitHub para obtener los datos necesarios. No se requiere autenticación para acceder a los endpoints utilizados en este proyecto.

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/Marcecatcas/datamart_github.git
   cd datamart_github
