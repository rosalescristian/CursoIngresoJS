function mostrar()
{
//tomo la edad  
	var age; 
	age = edad.value;
	age = parseInt(age);


		if (age < 13 || age > 17) { // Comparacion es con 2 = [==] / 1 solo = es para asignar!!!
				alert("Ud. no es un adolescente.");
		}

}//FIN DE LA FUNCIÓN