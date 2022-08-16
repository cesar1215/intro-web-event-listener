
/* Ejercicio 1. 
1. Crear una variable bird con el valor del elemento con clase .bird
2. Crear una variable sky el elemento con clase .sky
*/
let bird = document.querySelector(".bird")
let sky = document.querySelector(".sky")


/* Ejercicio 2. 
Agrega un eventListener al elemento con clase .bird
Pista: utiliza la variable bird que creaste anteriormente
Cuando un usuario de click sobre el elemento, debe correr una función
con el código:

alert("Bird dice: Me llamo Bird!")
*/

bird.addEventListener("click",function(){
    alert("Bird dice : Hola me llamo bird")
} )


/*
Ejercicio 3.
Crea la función mensajeCielo()
Cuando se llame a la función mensajeCielo(), el siguiente código debe correr:
alert("El cielo dice: Se espera un dia soleado")
*/


function mensajeCielo(){
    alert("El cielo dice: se espera un dia soleado")   
}

/*
Ejercicio 4.
Agrega un eventListener al elemento con clase .sky
Pista: utiliza la variable sky que creaste anteriormente
Cuando un usuario de click sobre el elemento sky, se debe 
llamar a la función mensajeCielo que creaste anteriormenteå
*/

sky.addEventListener("click", mensajeCielo)