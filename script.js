//Ejemplo de objeto
let auto = {
    modelo: "clio",
    patente: "AAJ520",
    anio: 2016,
    kilometros: 50000,
    arrancar: function () {
        alert("Poniendo la llave y arrancando el auto")
    }
}

//Funcion que cambia el title de la página
function cambiarTitulo() {
    let titulo = prompt("Escribe el titulo nuevo")
    document.title = titulo
}

//Funcion para cambiar el contenido del encabezado por medio de un prompt
function cambiarEncabezado() {
//Primero busca el encabezado entre los elementos del documento y lo guarda en una variable
    let encabezado = document.getElementById("encabezado")
//Luego guarda el prompt del usuario en una variable
    let nuevoEncabezado = prompt("Escribe un nuevo encabezado")
//Finalmente cambia el contenido del encabezado por el prompt    
    encabezado.innerHTML = nuevoEncabezado
}

//Funcion que agrega un elemento h2. Es una funcion destructiva y, al agregar el elemento, puede que borre el documento
/*function agregarH2(){
document.write("<h2>Escribí algo nuevooo</h2>")
}*/

//Funcion de agregar un elemento de parrafo
function agregarParrafo() {
//Crea un elemento parrafo vacio
    let nuevo = document.createElement("p")
//Agrega contenido al elemento vacio
    nuevo.innerHTML = "MIRA MI NUEVO ELEMENTO"
//Busca el elemento padre a donde agregará el elemento nuevo
    let padre = document.getElementById("zonaDeParrafos")
//Le dice al elemento padre que se agregue el elemento nuevo
    padre.appendChild(nuevo)
}

//console.log(document.body.children)

//Eliminar el primer elemento de la zona de parrafos
function eliminarParrafo(){
//Comienza ubicando el elemento padre de donde habría que eliminar un parrafo
    let padre = document.getElementById("zonaDeParrafos")
//Da la orden de eliminar el primero de los elementos "hijos"
    padre.removeChild(padre.children[0])
}

function cambiarTamaño(){
    let imagen = document.getElementById("bandera");
    let tamaño = document.getElementById("tamañoNuevo").value
    imagen.setAttribute("height", tamaño+"px")
}

function modoOscuro(){
    document.body.style.backgroundColor = "#858382"
    document.getElementById("zonaDeParrafos").style.backgroundColor = "#868E92"
    document.body.style.color = "#E9E5E3"
}

function modoClaro(){
    document.body.style.backgroundColor = "#90D6F3"
    document.getElementById("zonaDeParrafos").style.backgroundColor = "#E7E891"
    document.body.style.color = "#485358"
}

function cambiarFondo(){
    let color = document.getElementById("fondo").value
    document.body.style.backgroundColor = color
}

console.log(window.location)

function redirigir(){

    window.location.href = "https://www.google.com/"

}

function elegirFactura(){
    alert("Elegiste comprar una docena de "+ document.getElementById("facturas").value)
}




