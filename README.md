# Lab: Registrando Eventos

## Objetivos
- Utilizar `.addEventListener()` para agregar interactividad a una página web.

## Introducción
Hemos aprendido que a través del método `.addEventListener()`, podemos hacer que un elemento DOM escuche cuando succeda un evento específico y ejecute un bloque de código cuando se detecte el evento. Es hora de poner en práctica nuestros aprendizajes. 

## Instrucciones
Bifurca (fork) y clona (clone) este lab en tu entorno local. Navega a su directorio en la terminal, luego ejecuta el comando `code .` para abrir sus archivos en Visual Studio Code. 

1. Creaa una variable `bird` con el valor del elemento con clase `.bird`

2. Creaa una variable `sky` con el valor del elemento con clase `.sky`

3. Agrega un eventListener al elemento con clase `.bird` **Pista: utiliza la variable bird que creaste anteriormente.** Cuando un usuario de click sobre el elemento, debe correr una función con el código:

`alert("Bird dice: Me llamo Bird!")`

4. Crea la función `mensajeCielo()`. Cuando se llame a la función `mensajeCielo()`, el siguiente código debe correr:

`alert("El cielo dice: Se espera un dia soleado")`

5. Agrega un eventListener al elemento con clase `.sky`
**Pista: utiliza la variable `sky` que creaste anteriormente.** Cuando un usuario de click sobre el elemento `sky`, se debe llamar a la función `mensajeCielo` que creaste anteriormente.