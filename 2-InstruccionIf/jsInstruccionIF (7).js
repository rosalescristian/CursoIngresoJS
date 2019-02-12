function mostrar()
{
//tomo la edad  

		var age;
		var elEstadoCivil;

		age = edad.value;
		age = parseInt(age);

		//elEstadoCivil = getElementById(estadoCivil).value;
		elEstadoCivil = estadoCivil.value;

		//if (age < 18 && elEstadoCivil != "Soltero") { // Comparacion es con 2 = [==] / 1 solo = es para asignar!!!
		//
		if (age < 18)
		{
			if (elEstadoCivil != "Soltero")
			{
				alert("Es muy pequeño para NO ser soltero.");
			}
		}


}//FIN DE LA FUNCIÓN