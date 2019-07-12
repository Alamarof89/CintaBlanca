
//Esta es una forma de hacer el ciclo  declarando la variable afuera
/* let i = 0

for(i; i<=100; i = i+1 ){

    console.log(i)
} */


//Este es codigo sin declarar la variable 
/* let i = 0

for(i = 3; i<=500; i = i+9 ){

    console.log(i)
} */


//Este codigo es para que te de un cuadro de dialogo y se determine la secuencia
/* let ingresa = prompt('secuencia')

let num = Number(ingresa)


for(let i = 0; i<=100; i = i + num ){

    console.log(i)
} */


//Este codigo combina for con if y hace la secuencia de uno en uno y dice si es par o impar
/* for(let i = 0; i<=100; i = i + 1 ){

let resultado = i%2

    if(resultado === 0){

        console.log(i + 'es par')
        
    }

    else{

        console.log(i + 'es inpar')
    }
    
} */

//Este codigo es para decir buz o gis si es divisible entre 5 o 3 
/* for(let i = 0; i<=100; i = i + 1 ){

    let resultado0 = i%5 && i%3
    
        if(resultado0 === 0){
    
            console.log(i + 'FIZZ BUZZ')
        }

        else{
            let resultado1 = i%5
    
        if(resultado1 === 0){
    
            console.log(i + 'BUZZ')
            
        }
    
        else{
    
            let resultado2 = i%3
            
            if(resultado2 === 0){
    
                console.log(i + 'FIZZ')
                
            }
        }
    
            
        }
        
    }
 */


 /* let array = ["a","b","c","d","e","f","g","h","i","j"]

//console.log(array.length) este solo fue de prueba

 for(let i = 0 ; i < array.length; i++){

    console.log(array[i])
  *//* } */
  
  //Hacer las tablas de multiplicacion del 1 al 10
  /* let i = 0
  
  for(let i = 0; i<=10; i++ ){
      for(let e = 0; e<=10; e++ ){

    console.log(i + " x "+ e + " = " + i * e)
    }
  } */


  // Calcular el factorial de un numero

  /* let num = 1
  for(let i = 1; i<=6; i++){

    console.log(num = num * i)
  } */