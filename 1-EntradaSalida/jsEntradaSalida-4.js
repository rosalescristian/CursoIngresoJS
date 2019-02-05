/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/

var nombre = prompt("Ingrese su nombre"); //con esto tiro un prompt y guardo el dato en la variable

function mostrar()
{

	document.getElementById(elNombre.value=nombre); //inserto un nuevo valor en el id elNombr
	//q es igual a la variable
	//alert(nombre); //Esto muestra un nuevo cuadro de dialogo con el nombre que ingrese por fuera de la funcion
	//alert("El nombre ingresado fue: "+nombre); //Idem anterior pero con texto y concateno
}

