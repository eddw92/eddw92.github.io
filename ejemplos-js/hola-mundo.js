document.write("Hola desde JavaScript");

for(i=0; i<10; i++)
{
    document.write('<br>');
    document.write(i);   
}


function imprimeNumeros(arr)
{
    for(i=0; i<arreglo.length; i++)
    {
        document.write('<br>');
        document.write(arr[i]);   
    }
}
window.alert("Yo aqui dando lata");
console.log("Hola para la consola");

/*NOTACION LITERAL DE  ARREGLOS*/
var arreglo = [3, 5, 7];
imprimeNumeros(arreglo);

var arreglo2 = new Array(9,11,13);
imprimeNumeros(arreglo2);


/*NOTACION LITERAL DE  OBJETOS*/
var triangulo = {
    base: 3,
    altura: 5,
    area : function(){
        console.log("area = " + this.base*this.altura/2)
    }
}

triangulo.area();