# 🎁 Sorteo de Amigo Secreto

![Status](https://img.shields.io/badge/status-finalizado-success)
![Tecnologías](https://img.shields.io/badge/tecnolog%C3%ADas-JS%2C%20HTML%2C%20CSS-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-lightgrey)

Este es un proyecto simple para realizar un sorteo de amigo secreto. Permite a los usuarios agregar nombres a una lista y luego seleccionar uno de manera aleatoria.

## 🚀 Funcionalidades

-   **Agregar nombres:** Permite añadir amigos a una lista. El sistema valida que el nombre no esté vacío, que no contenga números y que no esté duplicado.
-   **Visualizar la lista:** Muestra todos los nombres que se han agregado.
-   **Realizar el sorteo:** Selecciona un nombre al azar de la lista. Se necesita un mínimo de dos amigos para poder realizar el sorteo.

## ⚙️ Tecnologías Utilizadas

-   **JavaScript:** Lógica principal del sorteo y manipulación del DOM.
-   **HTML:** Estructura de la interfaz.
-   **CSS:**  Estilización de la aplicación.

## 💻 Cómo Usar

1.  **Abre [el archivo HTML](https://cristianolatef.github.io/Amigo-Secreto/)** en tu navegador.
2.  **Escribe un nombre** en el campo de texto.
<img width="733" height="167" alt="image" src="https://github.com/user-attachments/assets/680b6d4c-0961-47f4-a018-c0ac627d591f" />

3.  Haz clic en el botón **"Añadir"** para añadir el nombre a la lista.
<img width="147" height="79" alt="image" src="https://github.com/user-attachments/assets/ff28c45e-d30a-4190-b827-da2f50135a34" />

4.  Repite el proceso para todos los amigos que participarán.
5.  Una vez que tengas al menos dos nombres, haz clic en el botón **"Sortear Amigo"**.
<img width="356" height="88" alt="image" src="https://github.com/user-attachments/assets/e752bd64-156c-4692-9383-721a3746eaee" />

6.  El nombre del amigo secreto se mostrará en pantalla.

## 📂 Estructura del Código

-   `amigos`: Un array global que almacena los nombres de los participantes.
-   `showSimpleAlert(message)`: Función utilitaria para mostrar alertas al usuario.
-   `agregarAmigo()`: Lógica para validar y añadir un nuevo amigo al array.
-   `mostrarAmigos()`: Actualiza la lista visible en el HTML con los nombres del array.
-   `sortearAmigo()`: Realiza el sorteo de manera aleatoria y muestra el resultado.
