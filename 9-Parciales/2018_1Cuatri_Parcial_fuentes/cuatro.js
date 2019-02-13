function mostrar()
{

	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	suma = parseInt(suma);

	numeroUno = prompt("Ingrese un número.");
	numeroDos = prompt("Ingrese otro número.");
	suma = numeroUno + numeroDos;

	if (numeroUno == numeroDos)
	{
		alert(numeroUno+numeroDos);
	}	
	if (numeroUno > numeroDos)
	{	
		if (suma > 10)
			{
				alert("La suma es "+suma+" y supero el 10.");
			}
	}

}
