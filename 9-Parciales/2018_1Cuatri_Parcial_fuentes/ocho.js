function mostrar()
{

	var letra;
	var numero;
	var respuesta;
	var limiteInferior = -100;
	var limiteSuperior = 100;
	var contadorNumeros;
	var contadorNrosPares = 0;
	var contadorNrosImpares = 0;
	var contadorCeros = 0;
	var promedio;
	var acumuladorNumeros = 0;
	var acumuladorNrosPositivos = 0;
	var acumuladorNrosNegativos = 0;
	var contadorNrosPositivos = 0;
	var contadorNrosNegativos = 0;
	var numeroMax;
	var	letraMax;
	var numeroMin;
	var letraMin;
	var promedioPositivos;

	isNaN();

	respuesta = "si";
	acumuladorNumeros = 0;

	for(contadorNumeros=1;respuesta == "si";contadorNumeros++)
	{
		letra = prompt("Ingrese una letra.");
			while(!isNaN(letra))
			{
				letra = prompt("Ha ingresado un caracter no valido, por favor reingrese una letra.");
			}
	
		numero = prompt("Ingrese un numero entre -100 y 100.");
			while(isNaN(numero) || numero < limiteInferior || numero > limiteSuperior)
			{
				numero = prompt("Ha ingresado un nro erroneo, por favor reingrese nro entre -100 y 100.")
			}
		numero=parseInt(numero);
		acumuladorNumeros = acumuladorNumeros + numero;
		acumuladorNumeros = parseInt(acumuladorNumeros);

		if(numero==0)
		{
			contadorCeros++;
		}
		else
		{
			if(numero % 2 == 0)
			{
				contadorNrosPares++;
			}
			else
			{
				contadorNrosImpares ++;
			}
		}

		if(numero>0)
		{
			acumuladorNrosPositivos = acumuladorNrosPositivos + numero;
			acumuladorNrosPositivos=parseInt(acumuladorNrosPositivos);
			contadorNrosPositivos++;
		}
		else
		{
			acumuladorNrosNegativos = acumuladorNrosNegativos + numero;
			acumuladorNrosNegativos=parseInt(acumuladorNrosNegativos);
			contadorNrosNegativos++;
		}

		if(contadorNumeros==1)
		{
			numeroMax = numero;
			letraMax = letra;
			numeroMin = numero;
			letraMin = letra;
		}
		else
		{
			if(numero>=numeroMax)
			{
				numeroMax = numero;
				letraMax = letra;
			}
			else
			{
				numeroMin = numero;
				letraMin = letra;
			}
		}

		respuesta = prompt("¿Desea continuar? (si o no)");

	}
	promedio = acumuladorNumeros/contadorNumeros;
	
	promedioPositivos = acumuladorNrosPositivos/contadorNrosPositivos;
	//promedioPositivos = parseInt(promedioPositivos);

	document.write(contadorNrosPares+"<br>"+contadorNrosImpares+"<br>"+contadorCeros+"<br>"+promedioPositivos+"<br>"+acumuladorNumeros+"<br>"+numeroMax+"<br>"+letraMax+"<br>"+numeroMin+"<br>"+letraMin);
	//alert(promedioPositivos);
}
