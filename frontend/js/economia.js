// FinanCity - Sistema económico y jugador

const jugador = {
    nombre: "Emprendedor",
    nivel: 1,
    experiencia: 0,
    dinero: 1000
};


const economia = {

    agregarIngreso(cantidad) {
        jugador.dinero += cantidad;
    },

    agregarGasto(cantidad) {
        jugador.dinero -= cantidad;
    },

    obtenerBalance() {
        return jugador.dinero;
    },

    obtenerJugador() {
        return jugador;
    }

};


console.log("Sistema de jugador y economía cargado");
