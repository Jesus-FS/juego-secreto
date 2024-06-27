let numeroSecreto = 0;
    intentos = 0;
    listaNumerosSorteados = [];
    numeroMaximo = 10;

    console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto == numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto ) {
            asignarTextoElemento('p', "el numero es menor");
        } else {
            asignarTextoElemento('p', "el numero es mayor");
        }
        intentos++
        limpiarCaja();
    }
    return;
}
function limpiarCaja () {
   let valorCaja = document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('P', 'Se han sorteado todo los números posibles.')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del numero secreto...");
    asignarTextoElemento('p', `Coloca un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja.
    limpiarCaja();
    //Indicar mensaje de intervalos de números.
    //Generarl el número aleatorio.
    //Inicializar el número de intentos.
    condicionesIniciales();
    //Desabilitar el boton de nu1evo juego.
    document.querySelector('#reiniciar').setAttribute('disable','true');

}

condicionesIniciales();

