// ==========================================
// FINANCITY
// Sistema de la primera misión
// ==========================================

let dinero = 500;
let xp = 0;
let negocioConstruido = false;

// Elementos
const dineroUI = document.querySelector(".topbar div:nth-child(1)");
const botonConstruir = document.querySelector(".negocio button");
const mision = document.querySelector(".mision");
const dialogo = document.querySelector(".tarjeta p");

// Construir negocio
function construirNegocio() {

    if (negocioConstruido) return;

    if (dinero < 100) {
        alert("No tienes suficientes SOF.");
        return;
    }

    dinero -= 100;
    xp += 25;

    negocioConstruido = true;

    dineroUI.innerHTML = "💰 " + dinero + " SOF";

    botonConstruir.innerHTML = "✅ Construido";
    botonConstruir.disabled = true;

    mision.innerHTML = `
        <b>✅ Misión completada</b>
        <br><br>
        Has construido tu primer negocio.
        <br><br>
        ⭐ +25 XP
    `;

    dialogo.innerHTML =
        "¡Excelente! Ya eres un emprendedor. Tu puesto de limonada comenzará a generar ingresos.";

    iniciarIngresos();
}

// Ingresos automáticos
function iniciarIngresos() {

    setInterval(() => {

        dinero += 25;

        dineroUI.innerHTML = "💰 " + dinero + " SOF";

    }, 5000);

}

// Evento del botón
if (botonConstruir) {

    botonConstruir.addEventListener("click", construirNegocio);

}
