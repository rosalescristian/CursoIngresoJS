function mostrar()
{
//tomo la edad  
	var age;
	age = edad.value;
	age = parseInt(age);

		if (age > 17) { // Comparacion es con 2 = [==] / 1 solo = es para asignar!!!
				alert("Ud. es mayor de edad.");
		}
		if (age < 18) {
				alert("Ud. es menor de edad");
		}
/*		
		else {
				alert("Ud. es menor de edad.")
		}
*/
}//FIN DE LA FUNCIÓN