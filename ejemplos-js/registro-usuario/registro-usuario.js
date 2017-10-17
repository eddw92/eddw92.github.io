var formulario = document.getElementById('registro');
var mensaje = document.getElementById('validacion');

formulario.addEventListener('submit', function(evento){
    if(!verificaNombre() || !verificaContra() || !verificaTerminos())
    {
        mensaje.innerHTML= 'Error';
        evento.preventDefault(); //No envia nada al servidor
    }
    else{
        mensaje.innerHTML= 'Registro Exitoso';
    }
    
});


formulario.nombre.addEventListener('blur',function(evento){
    verificaNombre();
});

formulario.contra.addEventListener('keyup',function(evento){
    mensaje.innerHTML= 'Registro Exitoso';
});


function verificaNombre()
{
    var expReg = /[a-z]/i;
    
   // if(formulario.nombre.value.charCodeAt(0)>= 65 && formulario.nombre.value.charCodeAt(0)<= 90 || formulario.nombre.value.charCodeAt(0)>= 97 && formulario.nombre.value.charCodeAt(0)<= 122)
    if(expReg.test(formulario.nombre.value.charAt(0)))
   {
        return true;
    } 
    else{
        
        mensaje.innerHTML += ' Error: Requiere una letra al comienzo del nombre de usuario. ';
        return false;
    }   
}

function verificaContra()
{
    var contraseña = formulario.contra.value;
    var letras = 0;
    var digitos = 0;    
    var simbolos = 0;
    var validacion;

    if(contraseña.length>=8)
    {
        if(contraseña == formulario.contra2.value)
        {          
            for(i=0; i<contraseña.length; i++)
            {
                //BUSCAR LETRAS
                if(contraseña.charCodeAt(0)>= 65 && contraseña.charCodeAt(0)<= 90 || contraseña.charCodeAt(0)>= 97 && contraseña.charCodeAt(0)<= 122)
                {
                    letras++;
                }
                //BUSCAR DIGITOS
                else if(contraseña.charCodeAt(0)>= 48 && contraseña.charCodeAt(0)<= 57)
                {
                    digitos++;
                }
                //BUSCAR SIMBOLOS
                else{
                    simbolos++;
                }
            } 
            
            if(letras>0 && digitos>0 && simbolos>0)
            {
                //Es fuertemente segura.
                mensaje.innerHTML += " La contraseña es fuertemente segura. ";
            }
            else if(letras>0 && digitos>0)
            {
                //Es medianamente segura.  
                mensaje.innerHTML += " La contraseña es medianamente segura. ";      
            }
            else if(letras>0)
            {
                //Es debilmente segura.
                mensaje.innerHTML += " La contraseña es debilmente segura. ";
            }

            return true;       
        }
        else
        {
            mensaje.innerHTML += ' Error: Las contraseñas no son iguales. ';
            return false;
        }
    }
    else
    {
        mensaje.innerHTML += ' Error: Las contraseña no cuenta con 8 caracteres minimos. ';
        return false;
    }
    
}

function verificaTerminos()
{
   if(formulario.termCond.value=="on")
   {
     return true;
   }
   else{
    mensaje.innerHTML += ' Error: No se han aceptado los terminos y condiciones. ';
    return false;
   }  
}