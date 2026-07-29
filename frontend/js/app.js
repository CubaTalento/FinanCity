// FinanCity - Lógica principal

const pantallaDinero = document.getElementById("dinero");

if (pantallaDinero) {
    pantallaDinero.textContent = "$" + economia.obtenerBalance();
}

console.log("FinanCity iniciado correctamente");
