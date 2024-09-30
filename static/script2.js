function sanitize(san) {

    san= san.toLowerCase().trim()
    return san
}

function percentage(percentuale, totale) {

    let perc = (percentuale / totale) * 100

    return perc


}

let tot = 4
let counter = 0
let domanda1 = prompt ("qual'è la capitale d'Italia?")
domanda1= sanitize(domanda1) 

if (domanda1 === "roma") {
    console.log ("corretta")
counter = counter +1
}
if (domanda1 != "roma") {
    console.log ("errata")

}


let domanda2 = prompt ("qual'è la marca di auto con 4 anelli concatenati in color argento?")
domanda2 = sanitize(domanda2)

if (domanda2 === "audi") {
    console.log ("corretta")
    counter = counter +1
}
if (domanda2 != "audi") {
    console.log ("errata")

}

let domanda3 = prompt ("di che colore è il cavallo bianco di Napoleone?")
domanda3 = sanitize(domanda3)

if (domanda3 === "bianco") {
    console.log ("corretta")
    counter = counter +1
}
if (domanda3 != "bianco") {
    console.log ("errata")

}
let domanda4 = prompt ("come si chiama la mamma di gesu'?")
domanda4 = sanitize(domanda4)

if (domanda4 === "maria") {
    console.log("corretta")
    counter = counter +1
}
if (domanda4 != "maria") {
    console.log ("errata")

}
counter = percentage(counter,tot)
console.log ('complimenti!!, hai fatto un risultato di '+ counter + "%")