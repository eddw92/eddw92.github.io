var btnAgregar = document.getElementById('btnAgregar');

//DELEGACION DE EVENTOS
var padre = document.getElementById('contenedor');
padre.addEventListener('click', function(evento){
    var hijo = event.target;
    console.log(hijo);
    if(hijo!=padre)
    {
        this.removeChild(hijo);
    }   
})


/*var cajas = document.getElementsByClassName("caja");
for(i=0; i<cajas.length; i++)
{
    cajas[i].addEventListener('click', function(){
        padre.removeChild(this);
    });
}*/



/*Event Handler: Solo hay unica funcion esperando a que pase algo*/
//btnAgregar.onclick = agregaCaja; //Le asiciaste un evento en JS.
//btnAgregar.onclick = prueba;
/*Funcion anonima*/
/*btnAgregar.onclick = function(){
    window.alert("Ejecutando funcion anoonima");
}*/

/*Event Listener: Puedes llamar a mas funciones porque hay mas escuchantes*/
btnAgregar.addEventListener('click', function(){
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    if(contenido !='')
    {
        agregaCaja(contenido);
    }
});
/*document.addEventListener('click',prueba);
document.addEventListener('click',function() {
    window.alert("Ejecutando funcion anoonima");
});*/


function agregaCaja(texto)
{
    var cajas = document.getElementsByTagName('div');
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    nuevo.appendChild(texto);
    nuevo.setAttribute("class","caja");
    var padre = document.getElementById('contenedor');
    padre.appendChild(nuevo);
}

function prueba()
{
    window.alert('Hola');
}

