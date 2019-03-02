function mostrar()
{

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

}
