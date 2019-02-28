function mostrar()
{

	var nombre;
	var peso;
	var temperatura;
	var respuesta="si";
	var contador;
	var contadorPares=0;
	var contadorImpares=0;
	var pesomax=0;
	var contadorSubZero=0;
	var acumuladorPesos=0;
	var promedioPesos=0;
	var pesomaxzubcero=0;

	while(respuesta == "si")
	{
		nombre=prompt("Ingrese el nombre del animal.");
		
		peso=prompt("Ingrese el peso del animal.");
		peso=parseInt(peso);

		acumuladorPesos = acumuladorPesos + peso;
		acumuladorPesos=parseInt(acumuladorPesos);

		temperatura=prompt("Ingrese la temperatura.");
		temperatura=parseInt(temperatura);		

		if(temperatura%2 == 0)
		{
			contadorPares=contadorPares+1;
			contadorPares=parseInt(contadorPares);
		}
		else
		{
			contadorImpares=contadorImpares+1;
			contadorImpares=parseInt(contadorImpares);
		}

		if(contador == 1)
		{
			pesomax=peso;
			pesomax=parseInt(pesomax);
		}
		else
		{
			if(peso>pesomax)
			{
				pesomax=peso;
				pesomax=parseInt(pesomax);
			}
			else
			{
				pesomax=pesomax;
				pesomax=parseInt(pesomax);
			}
		}

		if(temperatura < 0)
		{
			contadorSubZero = contadorSubZero+1;
			contadorSubZero=parseInt(contadorSubZero);
		}


		if(contador == 1)
		{
			if(temperatura < 0)
			{
				pesomaxzubcero=peso;
				pesomaxzubcero=parseInt(pesomax);
			}
			else
			{
				if(peso>pesomaxzubcero)
				{
					pesomaxzubcero=peso;
					pesomaxzubcero=parseInt(pesomaxzubcero);
				}
				else
				{
					pesomaxzubcero=pesomaxzubcero;
					pesomaxzubcero=parseInt(pesomaxzubcero);
				}
			}
			if(temperatura < 0)
			{
				pesomaxzubcero=peso;
				pesomaxzubcero=parseInt(pesomax);
			}
			else
			{
				if(peso>pesomaxzubcero)
				{
					pesomaxzubcero=peso;
					pesomaxzubcero=parseInt(pesomaxzubcero);
				}
				else
				{
					pesomaxzubcero=pesomaxzubcero;
					pesomaxzubcero=parseInt(pesomaxzubcero);
				}


		contador=contador+1;
		contador=parseInt(contador);

		respuesta = prompt("¿Desea seguir?");

	}

		promedioPesos=acumuladorPesos/contador;
		promedioPesos=parseInt(promedioPesos);
		//alert(contadorPares);

	alert("Se ingresaron "+contadorPares+" temperaturas pares.");
	alert("El peso maximo ingresado para un animal fue de "+pesomax+" kg.");
	alert("Hay "+contadorSubZero+" animales que viven en temp. bajo cero.");
	alert(promedioPesos);

}	
