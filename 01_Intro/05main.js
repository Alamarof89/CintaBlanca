/* if(condicion){

    console.log(':D')
}

else{

    console.log(':C')

} */
/* 
if('computadora' === 'Computadora' ){

    console.log('Son identicos')
}

else{

    console.log('Algo anda mal') */

/* let edad = promp('Cual es tu edad')

number(edad)

If (edad>=18){

    console.log('Puedes entrar')
}

else{

    console.log("No puedes entrar")

} */


/* let edad = prompt('Ingresa tu edad')

Number(edad)

If (edad>=18){

    console.log('Puedes sacar tu licencia')
}

else if (edad===16){

    console.log("puedes sacar permiso")

}

else {

    console.log('No Puedes sacar tu licencia')

 *//* } */



//Codigo para determinar si un numero es par o no.

 /* let numero = prompt('ingresa un numero')

let resultado = numero%2

if (resultado===0){

    console.log('el numero' + numero+'es par')

}

else{

    console.log('el numero no es par')

}
 */


 let player1 = prompt('player1: Elige Piedra, Papel o Tijera')
 let player2 = prompt('player2: Elige Piedra, Papel o Tijera')

 if (player1 === player2){

    console.log('Es empate')
 } 

 else if(player1 === 'Piedra' && player2 === 'Tijera'){

    console.log('player1 WINS')
 }

 else if(player1 === 'Piedra' && player2 === 'Papel'){

    console.log('player2 WINS')

 }

 else if(player1 === 'Tijera' && player2 === 'Piedra'){

    console.log('player2 WINS')
 }

 else if(player1 === 'Papel' && player2 === 'Piedra'){

    console.log('player1 WINS')

 }

 else if(player1 === 'Tijera' && player2 === 'Papel'){

    console.log('player1 WINS')
 }

 else if(player1 === 'Papel' && player2 === 'Tijera'){

    console.log('player2 WINS')

 }

 else{

    console.log('Ingresaste un valor no valido')
 }