function mostrar()
{

	var contador=0;
	var acumulador=0;
	/*
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var numeroCinco;
*/
	while(contador<5)
		{
			numeroUno=prompt("Ingrese un nro.");
			numeroUno = parseInt(numeroUno);
			contador = contador + 1;
			acumulador = acumulador + numeroUno;
		/*	
			numeroDos=prompt("Ingrese otro nro");
			numeroDos = parseInt(numeroDos);
			contador = contador + 1;
			acumulador = acumulador + numeroDos;

			numeroTres=prompt("Ingrese un nro");
			numeroTres = parseInt(numeroTres);
			contador = contador + 1;
			acumulador = acumulador + numeroTres;

			numeroCuatro=prompt("Ingrese otro nro");
			numeroCuatro = parseInt(numeroCuatro);
			contador = contador + 1;
			acumulador = acumulador + numeroCuatro;

			numeroCinco=prompt("Ingrese un nro");
			numeroCinco = parseInt(numeroCinco);
			contador = contador + 1;
			acumulador = acumulador + numeroCinco;
		*/
		}

//		acumulador = numeroUno+numeroDos+numeroTres+numeroCuatro+numeroCinco;
//		acumulador = parseInt(acumulador);

	document.getElementById('suma').value=acumulador;
	//document.getElementById('promedio').value=acumulador/5;//Asi venia en el enunciado
	document.getElementById('promedio').value=acumulador/contador; // de esta manera cambia al valor de contador (5 segun el while)va hasta infinito (segun q valor tengas ahi)


}//FIN DE LA FUNCIÓN