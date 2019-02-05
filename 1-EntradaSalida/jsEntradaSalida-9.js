/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


function mostrarAumento()
{

	var remuneracion = parseInt(sueldo.value); 
	var neto = remuneracion*1.1 // aumento la variable remuneracion (id sueldo) en un 10% (*1.1)
	//var divisor = parseInt(numeroDivisor.value);
	//resultado
	//var cociente = dividendo / divisor; --> J.I.C.
	//var resto = divisor % dividendo;
	//alert("El cociente es "+cociente); --> tratando de inventar algo, no funciono jajaja
	document.getElementById(resultado.value=neto); // asocio el valor de la variable neto al id resultado
	//alert(resultado); // Pruebo mostrar la variable con el resultado correcto aumentado -- No funciona xq tengo un id y una variable con el mismo nombre
	//alert(neto);//	muestra el aumento ok.
	
}
