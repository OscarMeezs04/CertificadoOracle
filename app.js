let NumeroSecreto=0;
let intentos=0;
let ListaDeNumeros=[];
let NumeroMaximo=10; 


function AsignarTextoElemento(Elemento,Texto){
    let elementoHTML=document.querySelector(Elemento);
    elementoHTML.innerHTML=(Texto);
    return;
}

function VerificarIntento() {
    let NumeroUsuario = parseInt (document.getElementById('ValorUsuario').value);
         if (NumeroUsuario === NumeroSecreto){
        AsignarTextoElemento('p', `¡Ganaste en ${intentos} ${(intentos === 1) ? 'intento!' : 'intentos!'}`); 
        document.getElementById ('reiniciar').removeAttribute('disabled');
        } else if (NumeroUsuario>NumeroSecreto){
        AsignarTextoElemento('p','Intenta con un número más pequeño')
        intentos++; 
        LimpiarUsuario();
        } else if (NumeroUsuario<NumeroSecreto){
        AsignarTextoElemento('p','Intenta con un número más grande')
        intentos++;
        LimpiarUsuario();
        }
    }

    function LimpiarUsuario(){
        document.querySelector('#ValorUsuario').value='';
    }
    
    
    function NumeroRandom() {
        let NumeroElegido= Math.floor(Math.random()*NumeroMaximo)+1;

        console.log(NumeroElegido);
        console.log(ListaDeNumeros);
        if (ListaDeNumeros.length == NumeroMaximo){
            AsignarTextoElemento('h1','¡Adivinaste todos los números!');
        } else {
            if(ListaDeNumeros.includes(NumeroElegido)){
                return NumeroRandom();
            } else{
                ListaDeNumeros.push(NumeroElegido);
                return NumeroElegido;
            }
        }
}
    

    function CondicionesIniciales(){
    AsignarTextoElemento('h1','Juego del número secreto');
    AsignarTextoElemento('p',`Indica un número del 1 al ${NumeroMaximo}`);
    NumeroSecreto=NumeroRandom();
    intentos=1;
    console.log(NumeroSecreto);
}



function JuegoNuevo(){
    LimpiarUsuario();
    CondicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

     CondicionesIniciales();







