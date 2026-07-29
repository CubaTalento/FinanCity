// FinanCity - Sistema económico básico

const economia = {
    dinero: 1000,
    ingresos: 0,
    gastos: 0,

    agregarIngreso(cantidad) {
        this.ingresos += cantidad;
        this.dinero += cantidad;
    },

    agregarGasto(cantidad) {
        this.gastos += cantidad;
        this.dinero -= cantidad;
    },

    obtenerBalance() {
        return this.dinero;
    }
};

console.log("Sistema económico cargado");
