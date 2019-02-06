/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/

/*var nombre = prompt("Ingrese su nombre"); //con esto tiro un prompt y guardo el dato en la variable

function mostrar()
{



	document.getElementById(elNombre.value=nombre); //inserto un nuevo valor en el id elNombre
	//q es igual a la variable
	//alert(nombre); //Esto muestra un nuevo cuadro de dialogo con el nombre que ingrese por fuera de la funcion
	//alert("El nombre ingresado fue: "+nombre); //Idem anterior pero con texto y concateno
}
*/
/*
Version del profe 1):

function mostrar()
{

	var nombre;
	nombre=prompt("Por favor ingrese un dato")
	

}

Version del profe 2):
*/
function mostrar()
{

	var nombre;
	nombre=prompt("Por favor ingrese sus datos");
	//document.getElementById(elNombre.value=nombre); //Mi version - inserto un nuevo valor en el id elNombre
	document.getElementById('elNombre').value=nombre;
	
}
