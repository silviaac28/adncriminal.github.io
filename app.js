let nombres = ["Pedro", "Juan", "Diego"]
localStorage.setItem("nombre", JSON.stringify(nombres));

let secuencias = ["00000101010101010101", "00101010101101110111", "00100010010000001001"]
localStorage.setItem("adn", JSON.stringify(secuencias));



const comparar = function () {
    var adncriminal =  (document.getElementById("operando1").value);

    var sospechosos = JSON.parse(localStorage.getItem("nombre"));
    var adn = JSON.parse(localStorage.getItem("adn"));
    console.log(sospechosos)
    console.log(adn)

    var separarSec = adncriminal.split("");
    console.log(separarSec)

    var separarSec1 = adn[0].split("");
    console.log(separarSec1)

    var separarSec2 = adn[1].split("");
    console.log(separarSec2)

    var separarSec3 = adn[2].split("");
    console.log(separarSec3)

    varcoincidencias1=0
    varcoincidencias2=0
    varcoincidencias3=0

    for (let i = 0; i < 20; i++) {
        if (separarSec[i] == separarSec1[i]){
            varcoincidencias1+=5;
        }
        }

    for (let i = 0; i < 20; i++) {
        if (separarSec[i] == separarSec2[i]){
            varcoincidencias2+=5;
        }
        }

    for (let i = 0; i < 20; i++) {
        if (separarSec[i] == separarSec3[i]){
            varcoincidencias3+=5;
        }
        }


    if (varcoincidencias1 > varcoincidencias2 && varcoincidencias1 > varcoincidencias3) {
        culpable = sospechosos[0];
        porcentaje = varcoincidencias1;
    } else if (varcoincidencias2 > varcoincidencias1 && varcoincidencias2 > varcoincidencias3) {
        culpable = sospechosos[1];  
        porcentaje = varcoincidencias2;
    } else {
        culpable = sospechosos[2];  
        porcentaje = varcoincidencias3;
    }


    document.getElementById("resultado").innerHTML = "El culpable es " + culpable + " con un parentezco de " + porcentaje + "%"




        

    



  




}