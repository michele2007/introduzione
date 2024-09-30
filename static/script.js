//codice js 

//prompt è una funzione che chiede un'input e da un'output

//alert mostra un pop up nel browser 
let variabile = prompt("come ti chiami?")

while(variabile === null) 

{

   variabile = prompt("come ti chiami?")

}

variabile = variabile.trim().toLowerCase() // devi sempre salvare le funzioni che chiami, puoi anche chiamare in una stessa riga
//due funzioni in uno stesso modo

                //trim rimuove gli spazi blank dall'input
                
if ( variabile === 'michele') // ToLowerCase converte in minuscolo, mentre ToUpperCase in maiuscolo
    {
  
    alert("benvenuto " + variabile + ', sei il padrone di questo codice')
}


alert("benvenuto " + variabile)

console.log("benvenuto " + variabile) // logga in console il messaggio passato come alert

 console.log(typeof variabile) //typeof mmostra in console il tipo di dato della variabile

 