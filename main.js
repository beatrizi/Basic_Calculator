/*
*document es generico pero nos permite filtras por id, tags, classes
identificador id= coge un unico elemento  
        ejm   document.getElementById('previous-value')  
por clases css ClassName= si imprimimos clg devuelve un array de todos los que son esa clase.
por ByTagName
por ByName, multiples elementos con ese nombre
!por selecctores de css que puede ser id, clase, tags con querrySelector or querrySelectorAll
*document.querySelector("li")   --> coge el valor de la primera que encuentre
*document.querySelectorAll("li")   --> nos devuelve todas las lista que pueda haber
*document.querySelectorAll(".class")   --> tas las clases que tengan ese nombre
*document.querySelector(".id")   --> devuelve el id indicado
*document.querySelector([data= year ])   --> por cualquier propiedad creado por nosotros

!Tipos de datos del DOM
hay NODOS: son objetos para js
    * propiedades:
                - parentElement
                -children
    * subclases:
                -document
                -element


*/
const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const buttonNumbers = document.querySelectorAll(".numbers");
const buttonsigns = document.querySelectorAll(".signs");


