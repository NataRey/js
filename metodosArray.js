/*push()*agrega uno o mas elementos al final del arreglo */
/*let misJuguetes =["avion","tren","pelota"];
console.log(misJuguetes);
misJuguetes.push("carro","nave espacial");
console.log(misJuguetes);

/**pop() elimina el ultimo elemento del array */
/*let quitarUltimoJuguete= misJuguetes.pop();
console.log(misJuguetes);*/

/** unshift() agrega uno o mas elementos al inicio del arreglo*/
/*misJuguetes.unshift("nave espacial", "bate");
console.log(misJuguetes);

/**shift() elimina el primer elemento del array */
/*misJuguetes.shift();
console.log(misJuguetes);*/

// LIFO last in, first Out /*
// let miPiladeTareas= [];
// console.log("tu pila de tareas esta vacia");
// miPiladeTareas.push("Lavarme los dientes");
// console.log(miPiladeTareas);
// miPiladeTareas.push("asearme");
// console.log(miPiladeTareas);
// miPiladeTareas.push("vestirme");
// console.log(miPiladeTareas);
// miPiladeTareas.push("desayunar");
// console.log(miPiladeTareas);
// miPiladeTareas.push("revisar el whatsapp de la toxica");
// console.log(miPiladeTareas);

//  console.log("ahora voy realizando las treas de manera inversa" );

// let tareaRealizada1 = miPiladeTareas.pop();
// console.log(miPiladeTareas);
// let tareaRealizada2 = miPiladeTareas.pop();
// console.log(miPiladeTareas);
// let tareaRealizada3 = miPiladeTareas.pop();
// console.log(miPiladeTareas);
// let tareaRealizada4 = miPiladeTareas.pop();
// console.log(miPiladeTareas);
// let tareaRealizada5 = miPiladeTareas.pop();
// console.log(miPiladeTareas);

//FIFO first in, first Out 

// let colaDeTareas =[];
// console.log("tu cola de tareas esta vacia");
// colaDeTareas.push("Lavarme los dientes");
// console.log(colaDeTareas);
// colaDeTareas.push("asearme");
// console.log(colaDeTareas);
// colaDeTareas.push("vestirme");
// console.log(colaDeTareas);
// colaDeTareas.push("desayunar");
// console.log(colaDeTareas);
// colaDeTareas.push("revisar el whatsapp de la toxica");
// console.log(colaDeTareas);

// let tareaR1 = colaDeTareas.shift();
// console.log("mi primera tarea fue", tareaR1);
// console.log(colaDeTareas);
// let tareaR2 = colaDeTareas.shift();
// console.log("mi segunda tarea fue", tareaR2);
// console.log(colaDeTareas);
// let tareaR3 = colaDeTareas.shift();
// console.log("mi tercera tarea fue", tareaR3);
// console.log(colaDeTareas);
// let tareaR4 = colaDeTareas.shift();
// console.log("mi cuarta tarea fue", tareaR4);
// console.log(colaDeTareas);
// let tareaR5 = colaDeTareas.shift();
// console.log("mi ultima tarea fue", tareaR5);
// console.log(colaDeTareas);

//splice()// me permite cambiar el contenido de un array eliminando elementos existenbtes y/o agregando elementos en su lugar 


// tenemos tres opciones para usar splice 
//! 1 quitar 
// 1.1 desde donde quieres empezar a quitar (posicion inicial)
let miCanasta =["Manzana","Pera", "Uva","banana","kiwi"];
console.log(miCanasta);
let frutasQuitadas = miCanasta.splice(2);
console.log(frutasQuitadas);
//1.2 cuantas quiero quitar desde esta posicion 
miCanasta =["Manzana","Pera", "Uva","banana","kiwi"];
console.log(miCanasta);
frutasQuitadas = miCanasta.splice(1,3);
console.log(frutasQuitadas);


//! 2 añadir
let miCanasta2 =["Manzana","Pera", "Uva","banana","kiwi"];
//2.1 desde donde quiero empezar a anadir ()
//2.2 CERO(0) la cantidad a quitar y que quiero anadir 
//2.3 Las frutas nuevas que quiero anadir
console.log(miCanasta2);
miCanasta2.splice(2,0,"fresa","mango");
console.log(miCanasta2);

//!quitar y agregar al mismo tiempo (reemplzar)
let miCanasta3 =["Manzana","Pera","fresa","mango", "Uva","banana","kiwi"];
//3.1 desde donde quiero empezar 
//3.2 cuantas frutas quiero quitar quitar desde la posicion 
//3.3 las furtas nuevas que quieres reemplazar 
let frutasReemplazadas = miCanasta3.splice(3,1,"lulo","papaya","melon");
console.log(miCanasta3);













