function mostrar()
{
//tomo la edad  

	var age;
	
	age = edad.value;
	age = parseInt(age);


		if (age > 17) { // Comparacion es con 2 = [==] / 1 solo = es para asignar!!!
				alert("Ud. es mayor de edad.");
			}
			
		else if (age > 12 && age <18) {
				alert("Ud. es adolescente.");
			}

		else {
				alert("Ud. es un niño.");
		
		}

/*		if (age > 17)
		{
			alert("Ud. es mayor de edad.");
		}
			else
			{
				if (age < 13)
				{
					alert("Ud. es menor de edad.");
				}
				else
					{
						alert("Ud. es un adolescente.");
					}

			}
*/		
}//FIN DE LA FUNCIÓN