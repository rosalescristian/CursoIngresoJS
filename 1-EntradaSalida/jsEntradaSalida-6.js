/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	//var primerNumero = parseInt(numeroUno.value);
	//var segundoNumero = parseInt(numeroDos.value);
	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	primerNumero=parseInt(primerNumero);
	segundoNumero=parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;

	alert("La suma es "+suma);


}

