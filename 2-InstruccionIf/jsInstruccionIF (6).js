function mostrar()
{
//tomo la edad  

	var age;
	
	age = edad.value;

		if (age >= 18) { // Comparacion es con 2 = [==] / 1 solo = es para asignar!!!
				alert("Ud. es mayor de edad.");
			}
			
		else if (age >= 13 && age <=17) {
				alert("Ud. es adolescente.");
			}

		else {
				alert("Ud. es un niño.");
		
		}

}//FIN DE LA FUNCIÓN