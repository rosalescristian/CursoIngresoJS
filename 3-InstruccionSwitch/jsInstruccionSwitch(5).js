function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
laHora=parseInt(laHora);

var mensaje;

//alert (laHora);
	
switch (laHora)
	{
		case "Mañana":
				if(laHora < 7)
				{
					mensaje = "menos 7";
					break;
				}else
				{
					if(laHora > 11)
					{
						mensaje = "mas 11";
						break;
					}
				}
		default:
			mensaje = "Es de mañana";
			break;
/*			if (laHora > 7 && laHora < 11)
			{
				mensaje = "Es de mañana";
				break;
			}
			else
				{
					mensaje = "No es de mañana";
					break;
				}
*/
	}	


alert(mensaje);

}//FIN DE LA FUNCIÓN