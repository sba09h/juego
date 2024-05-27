// JUEGO CHA CHI PUN O PIEDRA PAPEL O TIJERA
const opcionesPPT = ["piedra", "papel", "tijera"];


const azarComputadora= () =>{
    const indice = Math.floor(Math.random() * 3);
    return opcionesPPT[indice];
}

const determinarGanador=(usuario, computadora)=> {
    if (usuario === computadora) {
        return "¡Es un EMPATE!";
    } else if (
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "papel" && computadora === "piedra") ||
        (usuario === "tijera" && computadora === "papel")
    ) {
        return "¡Ganaste el juego!";
    } else {
        return "¡La computadora te ganó! eres un Looser...";
    }
}

const jugar = () => {
    let continuarJugando = true;
    while (continuarJugando) {
        const opcionUsuario = prompt("Elige piedra, papel o tijera").toLowerCase();
        if (opcionesPPT.includes(opcionUsuario)) {
            const opcionComputadora = azarComputadora();
            const resultado = determinarGanador(opcionUsuario, opcionComputadora);
            alert("La computadora eligió: " + opcionComputadora + "\n" + resultado);
        } else {
            alert("Opción inválida. Por favor, elige piedra, papel o tijera.");
        }
        const respuesta = prompt("¿Quieres jugar otra vez? (sí/no)").toLowerCase();
        continuarJugando = (respuesta === "si" || respuesta === "sí");
    }
};

// Ejemplo
jugar();

// Ejemplo 
// jugar("piedra")
// jugar("papel")
// jugar("tijera")
// jugar("piedra")
// jugar("tijera")