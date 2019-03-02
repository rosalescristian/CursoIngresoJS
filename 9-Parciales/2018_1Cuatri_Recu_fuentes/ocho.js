function mostrar()
{

	var letra;
	var numero;
	var respuesta = "si";
	var limiteInferior = -100;
	var limiteSuperior = 100;
	var contadorNrosPares=0;
	var contadorNrosImpares=0;
	var contadorCeros=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var sumaPositivos;
	var sumaNegativos;
	var contador=0;
	var numeroMaximo;
	var letraNumeroMaximo;

	while(respuesta == "si")
	{

		letra=prompt("Ingrese una letra");
			while(!isNaN(letra))
			{
				letra=prompt("No ha ingresado una letra, reingrese.");
			}

		numero=prompt("Ingrese un nro entre -100 y 100.");
			while(isNaN(numero) || numero < limiteInferior || numero > limiteSuperior)		
			{
				numero=prompt("Ha ingresado un nro erroneo, reingrese un nro entre -100 y 100.");
			}

		if(numero%2==0)
		{
			contadorNrosPares++;
		}
		else
		{
			if(numero == 0)
			{
				contadorCeros++;
			}
			else
			{
			contadorNrosImpares++;
			}
		}

		if(numero>0)
		{
			sumaPositivos = sumaPositivos + numero
			contadorPositivos++;
		}
		else
		{
			sumaNegativos = sumaNegativos + numero
			contadorNegativos++;
		}


		if(contador==1)
		{
			numeroMaximo = numero;
			letra=letraNumeroMaximo;
		} 
		else
		{
			if(numero>numeroMaximo)
				numeroMaximo=numero;
				letra=letraNumeroMaximo;
		}


		respuesta=prompt("¿Desea continuar?(si o no)");
		contador++;
	}

alert(letra+" "+numero+" "+contadorNrosPares+" "+contadorNrosImpares+" "+contadorCeros);



	
}
