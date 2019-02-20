function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	//var numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	//numeroIngresado = parseInt(numeroIngresado);
	while (sexo != "f" && sexo != "m")// && numeroIngresado >0)
	{
		alert("Ingreso erróneo.");
		sexo = prompt("ingrese f ó m .");
	}
	
	document.getElementById('Sexo').value=sexo;
	//alert("El nro ingresado es incorrecto.");	
	//	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

}//FIN DE LA FUNCIÓN