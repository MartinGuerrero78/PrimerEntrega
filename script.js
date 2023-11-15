
//variables
let nombreApellido;
let precios;
let contacto;
let valor;
let valorTotal;
let opcionCompra;
let otraCompra;
const SI = 'si';



// Nombre del comercio
alert("Bienvenido/as a Nauticos Guerrero");

// Nombre y Apellido
nombreApellido = prompt("Por favor, ingrese su nombre y apellido aquí:");

// Bienvenida
alert(`Qué tal ${nombreApellido}, acá vas a tener la posibilidad de realizar tu pedido.`);

// A elegir
precios = {
    1: 350,
    2: 400,
    3: 290,
    4: 85
};

// Opción para agregar información de contacto 
contacto = prompt("Mail o alguna referencia para facilitarnos el contacto");

// Inicio de compra 
valorTotal =0;

// Realizar compras hasta que el usuario decida salir de la tienda
do {
  // Trabajos que realizamos
alert("Las opciones que tenemos son:\n1, 2, 3, 4,");

  // Elección de trabajo
opcionCompra = +prompt("Dadas las opciones ingrese el trabajo a realizar (Ingrese unicamente numeros, 1: Sillon, 2: Cama, 3: Butaca del conductor, 4: Almohadones):");

  // Resumen de compra
if (opcionCompra in precios) {
    // Precio subtotal
    const costoSubtotal = precios[opcionCompra];
    
        // Impuestos adicionales 
        costoTotal = costoSubtotal * 4.20;

    // detalle de la compra realizada
    alert(`Resumen de la compra:\nOpción: ${opcionCompra}\nCosto Subtotal: ${costoSubtotal} US\nCosto Total con IVA: ${costoTotal.toFixed(2)} US`);

    // preguntar si desea hacer otra compra
    otraCompra = prompt("¿Desea comprar algo más? (si/no)").toLowerCase();
    if (otraCompra !== SI) {
      // A no realizar ninguna compra se finaliza el resumen y agradece por su compra
    alert("Muchas Gracias por su compra.");
    break;
    }
} else {
    //respuesta incorrecta 
    alert("Caracter invalido, ingrese un numero del 1 al 4 dada la opción elegida.");
}

} while (true); // Se reaunuda el ciclo para hacer mas compras