function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numeroUno;

while(respuesta == "si")
	{
		numeroUno=prompt("Ingrese un nro.");
		numeroUno = parseInt(numeroUno);
		contador = contador + 1;
		if(numeroUno>0)
		{
			positivo = positivo + numeroUno;
		}else
		{
			negativo = negativo * numeroUno;
		}
		
		respuesta = prompt("¿Desea seguir?")
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN