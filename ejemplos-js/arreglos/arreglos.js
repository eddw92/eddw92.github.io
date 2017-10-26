var materias = [
    {Nombre: 'Tecnologías Web', Creditos: 8, Optativa: true, Elimina: false},
    {Nombre: 'Sistemas de Informacion A', Creditos: 10, Optativa: false, Elimina: false },
    {Nombre: 'Compiladores A', Creditos: 10, Optativa: false, Elimina: false},
    {Nombre: 'Base de Datos A', Creditos: 10, Optativa: false, Elimina: false},
    {Nombre: 'Ingles 4', Creditos: 10, Optativa: false, Elimina: false},
    {Nombre: 'Graficacion por Computadoras A', Creditos: 10, Optativa: false,  Elimina: false}
];

var tabla = document.createElement('table');
tabla.setAttribute('id', 'tabla');
tabla.appendChild(creaEncabezado());

var materiasFiltradas=materias;

muestraMaterias(materias);

function muestraMaterias(mats) 
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
    
    mats.forEach(function (mat) {
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
    var e = document.getElementById('eliminaId');
    if(eventoS==n)
    {
        materiasFiltradas.sort(comparaNombre);
        actualizaTabla(materiasFiltradas);
    }
    else if(eventoS==c)
    {
        materiasFiltradas.sort(function (m1, m2) {
            return m1.Creditos - m2.Creditos; 
        });
        actualizaTabla(materiasFiltradas);
    }
    else if(eventoS==o){
        materiasFiltradas.sort(function (m1, m2) {
            return m1.Optativa - m2.Optativa;  
        });
        actualizaTabla(materiasFiltradas);
    }
    else{
        /*materias.forEach(function (mat) {
            if(mat.Elimina==true)
            {
                materias.pop();
            }    
        });*/

        for(var i = 0; i < materias.length; i++)
        {    
            if(materias[i].Elimina==true)
            {
                materias.splice(i,1)
            }  
        }

        actualizaTabla(materias);
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

    var elimina = document.createElement('td');
    var eliminaCbox = document.createElement("input");
    eliminaCbox.type="checkbox";
    eliminaCbox.checked=mat.Elimina;
    eliminaCbox.addEventListener('click', function(){
        mat.Elimina = !mat.matElimina;
    });
    
    elimina.appendChild(eliminaCbox);

    fila.appendChild(nombre);
    fila.appendChild(creditos);
    fila.appendChild(optativa);
    fila.appendChild(elimina);

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

    var elimina = document.createElement('th');
    var textoElimina = document.createTextNode('Elimina');
    elimina.setAttribute('id', 'eliminaId');
    elimina.appendChild(textoElimina);

    encabezado.appendChild(nombre);
    encabezado.appendChild(creditos);
    encabezado.appendChild(optativa);
    encabezado.appendChild(elimina);

    encabezado.setAttribute('id', 'encabezado');
    return encabezado;
}

function actualizaTabla(mats)
{
    var tabla = document.getElementById('tabla');
    var aux = tabla.firstChild.nextSibling;
    while (aux) {
        aux2 = aux;
        aux = aux.nextSibling;
        tabla.removeChild(aux2);
    }
    muestraMaterias(mats);
}

function comparaNombre(m1, m2) {
    if (m1.Nombre === m2.Nombre) return 0;
    else if (m1.Nombre < m2.Nombre) return -1;
    else return 1;
}

var busqueda = document.getElementById('busqueda');
var expRegA = /[a-z]/i;

busqueda.addEventListener('keyup', function(){
    if(busqueda!="")
    {
        if(expRegA.test(busqueda.value))
        {
            materiasFiltradas = materias.filter(function(mat){
                return mat.Nombre.includes(busqueda.value);
            });
        }
        else
        {
            materiasFiltradas = materias;
        }
        actualizaTabla(materiasFiltradas);
    }
});


var buttonInsertar = document.getElementById('insertarMateria');

buttonInsertar.addEventListener('click', function(){  
    var nombreMat = document.getElementById('nombre');    
    var creditosMat = document.getElementById('creditos');
    var optativaMat = document.getElementById('optativa').checked;

    materias.push({Nombre: nombreMat.value, Creditos: creditosMat.value, Optativa: optativaMat,  Elimina: false});
    nombreMat.value = optativaMat.value = busqueda.value ="";
    creditosMat.value = 0;
    actualizaTabla(materias);

});

