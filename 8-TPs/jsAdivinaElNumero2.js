/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	numeroSecreto = parseInt(numeroSecreto);
	//var numeroSecreto;
	console.log(numeroSecreto);

}

function verificar()
{
	
	;
//	contadorIntentos = intentos.value;
	contadorIntentos += 1
	numeroUsuario = numero.value;
	numeroUsuario = parseInt(numeroUsuario);

	if (numeroUsuario == numeroSecreto)
	{
		switch (contadorIntentos)
		{
			case 1:
				contadorIntentos == 1;
				mensaje = "Usted es psiquico";
				contadorIntentos = 0;
				break;	
			case 2:
				contadorIntentos == 2;
				mensaje = "Excelente Percepcion";
				contadorIntentos = 0;
				break;
			case 3:
				contadorIntentos == 3;
				mensaje = "Esto es suerte";
				contadorIntentos = 0;
				break;
			case 4:
				contadorIntentos == 4;
				mensaje = "Excelente Tecnica";
				contadorIntentos = 0;
				break;
			case 5:
				contadorIntentos == 5;
				mensaje = "Usted esta en la media";
				contadorIntentos = 0;
				break;
			case 6:
				contadorIntentos == 6;
			case 7:
				contadorIntentos == 7;
			case 8:
				contadorIntentos == 8;
			case 9:
				contadorIntentos == 9;
			case 10:
				contadorIntentos == 10;
				mensaje = "Falta Tecnica";
				contadorIntentos = 0;
				break;
			default:
				mensaje = "Afortunado en el amor";
				contadorIntentos = 0;
				break;
		}	
	}
	else
	{
		alert("El nro ingresado es erroneo.");
	}

	
}