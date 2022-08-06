/*Declarando os objetos do Relogio ,aqui eu chamei as constantes
criando(as) seguida do "getElementById" (El = element)*/

const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const ampmEl = document.getElementById("ampm");

/*aqui declarei seus parametros dentro da funçao "updateClock"
        h = hour m = minutes s  = seconds */

function updateClock() {
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"    
    
/* aqui criei uma instrução a cada 12hr para AM/PM para identificar quando é manhã ou tarde */

    if (h > 12){
            h = h- 12;
            ampm = "PM";
         }
     
/* aqui os parametros das funções e suas regras a seguir*/
     h = h < 10 ? "0" + h : h;  
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;
 
     horasEl.innerText = h;
     minutosEl.innerText = m;
     segundosEl.innerText = s;
     ampmEl, (innerText = ampm);

     /* Definindo os parametros reiniciando com a função "setTimeout" */
        
     setTimeout(() => {
            updateClock();

        }, 1000)
    }
            updateClock();

            /* BY: ALISSON MARQUES - Aluno Digital House - Full Stack */  