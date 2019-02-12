function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom = Math.floor((Math.random() * 10) + 1);
	numeroRandom = parseInt(numeroRandom)

alert("El resultado del examen es: "+numeroRandom);

	if(numeroRandom < 5)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if (numeroRandom>8)
		{
			alert("EXCELENTE");
		}
		else
		{
			alert("APROBO");
		}
	}
	

}//FIN DE LA FUNCIÓN