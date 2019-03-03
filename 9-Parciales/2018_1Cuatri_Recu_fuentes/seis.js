function mostrar()
{

	var hora;
	hora=laHora.value;
	//hora=parseInt(laHoraora);

	var mensaje;

	switch(hora)
	{
		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana";
			break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje = "Es de tarde";
			break;
		default:
			if(hora>19 && hora <= 24 )
			{
				mensaje = "Es de noche, a dormir";
			}
			else if(hora > 0 && hora < 6)
			{
				mensaje = "Es de noche";
			}
			else
			{
				mensaje = "La hora es invalida.";
			}
			break;
	}

	alert(mensaje);

}
