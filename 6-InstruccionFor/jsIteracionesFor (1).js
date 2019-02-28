function mostrar()
{
	//for (CREAMOS VARIABLE;COMPARACION LOGICA;ACCION){}
	//for ( ; ; ){}
	// cada termino del FOR es independiente; no estan relacionados uno con el otro, solo el segundo
	//es el q me da la logica es la del medio y una vez q paso la primera vez vuelve al tercer termino.
/*	
	var contador;
	contador = 0;
	while(contador <10)
	{
		contador=contador+1;
	}
*/
// el FOR es igual que WHILE solo que en 1 linea
	var palabra = "luz azul";

	//console.log(palabra[0]);
	for(i=0;i<palabra.length;i++)
	{
		console.log(palabra[i]);
	}
	
	var contador;
	var numeroRandom;
	var contadorUno=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var contadorSeis=0;
	var contadorSiete=0;
	var contadorOcho=0;
	var contadorNueve=0;
	var contadorDiez=0;
	var porcentajeUno;
	var porcentajeDos;
	var porcentajeTres;
	var porcentajeCuatro;
	var porcentajeCinco;
	var porcentajeSeis;
	var porcentajeSiete;
	var porcentajeOcho;
	var porcentajeNueve;
	var porcentajeDiez;

	for(contador=0;contador<10;contador++)
	{
		numeroRandom = Math.floor((Math.random() * 10) + 1);
		numeroRandom = parseFloat(numeroRandom);
		
//		console.log(numeroRandom);
		
		switch(numeroRandom)
		{
			case 1:
				contadorUno ++;
				break;
			case 2:
				contadorDos ++;
				break;
			case 3:
				contadorTres ++;
				break;
			case 4:
				contadorCuatro ++;
				break;
			case 5:
				contadorCinco ++;
				break;
			case 6:
				contadorSeis ++;
				break;
			case 7:
				contadorSiete ++;
				break;
			case 8:
				contadorOcho ++;
				break;
			case 9:
				contadorNueve ++;
				break;
			case 10:
				contadorDiez ++;
				break;
		}
	}

	alert("no entraste al for");

	/*porcentajeUno=(contadorUno/contador)*100;
	porcentajeDos=(contadorDos/contador)*100;
	porcentajeTres=(contadorTres/contador)*100;
	porcentajeCuatro=(contadorCuatro/contador)*100;
	porcentajeCinco=(contadorCinco/contador)*100;
	porcentajeSeis=(contadorSeis/contador)*100;
	porcentajeSiete=(contadorSiete/contador)*100;
	porcentajeOcho=(contadorOcho/contador)*100;
	porcentajeNueve=(contadorNueve/contador)*100;
	porcentajeDiez=(contadorDiez/contador)*100;
	
	//document.write("El 1 salio "+contadorUno+" veces; el "+(contadorUno/contador)*100+" % de las oportunidades. <br>");
	document.write("El 1 salio "+contadorUno+" veces; el "+porcentajeUno+" % de las oportunidades. <br>");
	document.write("El 2 salio "+contadorDos+" veces; el "+porcentajeDos+" % de las oportunidades. <br>");
	document.write("El 3 salio "+contadorTres+" veces; el "+porcentajeTres+" % de las oportunidades. <br>");
	document.write("El 4 salio "+contadorCuatro+" veces; el "+porcentajeCuatro+" % de las oportunidades. <br>");
	document.write("El 5 salio "+contadorCinco+" veces; el "+porcentajeCinco+" % de las oportunidades. <br>");
	document.write("El 6 salio "+contadorSeis+" veces; el "+porcentajeSeis+" % de las oportunidades. <br>");
	document.write("El 7 salio "+contadorSiete+" veces; el "+porcentajeSiete+" % de las oportunidades. <br>");
	document.write("El 8 salio "+contadorOcho+" veces; el "+porcentajeOcho+" % de las oportunidades. <br>");
	document.write("El 9 salio "+contadorNueve+" veces; el "+porcentajeNueve+" % de las oportunidades. <br>");
	document.write("El 10 salio "+contadorDiez+" veces; el "+porcentajeDiez+" % de las oportunidades. <br>");
*/	
}

