/* 				 
				 // Mayor // -10% // -5% // +15%
20  50  10  30
15	5	5	3
1	6	6	9
10	10	10	10

Siempre se ingresan 4 importes, se debe mostrar el mayor.
Si la suma supera 100 tiene dto 10% / Mostrar el nro mayor, y el valor con dto
Si la suma es mayor a 50 tiene dto 5% // 
Si la suma no llega a 50 tiene incremento del 15% // 
*/

function mostrar()
{

/*	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var subtotal;
	var porcentaje;
	var precioFinal;
	var numeroMayor;

	numeroUno = prompt("Ingrese cifra 1.");
	numeroDos = prompt("Ingrese cifra 2.");
	numeroTres = prompt("Ingrese cifra 3.");
	numeroCuatro = prompt("Ingrese cifra 4.");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	numeroCuatro = parseInt(numeroCuatro);

	subtotal = numeroUno + numeroDos + numeroTres + numeroCuatro;
	subtotal = parseInt(subtotal);

	if (subtotal > 100)
	{
		porcentaje = 0.9;
	}
		else 
		{
			if (subtotal < 50)
				{
					porcentaje = 1.15;
				}
			else
			{
				porcentaje = 0.95;
			}
		}

	precioFinal = subtotal*porcentaje;
	
	if(numeroUno>numeroDos && numeroUno>numeroTres && numeroUno>numeroCuatro)
	{
		numeroMayor = numeroUno;
	}
	else
	{
		if (numeroDos>numeroTres && numeroDos>numeroCuatro)
		{
			numeroMayor = numeroDos
		}
		else
		{
			if (numeroTres>numeroCuatro)
			{
				numeroMayor = numeroTres;
			}
			else
			{
				numeroMayor = numeroCuatro;
			}
		}
	}

	alert("El importe mayor es $"+numeroMayor+". La compra es de $ "+precioFinal);

}



























/*

al realizar una compra, si la compra de mas de dos productos 
se realizo un descuento del 10% y si suera los $2000 se agrega
 un descuento adicional del 15%, si el pago es con tarjeta y no 
 efectivo al precio final se le agrega un 10% de recargo



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
*/


	 var numeroUno;
	 var numeroDos;
	 //var resta;
	 //var suma;
	 var resultado

	 numeroUno = prompt("Ingrese un nro.");
	 numeroUno = parseInt(numeroUno);
	 numeroDos = prompt("Ingrese otro nro.");
	 numeroDos = parseInt(numeroDos);

	 if(numeroUno==numeroDos)
	 {
	 	resultado=numeroUno+""+numeroDos;
	 	alert(resultado);
	 }
	 else
	 {
	 	if(numeroUno>numeroDos)
	 	{
	 		resultado=numeroUno-numeroDos;
	  		alert(resultado);
		}
	  	else
	  	{
	  		resultado=numeroUno+numeroDos;
		  		
		  		if(resultado>10)
				{	
					alert("La suma es "+resultado+" y supero el 10.")
				}
				else
				{
					alert(resultado);
				}
		}
	}
}


/* al realizar una compra, si la compra de mas de dos productos 
se realizo un descuento del 10% y si suera los $2000 se agrega
 un descuento adicional del 15%, si el pago es con tarjeta y no 
 efectivo al precio final se le agrega un 10% de recargo
*/







