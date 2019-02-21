

function mostrar()
{

	
	var numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado > 9)// && numeroIngresado >0)
	{
		alert("El nro ingresado es incorrecto.");	
		numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	}
	
	document.getElementById(Numero.value=numeroIngresado);
		
//		numeroIngresado = "";//prompt("ingrese un número entre 0 y 10.")
//		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	//	alert("El nro ingresado es incorrecto.");	
}//FIN DE LA FUNCIÓN