function mostrar()
{

	
	var planeta;
	var mensaje;

	planeta = prompt("Ingrese el nombre de un planeta.");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje = "Aca hace mas calor";
			break;
		case "tierra":
			mensaje = "Aca vivimos";
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
			mensaje = "Aca hace mas frio.";
			break;
		default:
			planeta = prompt("Ha ingresado un planeta invalido, intente nuevamente");

	}

	alert(mensaje);
}

/*
	var diaSemana;
	var mensaje;

	diaSemana = prompt("Ingrese el dia de la semana.");

	switch(diaSemana)
	{
		case "Sabado":
		case "Domingo":
			mensaje = "Buen finde";
			break;
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			mensaje = "A trabajar";
			break;
		default:
			mensaje = "No ha ingreso un dia valido.";
			break;
	}

	alert(mensaje);
*/