// FinanCity - Lógica principal

const pantallaDinero = document.getElementById("dinero");
const nombreJugador = document.getElementById("nombreJugador");
const nivelJugador = document.getElementById("nivelJugador");
const experienciaJugador = document.getElementById("experienciaJugador");

const botonIngreso = document.getElementById("ingreso");
const botonGasto = document.getElementById("gasto");


function actualizarPantalla() {

    const jugadorActual = economia.obtenerJugador();

    pantallaDinero.textContent = "$" + economia.obtenerBalance();

    nombreJugador.textContent = jugadorActual.nombre;

    nivelJugador.textContent = jugadorActual.nivel;

    experienciaJugador.textContent = jugadorActual.experiencia;

}


botonIngreso.addEventListener("click", function() {

    economia.agregarIngreso(100);

    actualizarPantalla();

});


botonGasto.addEventListener("click", function() {

    economia.agregarGasto(50);

    actualizarPantalla();

});


actualizarPantalla();


console.log("FinanCity iniciado correctamente");
