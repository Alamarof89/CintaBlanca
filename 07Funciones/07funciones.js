// Funciones
// function suma; suma es el nombre de la funcion

/* function suma (a,b){

    console.log(a + b)
}
suma(5,6)
suma(6,6)
suma(10,10)
suma(5,suma(10,10))

function resta (a,b){
    
    return a - b

    console.log(a - b)
}
suma(5,6)
suma(6,6)
suma(10,10)
suma(5,suma(10,10)) */

/* function area (b,h){

    return b * h
    
    console.log(area(b,h))
}

area(15,16) */

/* const areaC = (a) =>{
    return a*a
}

console.log(areaC(5)) */


//Funcion para calcular el area de un triangulo 

let b = prompt('Ingresa la base')
let h = prompt('Ingresa la altura')

const areaT = () =>{
    return (b*h)/2
}

console.log('El area del traingulo es '  + areaT() +' cm2')