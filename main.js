// JUEGO CHA CHI PUN O PIEDRA PAPEL O TIJERA
const opcionesPPT = ["piedra", "papel", "tijera"];

class JuegoPPT {
    constructor() {
        this.opciones = opcionesPPT;
        this.resultadoElement = document.getElementById("game-result");
        this.computadoraElement = document.getElementById("computer-choice-value");
        this.iniciarJuego();
    }

    azarComputadora() {
        const indice = Math.floor(Math.random() * this.opciones.length);
        return this.opciones[indice];
    }
    determinarGanador(usuario, computadora) {
        const reglas = {
            "piedra": "tijera",
            "papel": "piedra",
            "tijera": "papel"
        };
        if (usuario === computadora) {
            return "¡Es un EMPATE!";
        } else if (reglas[usuario] === computadora) {
            return "¡Ganaste el juego!";
        } else {
            return "¡La computadora te ganó! eres un Looser...";
        }
    }

    jugar(opcionUsuario) {
        const opcionComputadora = this.azarComputadora();
        const resultado = this.determinarGanador(opcionUsuario, opcionComputadora);
        this.computadoraElement.innerText = opcionComputadora;
        this.resultadoElement.innerText = resultado;
    }

    iniciarJuego() {
        this.opciones.forEach(opcion => {
            document.getElementById(opcion).addEventListener("click", () => this.jugar(opcion));
        });
    }
}

const juego = new JuegoPPT();

const jugarConPrompt = () => {
    let continuarJugando = true;
    while (continuarJugando) {
        const opcionUsuario = prompt("Elige piedra, papel o tijera").toLowerCase();
        if (opcionesPPT.includes(opcionUsuario)) {
            const opcionComputadora = juego.azarComputadora();
            const resultado = juego.determinarGanador(opcionUsuario, opcionComputadora);
            alert("La computadora eligió: " + opcionComputadora + "\n" + resultado);
        } else {
            alert("Opción inválida. Por favor, elige piedra, papel o tijera.");
        }
        const respuesta = prompt("¿Quieres jugar otra vez? (sí/no)").toLowerCase();
        continuarJugando = (respuesta === "si" || respuesta === "sí");
    }
};

// Para iniciar el juego con prompt, puedes llamar a jugarConPrompt();
// Ejemplo:
// jugarConPrompt();





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