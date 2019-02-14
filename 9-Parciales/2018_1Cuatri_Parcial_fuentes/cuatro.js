/* al realizar una compra, si la compra de mas de dos productos 
se realizo un descuento del 10% y si suera los $2000 se agrega
 un descuento adicional del 15%, si el pago es con tarjeta y no 
 efectivo al precio final se le agrega un 10% de recargo
*/

function mostrar()
{

	var importe;
	var cantidad;
	var formaPago;
	var importeFinal;

	importe = prompt("Ingrese el importe.");
	importe = parseInt(importe);

	cantidad = prompt("Ingrese la cantidad.");
	cantidad = parseInt(cantidad);	

	formaPago = prompt("Ingrese Forma de Pago: 1- Efectivo / 2- TC");

	if (cantidad > 2)
	{
		if (importe > 2000)
			{
				if (formaPago == 1)
				{
					importeFinal=importe*0.75;

				}
				else
				{
					importeFinal=importe*0.85;
				}
			}
			if (formaPago == 1)
			{
				importeFinal=importe*0.9;
			}
			else
			{
				importeFinal=importe
			}
	}	
		else
		{
			if (formaPago == 1)
			{
				importeFinal=importe*0.9;
			}
				importeFinal=importe
		}		
		alert("El valor de la compra es: "+importeFinal);
}
/* al realizar una compra, si la compra de mas de dos productos 
se realizo un descuento del 10% y si suera los $2000 se agrega
 un descuento adicional del 15%, si el pago es con tarjeta y no 
 efectivo al precio final se le agrega un 10% de recargo
*/







