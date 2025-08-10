🎁 Sorteo de Amigo Secreto
Este es un proyecto simple para realizar un sorteo de amigo secreto. Permite a los usuarios agregar nombres a una lista y luego seleccionar uno de manera aleatoria.

🚀 Funcionalidades
Agregar nombres: Permite añadir amigos a una lista. El sistema valida que el nombre no esté vacío, que no contenga números y que no esté duplicado.

Visualizar la lista: Muestra todos los nombres que se han agregado.

Realizar el sorteo: Selecciona un nombre al azar de la lista. Se necesita un mínimo de dos amigos para poder realizar el sorteo.

⚙️ Tecnologías Utilizadas
JavaScript: Lógica principal del sorteo y manipulación del DOM.

HTML: Estructura de la interfaz.

CSS: Estilización de la aplicación.

💻 Cómo Usar
Abre el archivo HTML en tu navegador.

Escribe un nombre en el campo de texto.

Haz clic en el botón "Agregar" para añadir el nombre a la lista.

Repite el proceso para todos los amigos que participarán.

Una vez que tengas al menos dos nombres, haz clic en el botón "Sortear Amigo".

El nombre del amigo secreto se mostrará en pantalla.

📂 Estructura del Código
amigos: Un array global que almacena los nombres de los participantes.

showSimpleAlert(message): Función utilitaria para mostrar alertas al usuario.

agregarAmigo(): Lógica para validar y añadir un nuevo amigo al array.

mostrarAmigos(): Actualiza la lista visible en el HTML con los nombres del array.

sortearAmigo(): Realiza el sorteo de manera aleatoria y muestra el resultado.

https://img.shields.io/badge/status-finalizado-success
