var materias = [
    {Nombre: 'Tecnologías Web', Creditos: 8, Optativa: true},
    {Nombre: 'Sistemas de Informacion A', Creditos: 10, Optativa: false},
    {Nombre: 'Compiladores A', Creditos: 10, Optativa: false},
    {Nombre: 'Base de Datos A', Creditos: 10, Optativa: false},
    {Nombre: 'Ingles 4', Creditos: 10, Optativa: false},
    {Nombre: 'Graficacion por Computadoras A', Creditos: 10, Optativa: false}
];

muestraMaterias();

var ordenaTabla = document.getElementById('encabezado');

ordenaTabla.addEventListener('click', function(evento){
    var eventoS = evento.target;
    var n = document.getElementById('nombreId');
    var c = document.getElementById('creditosId');
    var o = document.getElementById('optativaId');
    if(eventoS==n)
    {
        materias.sort(materias.Nombre);
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

function muestraMaterias() 
{
    var tabla = document.createElement('table');
    tabla.setAttribute('id', 'tabla');
    tabla.appendChild(creaEncabezado());

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
        tabla.appendChild(creaFila(mat));    // Se le agrega al TBody los elementos.
    });

    document.body.appendChild(tabla);
}

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
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    materias.forEach(function (mat) {
        tabla.appendChild(creaFila(mat));   
    });
}