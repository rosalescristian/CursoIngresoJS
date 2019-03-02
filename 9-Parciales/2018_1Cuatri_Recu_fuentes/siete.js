// incompleto

function mostrar()
{
	var nota;
	var sexo;
	//var curso = 5;
	var alumnos = 0;
	

	while(alumnos < 6)
	{
		nota=prompt("Ingrese la nota entre 0 y 10.");

			while(isNaN(nota) || nota < 0 || nota > 10)
			{
				nota=prompt("Ha ingresado una nota invalida, por favor reingrese la misma.");
			}

		sexo=prompt("Ingrese el sexo (f o m).");

			while(sexo != "f")// && sexo != "m")
			{
				sexo=prompt("El sexo ingresado es invalido, por favor reingrese solo f o m.";
			}
		
		alumnos++;
	}

alert(nota);

}
