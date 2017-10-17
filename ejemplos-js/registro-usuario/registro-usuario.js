var formulario = document.getElementById('registro');

formulario.addEventListener('submit', function(evento){
    if(!verificaNombre() || !verificaContra() || !verificaTerminos())
    {
        var mensaje = document.getElementById('validacion');
        mensaje.innerHTML= 'Error';
        evento.preventDefault(); //No envia nada al servidor
    }
    else{
        mensaje.innerHTML= 'Registro Exitoso';
    }
    
});

function verificaNombre()
{
    
    if(formulario.nombre.value.charCodeAt(0)>= 65 && formulario.nombre.value.charCodeAt(0)<= 90 || formulario.nombre.value.charCodeAt(0)>= 97 && formulario.nombre.value.charCodeAt(0)<= 122)
    {
        return true;
    } 
    else{
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
                validacion="Es fuertemente segura.";
            }
            else if(letras>0 && digitos>0)
            {
                //Es medianamente segura.  
                validacion="Es medianamente segura.";      
            }
            else if(letras>0)
            {
                //Es debilmente segura.
                validacion="Es debilmente segura.";
            }

            return true;       
        }
        else
        {
            return false;
        }
    }
    else
    {
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
    return false;
   }  
}