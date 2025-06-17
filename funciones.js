// // todo Funciones basicas

// // reutilizar 

// console.log("Hola");
// let a = 5; 
// let b = 10; 
// console.log(a+b);

// function saludar(nombre){
//     console.log("Hola " + nombre );
// }

// saludar("Tobias");
// saludar("Nicolas");

// function suma(num1, num2){
//     return num1+num2;
// }
// let resultado = suma(5,25);
// console.log(resultado);

// // todo Hoisting en funciones declaradas 

// // las puedo llamar antes de indicar que es lo que va a hacer 

// hoisting();
// function hoisting(){
//     console.log("Hola soy una funcion que se llamo antes");
// }

// console.log(multiplicar(5,3,9));

// function multiplicar(num1,num2, num3){
//     return num1*num2*num3
// }

// // todo Funciones como expresiones (Function Expresion)

// const miFunncionExp = function(mensaje){
//     console.log("Mensaje desde la expresion" + mensaje);
// };
// miFunncionExp(" Soy una expresion");

// // todo funciones nombradas en Expresiones 

// const factorial = function calcularFactorial(n){
//     console.log(`> Entrando a calcular con n = ${n}`);
//     if(n === 0 || n === 1){
//         console.log(`> Caso base alcanzado n es ${n}`);
//         return 1;
//     }
//     //return n * calcularFactorial(n - 1);
//     // calculara el valor de n-1 
// const siguienteNum = n-1;
// console.log(`> n es ${n}, nesecitamos calcular factorial(${siguienteNum})`);

// // llamada recursiva 
// const resultadoRecursivo = calcularFactorial(siguienteNum);
// // cuando la llamada recursiva regresa, mostramos lo que estamos multiplicando 
// console.log(`> factorial (${siguienteNum}) regreso ${resultadoRecursivo}`);
// const resultadoFinal = n * resultadoRecursivo;
// console.log(`> Calculando n: ${n} * ${resultadoRecursivo} = ${resultadoFinal}`);
//  return resultadoFinal; 
// }
//  console.log(factorial(10));

// // todo Callbacks

// console.log("Inicio de la espera ");
// setTimeout(function() {
//     console.log("Han pasado 3 segundos");
// }, 1000);// 3000milisegundos  es igual a 3 segundos
// console.log("Codigo desde del setTimeout (SE EJECUTARIA DE INMEDIATO)");

// (function(){
//     let num = 3;
//     console.log(num);
// })();


// todo   arrow funtion o funcion flecha basica 

const hola = ()=>{
    console.log("Hola desde la funcion flecha");
}
hola();


const multiplicar = (a, b)=>{
    return a*b;
}
 console.log(multiplicar(5,4));

// Si un arrow solo tiene  una expresion en su cuerpo y deseo que la expresion sea el valor de retorno  puedo omitir las llaves y la palabra clave return

const dividir = (c,d)=> c/d;
console.log(dividir(20,5)); 

const esPar = numero => numero % 2 === 0;
console.log(esPar(9));
console.log(esPar(14));

// todo   El Manejo del this en arrow funtion 

function Persona(nombre){
    this.nombre = nombre;
    this.saludar = function(){
        console.log("Hola soy "+ this.nombre);// this se refiere a la instancia de esa persona
    };

    this.saludarDespuesDeDosSegundos = function(){
        setTimeout(function(){
            console.log("Yo soy "+ this.nombre);
            console.log("Quien soy aqui "+ this);
        }, 2000);
        
    };
}
const p1 = new Persona("Carlos");
p1.saludar();
p1.saludarDespuesDeDosSegundos();


// solucionar ese this en los callback 

function PersonaMejorada(nombre){
    this.nombre = nombre;
    this.saludarDespuesDeTresSegundo = function(){
        setTimeout(()=>{
            console.log("Yo soy "+ this.nombre + " con arrow funtion ");
        }, 3000);  
    };
}

const p2 = new PersonaMejorada("Brayan");
p2.saludarDespuesDeTresSegundo();


















