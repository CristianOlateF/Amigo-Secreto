// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para mostrar una alerta
function showSimpleAlert(message) {
    alert(message);
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor y eliminar espacios en blanco

    if (nombreAmigo === '') {
        showSimpleAlert('Por favor, digite un nombre válido.');
        return; // Detener la ejecución si el campo está vacío
    }

    // Validación: asegurar que el nombre solo sea texto y no contenga números
    if (/\d/.test(nombreAmigo)) { // Verifica si la cadena contiene algún dígito
        showSimpleAlert('El nombre no debe contener números. Por favor, digite solo texto.');
        return; // Detener la ejecución si contiene números
    }

    if (amigos.includes(nombreAmigo)) {
        showSimpleAlert('Este nombre ya ha sido añadido. Por favor, digite un nombre diferente.');
        return;
    }

    amigos.push(nombreAmigo); // Añadir el nombre al array
    inputAmigo.value = ''; // Limpiar el campo de texto
    mostrarAmigos(); // Actualizar la lista visible
}
// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.classList.add('name-item');
        listaAmigos.appendChild(li);
    });
}