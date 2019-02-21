function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si")
	{
		numeroUno=prompt("Ingrese un nro.");
		numeroUno = parseInt(numeroUno);
		contador = contador + 1;
		acumulador = acumulador + numeroUno;
		respuesta = prompt("¿Desea seguir?")
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN