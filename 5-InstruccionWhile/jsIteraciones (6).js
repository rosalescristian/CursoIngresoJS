function mostrar()
{

	var contador=0;
	var acumulador=0;

	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroCuatro;
	var numeroCinco;
	//var adicion;

	numeroUno = prompt("Ingrese un nro.");
	numeroDos = prompt("Ingrese otro nro.");
	numeroTres = prompt("Ingrese un nro.");
	numeroCuatro = prompt("Ingrese otro nro.");
	numeroCinco = prompt("Ingrese un nro.");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	numeroCuatro = parseInt(numeroCuatro);
	numeroCinco = parseInt(numeroCinco);
	acumulador = parseInt(acumulador);

	acumulador = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;
	///acumulador = adicion;

document.getElementById('suma').value=acumulador;
//document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
	
	//alert(acumulador);
}//FIN DE LA FUNCIÓN