// FinanCity - Lógica principal

const pantallaDinero = document.getElementById("dinero");
const botonIngreso = document.getElementById("ingreso");
const botonGasto = document.getElementById("gasto");

function actualizarDinero() {
    pantallaDinero.textContent = "$" + economia.obtenerBalance();
}

botonIngreso.addEventListener("click", function() {
    economia.agregarIngreso(100);
    actualizarDinero();
});

botonGasto.addEventListener("click", function() {
    economia.agregarGasto(50);
    actualizarDinero();
});

actualizarDinero();

console.log("FinanCity iniciado correctamente");
