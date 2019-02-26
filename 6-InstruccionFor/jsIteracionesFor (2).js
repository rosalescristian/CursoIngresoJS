function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado=prompt("Ingrese un nro.");
	numeroIngresado=parseInt(numeroIngresado);

// con este FOR recorro los nros anteriores al ingresado por el usuario

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroRecorrido--)
	{
		for(numeroAnterior=numeroRecorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			//console.log(numeroAnterior);
			if(numeroRecorrido % numeroAnterior ==0)
			{
				break
			}
		}
	

		if(numeroAnterior==1)
		{
			console.log(+numeroRecorrido+" es Primo");
		}
/*	else
	{
		console.log("No es Primo");
	}
*/
	}

}