/*

	NO FUNCIONA SEGUIR CONTROLANDO 

	Solo con Switch:
	
		Ingrese precio.	
		Cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago,
		si es con tc visa un 10%
		si es paypal un 15%
		por mercadopago un 10%
		en efectivo 20%;
		cualquier otro medio 5%
		
		Si compraste paquete "todoIncluido", y pagas con paypal se te suma un 10% al descuento
		
		si pagas en efectivo, tenes varias opciones, 
		el paquete "soloDesayunos" te suma un 10% al descuento
		si el paquete es "todoIncluido" te suma un 15% y
		para el resto de los paquetes no tiene descuento adicional.

*/

function mostrar()
{
/*
	var precioHabitacion;
	var paquete;
	var formaPago;
	var descuentoPaquete;
	var descuentoFormaPago;
	var precioFinal;
	//var sumaDescuentos;
	//var formaPago_Paquete

	precioHabitacion = prompt("Ingrese importe de su habitación. (Solo nros)");
	paquete = prompt("Seleccione el paquete contratado: Todo Incluido / Solo Desayunos / Otros");
	formaPago = prompt("Seleccione su Forma de Pago: Efectivo / VISA / PayPal / MercadoPago / Otros");

	//precioHabitacion = parseInt(precioHabitacion)

	switch(formaPago)
	{
		case "Efectivo":
			switch(paquete):
			{
				case "Todo Incluido":
					descuentoFormaPago = 0.65;
					break;
				case "Solo Desayunos":
					descuentoFormaPago = 0.7;
					break;
				default:
					descuentoFormaPago = 0.8;
					break;
			}
			break;
		case "VISA":
		case "MercadoPago":
			descuentoFormaPago = 0.9;
			break;
		case "PayPal":
			switch(paquete):
			{
					case "Todo Incluido":
						descuentoFormaPago = 0.75;
						break;
					default:
						descuentoFormaPago = 0.85;
						break;
			}
			break;
		case "Otros":
			descuentoFormaPago = 0.95;
			break;
	}

	//descuentoFormaPago=parseInt(descuentoFormaPago);
	//precioFinal = precioHabitacion * descuentoFormaPago;
	//precioFinal=parseInt(precioFinal);

	alert("descuentoFormaPago");
*/

	
	var planeta;
	var mensaje;

	planeta = prompt("Ingrese el nombre de un planeta.");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje = "Aca hace mas calor";
			break;
		case "tierra":
			mensaje = "Aca vivimos";
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
			mensaje = "Aca hace mas frio.";
			break;
		default:
			mensaje = "Ha ingresado un planeta invalido, intente nuevamente";
			break;
	}

	alert(mensaje);

}
