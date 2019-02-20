


function mostrar()
{

	
	var numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);

	while (numeroIngresado < 0 || numeroIngresado > 10)// && numeroIngresado >0)
	{
		alert("El nro ingresado es incorrecto.");	
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	}
	
	document.getElementById(Numero.value=numeroIngresado);
		
//		numeroIngresado = "";//prompt("ingrese un número entre 0 y 10.")
//		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	//	alert("El nro ingresado es incorrecto.");	
}//FIN DE LA FUNCIÓN