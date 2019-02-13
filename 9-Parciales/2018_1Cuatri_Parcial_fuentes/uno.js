//alert ("usredes son xxxx y xxxx, sus edades son xx y xx, y la suma de sus edades es xx")
function mostrar()
{
	var nombreUno;
	var nombreDos;
	var edadUno;
	var edadDos;
	var sumaEdad;

	nombreUno = prompt("Ingrese un nombre.");
	edadUno = prompt("Ingrese su edad.");
	edadUno = parseInt(edadUno);

	nombreDos = prompt("Ingrese otro nombre.");
	edadDos = prompt("Ingrese la edad.");
	edadDos = parseInt(edadDos);
	
	sumaEdad = edadUno+edadDos;
	sumaEdad = parseInt(sumaEdad);

	alert("Uds. son "+nombreUno+" y "+nombreDos+", sus edades son "+edadUno+" y "+edadDos+", y la suma de sus edades es "+sumaEdad);

}
