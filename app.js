lista_amigos = [];


function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo');
    if  (nombreAmigo.value == '') {
        alert('Ingrese un valor válido')
    } else {
        lista_amigos.push(nombreAmigo.value);
        console.log(lista_amigos)
    }
}

