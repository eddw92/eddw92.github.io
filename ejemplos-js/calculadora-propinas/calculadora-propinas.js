var btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function(){
    //var propina = document.getElementById('calculadora');
    var propinaPersona = calculaPropina();
    propina.innerHTML = 'Propina $' + propinaPersona + ' por persona.';


});

function calculaPropina()
{
    var calculadora = document.getElementById('calculadora');
    var numPersonas = parseInt(calculadora.personas.value);
    var totalCuenta = parseFloat(calculadora.total.value);
    var servicio = parseInt(calculadora.servicio.value);
    if(Number.isNaN(numPersonas) || Number.isNaN(totalCuenta)){
        return "Valores no validos";
    }
    else
    {
        to
        return 
    }
    return totalCuenta/numPersonas*servicio/100;
}