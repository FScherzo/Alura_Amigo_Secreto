// Funcionalidad 1: Crear el array para almacenar los nombres
let amigos = [];

// Funcionalidad 2: Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminamos espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista();
}

// Funcionalidad 3: Función para actualizar la lista en HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Funcionalidad 4: Función para sortear un amigo al azar
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado previo

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let li = document.createElement("li");
    li.textContent = `🎉 Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}