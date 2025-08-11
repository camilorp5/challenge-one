lista_amigos = [];

function actualizar_lista() {
    document.getElementById('listaAmigos').innerHTML = lista_amigos;
}
function agregarAmigo() {
    // Tomando el texto que ingresó el usuario
    let nombreAmigo = document.getElementById('amigo');
    if  (nombreAmigo.value == '') {
        alert('Ingrese un valor válido');
    } else {
        if (lista_amigos.includes(nombreAmigo.value)) {
            alert('Nombre repetido');
        } else {
            lista_amigos.push((nombreAmigo.value.toString()));
            actualizar_lista();
        }
    }
    console.log(lista_amigos);
    limpiar_espacio();
}

function sortearAmigo() {
    let cantidad_amigos = lista_amigos.length;
    if (cantidad_amigos == 0) {
        alert('No hay nombres para sortear');
    } else {
        // Escogiendo una posición dentro del array
        random_number = Math.floor(Math.random()*cantidad_amigos);
        amigo_seleccionado = lista_amigos[random_number];
        // Borrando el elemento seleccionado de la lista
        lista_amigos = lista_amigos.filter(amigo => amigo.toLowerCase() !== amigo_seleccionado.toLowerCase());
        actualizar_lista();
        document.getElementById('resultado').innerHTML = amigo_seleccionado;
    }
}

// Funciones que limpian el espacio de trabajo
function limpiar_espacio() {
    document.querySelector('#amigo').value = '';
}

function borrar_todo() {
    lista_amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    limpiar_espacio();
}
