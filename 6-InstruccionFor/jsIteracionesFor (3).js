function mostrar()
{
	var numeroIngresado;
	var numeroProximo;
	var acumulador=0;

	numeroIngresado=prompt("Ingrese un nro.");
	numeroIngresado=parseInt(numeroIngresado);

// con este FOR recorro los nros anteriores al ingresado por el usuario

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>0;numeroRecorrido--)
	{
		for(numeroProximo=numeroRecorrido-1;numeroProximo>0;numeroProximo--)
		{
			//console.log(numeroProximo);
			if(numeroIngresado % numeroProximo == 0)
			{
				acumulador = acumulador+numeroProximo;
			}
			
		}	

		if(acumulador == numeroIngresado)
		{
			console.log(+numeroIngresado+" es un nro perfecto.");
		}

/*	else
	{
		console.log("No es Primo");
	}
*/
	}

}