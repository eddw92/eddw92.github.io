//OBTIENE EL FORMULARIO
var formulario = document.getElementById('registro');
//VALIDACION DE LOS CAMPOS UNO A UNO
var mensajeNombre = document.getElementById('validacionNombre');
var mensajeContra = document.getElementById('validacionContra');
var mensajeContra2 = document.getElementById('validacionContra2');
var mensajeTerm = document.getElementById('validacionTermCond');
//VALIDA QUE EL REGISTRO COMPLETO ESTE CORRECTO
var mensajeReg = document.getElementById('validacionReg');

formulario.addEventListener('submit', function(evento){
    if(!verificaTerminos() || !verificaNombre() || !verificaContra() )
    {
        mensajeReg.innerHTML = ' Verifica errores en el formulario. ';
        evento.preventDefault(); //NO ENVIA NADA AL SERVIDOR
    } 
});


formulario.nombre.addEventListener('blur',function(evento){
    verificaNombre();
});

formulario.contra.addEventListener('keyup',function(evento){
    verificaSeguridad();
});

formulario.contra2.addEventListener('blur',function(evento){
    verificaContra();
});


function verificaNombre()
{
    var expReg = /[a-z]/i;
    
   if(expReg.test(formulario.nombre.value.charAt(0)))
   {
        mensajeNombre.innerHTML = "";
        return true;
    } 
    else{
        
        mensajeNombre.innerHTML = ' Error: Requiere una letra al comienzo del nombre de usuario. ';
        return false;
    }   
}


function verificaSeguridad()
{
    var letra = (/[a-z]/i).test(formulario.contra.value) ;
    var digitos = (/[0-9]/).test(formulario.contra.value);
    var simbolos = (/[!"#$%&/()]/).test(formulario.contra.value);

    if(letra&&digitos&&simbolos)
    {
        //Es fuertemente segura.
        mensajeContra.className='nivel-seguro';
        mensajeContra.innerHTML = 'Segura';
    }
    else if(letra&&digitos)
    {
        //Es medianamente segura.  
        mensajeContra.className='nivel-mediano';
        mensajeContra.innerHTML = 'Mediana';  
    }
    else{
        //Es debilmente segura.
        mensajeContra.className='nivel-debil';
        mensajeContra.innerHTML = 'Debil';
    }
}

function verificaContra()
{
    var contraseña = formulario.contra.value;

    if(contraseña.length>=8)
    {   
        if(formulario.contra.value == formulario.contra2.value)
        {   
            mensajeContra2.innerHTML = "";            
            return true; 
        }   
        else{
            mensajeContra2.innerHTML = ' Error: Las contraseñas no son iguales.';
            return false;
        }             
    }
    else
    {
        mensajeContra2.innerHTML = ' Error: La contraseña no cuenta con un min 8 caracteres.';
        return false;
    }    
}

function verificaTerminos()
{
   if(formulario.termCond.checked==true)
   {
        mensajeTerm.innerHTML = "";    
        return true;
   }
   else{
        mensajeTerm.innerHTML = ' Error: No se han aceptado los terminos y condiciones. ';
        return false;
   }  
}