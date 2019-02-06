/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{

	var dividendo;
	var divisor;
	var resto;

	dividendo = numeroDividendo.value;
	divisor= numeroDivisor.value;
	//var cociente = dividendo / divisor; --> J.I.C.
	
	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);
	
	resto = dividendo % divisor;
	
	//alert("El cociente es "+cociente); --> tratando de inventar algo, no funciono jajaja
	alert("El resto es "+resto); // Esto esta mal. 50/5=10 con resto cero. y me da resto 5.

}
