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
    if(!verificaNombre() || !verificaContra() || !verificaTerminos())
    {
        mensajeReg.innerHTML = 'Verifica errores en el formulario.';
        evento.preventDefault(); //NO ENVIA NADA AL SERVIDOR
    } 
});


formulario.nombre.addEventListener('blur',function(evento){
    verificaNombre();
});

formulario.contra.addEventListener('keyup',function(evento){
    verificaSeguridad();
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
        
        mensajeNombre.innerHTML += ' Error: Requiere una letra al comienzo del nombre de usuario. ';
        return false;
    }   
}


function verificaSeguridad()
{
    var contraseña = formulario.contra.value;
    var letra = false;
    var digitos = false;
    var simbolos = false;

    var expRegL = /[a-z]/i;
    var expRegN = /[0-9]/;

    mensajeContra.innerHTML = "";

    for(i=0; i<contraseña.length;i++)
    {
        if(expRegL.test(contraseña.charCodeAt(0)))
        {
            letra = true;
        }
        else if(expRegN.test(contraseña.charCodeAt(0)))
        {
            digitos = true;            
        }
        else{
            simbolos = true;            
        }
    }

    if(letra==true && digitos==true && simbolos==true)
    {
        //Es fuertemente segura.
        mensajeContra.innerHTML += 'La contraseña es fuertemente segura. ';
    }
    else if(letra==true&&digitos==true)
    {
        //Es medianamente segura.  
        mensajeContra.innerHTML += ' La contraseña es medianamente segura. ';  
    }
    else{
        //Es debilmente segura.
        mensajeContra.innerHTML += ' La contraseña es debilmente segura. ';
    }

}

function verificaContra()
{
    var contraseña = formulario.contra.value;

    if(contraseña.length>=8)
    {   
        if(contraseña == formulario.contra2.value)
        {   
            mensajeContra.innerHTML = "";            
            return true; 
        }   
        else{
            return false;
            mensajeContra2.innerHTML = ' Error: Las contraseñas no son iguales.';
        }             
    }
    else
    {
        contra.innerHTML = ' Error: La contraseña no cuenta con un min 8 caracteres.';
        return false;
    }    
}

function verificaTerminos()
{
   if(formulario.termCond.value=="on")
   {
        mensajeTerm.innerHTML = "";    
        return true;
   }
   else{
        mensajeTerm.innerHTML += ' Error: No se han aceptado los terminos y condiciones. ';
        return false;
   }  
}