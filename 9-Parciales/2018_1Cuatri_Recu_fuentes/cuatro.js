function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = prompt("Ingrese un numero");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese otro nro");
	numeroDos = parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		alert(numeroUno+""+numeroDos);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			alert(numeroUno/numeroDos);
		}
		else
		{
			suma = numeroUno + numeroDos;
			//alert(suma);
			if(suma<50)
			{
				alert("La suma es"+suma+"y es menor a 50.");
			}
			else
			{
				alert(suma);
			}
		}

	}

}
