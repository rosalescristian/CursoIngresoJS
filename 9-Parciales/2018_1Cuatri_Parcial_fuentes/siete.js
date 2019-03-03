function mostrar()
{

	var nota;
	var sexo;
	var contadorAlumnos;
	isNaN();
	var promedio;
//	var notaMax;
//	var sexoNotaMax;
	var notaMin;
	var sexoNotaMin;
	var contadorVaronesAprobados = 0;
	var acumuladorNotas = 0;
	var alumnosCurso = 5

	for(contadorAlumnos=1; contadorAlumnos <= alumnosCurso; contadorAlumnos++)
	{
		nota = prompt("Ingrese la nota (entre 0 y 10).");
			while(isNaN(nota) || nota < 0 || nota > 10)
			{
				nota = prompt("Ingresó una nota invalida, reingrese.");
			}
		
		nota=parseInt(nota);
		acumuladorNotas = acumuladorNotas + nota;
		//acumuladorNotas = parseInt(acumuladorNotas);

		sexo = prompt("Ingrese el sexo (f o m).");
			while(!isNaN(sexo) || sexo != "f" && sexo != "m")
			{
				sexo = prompt("Ingresó un sexo invalido, reingrese (f o m).");
			}

		if(nota>5 && sexo == "m")
		{
			contadorVaronesAprobados ++;
		}

		if(contadorAlumnos == 1)
		{
			//notaMax = nota;
			notaMin = nota;
			sexoNotaMin = sexo;
			//sexoNotaMax = sexo;
		}
		else
		{
			if(nota < notaMin)
			{
				notaMin = nota;
				sexoNotaMin = sexo;
			}
		}
	}

promedio = (acumuladorNotas / contadorAlumnos).toFixed(2);

alert("El promedio de las notas es "+promedio);
alert("La nota mas baja es "+notaMin+" y el sexo de la nota mas baja es "+sexoNotaMin);
alert("La cantidad de Varones que se sacaron mas de 6 fueron "+contadorVaronesAprobados);

}
2