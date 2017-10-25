var materias = [
    {Nombre: 'Tecnologías Web', Creditos: 8, Optativa: true},
    {Nombre: 'Sistemas de Informacion A', Creditos: 10, Optativa: false},
    {Nombre: 'Compiladores A', Creditos: 10, Optativa: false},
    {Nombre: 'Base de Datos A', Creditos: 10, Optativa: false},
    {Nombre: 'Ingles 4', Creditos: 10, Optativa: false},
    {Nombre: 'Graficacion por Computadoras A', Creditos: 10, Optativa: false}
];

var tabla = document.createElement('table');
tabla.setAttribute('id', 'tabla');
tabla.appendChild(creaEncabezado());

muestraMaterias();

function muestraMaterias() 
{
    console.log('For normalito');
    for(var i = 0; i < materias.length; i++)
    {
        console.log('Nombre: ' + materias[i].Nombre);
        console.log('Creditos: ' + materias[i].Creditos);
        console.log('Optativa: ' + materias[i].Optativa);
    }

    console.log('Foreach');
    materias.forEach(function(mat) {
        console.log('Nombre: ' + mat.Nombre);
        console.log('Creditos: ' + mat.Creditos);
        console.log('Optativa: ' + mat.Optativa ? 'Si' : 'No');
    });
    
    materias.forEach(function (mat) {
        tabla.appendChild(creaFila(mat));    
    });

    document.body.appendChild(tabla);

}

//PARA SEGUIR ACTUALIZANDO LA TABLA
var ordenaTabla = document.getElementById('encabezado');

ordenaTabla.addEventListener('click', function(evento){
    var eventoS = evento.target;
    var n = document.getElementById('nombreId');
    var c = document.getElementById('creditosId');
    var o = document.getElementById('optativaId');
    if(eventoS==n)
    {
        materias.sort(comparaNombre);
        actualizaTabla();
    }
    else if(eventoS==c)
    {
        materias.sort(function (m1, m2) {
            return m1.Creditos - m2.Creditos; 
        });
        actualizaTabla();
    }
    else{
        materias.sort(function (m1, m2) {
            return m1.Optativa - m2.Optativa;  
        });
        actualizaTabla();
    }
});

function creaFila(mat)
{
    var fila = document.createElement('tr');

    var nombre = document.createElement('td');
    var textoNombre = document.createTextNode(mat.Nombre);
    nombre.appendChild(textoNombre);

    var creditos = document.createElement('td');
    var textoCreditos = document.createTextNode(mat.Creditos);
    creditos.appendChild(textoCreditos);

    var optativa = document.createElement('td');
    var textoOptativa = document.createTextNode(mat.Optativa);
    optativa.appendChild(textoOptativa);

    fila.appendChild(nombre);
    fila.appendChild(creditos);
    fila.appendChild(optativa);

    return fila;
}

function creaEncabezado()
{
    var encabezado = document.createElement('tr');

    var nombre = document.createElement('th');
    var textoNombre = document.createTextNode('Nombre');
    nombre.setAttribute('id', 'nombreId');
    nombre.appendChild(textoNombre);

    var creditos = document.createElement('th');
    var textoCreditos = document.createTextNode('Creditos');
    creditos.setAttribute('id', 'creditosId');
    creditos.appendChild(textoCreditos);

    var optativa = document.createElement('th');
    var textoOptativa = document.createTextNode('Optativa');
    optativa.setAttribute('id', 'optativaId');
    optativa.appendChild(textoOptativa);

    encabezado.appendChild(nombre);
    encabezado.appendChild(creditos);
    encabezado.appendChild(optativa);

    encabezado.setAttribute('id', 'encabezado');
    return encabezado;
}

function actualizaTabla()
{
    var tabla = document.getElementById('tabla');
    var aux = tabla.firstChild.nextSibling;
    while (aux) {
        aux2 = aux;
        aux = aux.nextSibling;
        tabla.removeChild(aux2);
    }
    muestraMaterias();
}

function comparaNombre(m1, m2) {
    if (m1.Nombre === m2.Nombre) return 0;
    else if (m1.Nombre < m2.Nombre) return -1;
    else return 1;
}

var buscar = document.getElementById('buscarButton');

    buscar.addEventListener('click',function(evento){
    var textoBuscar = document.getElementById('busqueda').value;
    //var tabla = document.getElementById('tabla');
    var aux = tabla.firstChild.nextSibling;
    while (aux) {
        aux2 = aux;
        aux = aux.nextSibling;
        tabla.removeChild(aux2);
    }

    materias.forEach(function (mat) {

        //AQUI ANTES DE AGREGAR HAS EL FILTRADO SEGUN LA CADENA OBTENIDA OOR TEXTO BUSCAR

        tabla.appendChild(creaFila(mat));    
    });
})