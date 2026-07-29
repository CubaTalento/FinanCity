// FinanCity - Sistema económico y guardado

let jugador = {

    nombre: "Emprendedor",
    nivel: 1,
    experiencia: 0,
    dinero: 1000

};


function guardarPartida() {

    localStorage.setItem(
        "financity_guardado",
        JSON.stringify(jugador)
    );

}


function cargarPartida() {

    const guardado = localStorage.getItem("financity_guardado");

    if (guardado) {
        jugador = JSON.parse(guardado);
    }

}


const economia = {

    agregarIngreso(cantidad) {

        jugador.dinero += cantidad;

        guardarPartida();

    },


    agregarGasto(cantidad) {

        jugador.dinero -= cantidad;

        guardarPartida();

    },


    obtenerBalance() {

        return jugador.dinero;

    },


    obtenerJugador() {

        return jugador;

    }

};


cargarPartida();

console.log("Sistema económico cargado");
