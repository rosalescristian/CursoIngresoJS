function mostrar()
{
	var contador=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCeros=0;
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var cantidadNumeroPar=0;
	var cantidadNumeroImpar=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numeroUno;

while(respuesta == "si")
	{
		numeroUno=prompt("Ingrese un nro real.");
		numeroUno = parseInt(numeroUno);
		//contador = contador + 1;
		letraUno=prompt("Ingrese una letra.");

		if(numeroUno>0)
		{
			positivo = numeroUno;
			contadorPositivo = contadorPositivo +1;
			acumuladorPositivo = acumuladorPositivo + numeroUno;
		}else
		{
			if(numeroUno < 0)
			{
				negativo = numeroUno;
				contadorNegativo = contadorNegativo +1;
				acumuladorNegativo = acumuladorNegativo + numeroUno;
			}
			else
			{
				ceros = numeroUno;
				contadorCeros = contadorCeros + 1;
			}
		}

		if(numeroUno%2==0)
		{
			cantidadNumeroPar = cantidadNumeroPar + 1;

		}
		else
		{
			cantidadNumeroImpar = cantidadNumeroImpar + 1;
		}
		
		if(contador==1)
		{
			max=nota;
			sexomax=sexo;
		}
		else
		{
			if(nota>max)
			{
				max=nota;
				sexomax=sexo;
			}
		}
		if (contador > 0)
		{
			mix=nota;
			sexomin=sexo;
		}
			if(nota<min)
			{
					min=nota;
					sexomin=sexo;
			}

		respuesta = prompt("¿Desea seguir?")
	}

}
