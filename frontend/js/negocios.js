// FinanCity - Sistema de negocios

let negocios = [

    {
        nombre: "Cafetería Central",
        inversion: 500,
        ingresos: 100,
        nivel: 1
    }

];


const sistemaNegocios = {

    obtenerNegocios() {

        return negocios;

    },


    obtenerIngresosNegocios() {

        let total = 0;

        negocios.forEach(function(negocio) {

            total += negocio.ingresos;

        });

        return total;

    },


    mejorarNegocio(indice) {

        if (negocios[indice]) {

            negocios[indice].nivel++;

            negocios[indice].ingresos += 50;

        }

    }

};


console.log("Sistema de negocios cargado");
