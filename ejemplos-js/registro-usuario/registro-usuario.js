var formulario = document.getElementById('registro');

formulario.addEventListener('submit', function(evento){
    if(!verificaNombre() || !verificaContra() || !verificaTerminos())
    {
        var mensaje = document.getElementById('validacion');
        mensaje.innerHTML= 'Error';
        evento.preventDefault(); //No envia nada al servidor
    }
    
});

function verificaNombre()
{
    if(formulario.nombre.value.charAt(0))
    return false;
}

function verificaContra()
{
    return true;
}

function verificaTerminos()
{
    return true;
}