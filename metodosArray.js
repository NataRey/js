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
// let miCanasta =["Manzana","Pera", "Uva","banana","kiwi"];
// console.log(miCanasta);
// let frutasQuitadas = miCanasta.splice(2);
// console.log(frutasQuitadas);
// //1.2 cuantas quiero quitar desde esta posicion 
// miCanasta =["Manzana","Pera", "Uva","banana","kiwi"];
// console.log(miCanasta);
// frutasQuitadas = miCanasta.splice(1,3);
// console.log(frutasQuitadas);


// //! 2 añadir
// let miCanasta2 =["Manzana","Pera", "Uva","banana","kiwi"];
// //2.1 desde donde quiero empezar a anadir ()
// //2.2 CERO(0) la cantidad a quitar y que quiero anadir 
// //2.3 Las frutas nuevas que quiero anadir
// console.log(miCanasta2);
// miCanasta2.splice(2,0,"fresa","mango");
// console.log(miCanasta2);

// //!quitar y agregar al mismo tiempo (reemplzar)
// let miCanasta3 =["Manzana","Pera","fresa","mango", "Uva","banana","kiwi"];
// //3.1 desde donde quiero empezar 
// //3.2 cuantas frutas quiero quitar quitar desde la posicion 
// //3.3 las furtas nuevas que quieres reemplazar 
// let frutasReemplazadas = miCanasta3.splice(3,1,"lulo","papaya","melon");
// console.log(miCanasta3);

// //sort() organiza los elementos de un arreglo alfabeticamente 
// let listaAlumnos = ["Victor", "Luisa","Sebastian","Horacio"];
// console.log(listaAlumnos);
// listaAlumnos.sort();
// console.log(listaAlumnos
// );

//  listaDeNumeros =[10,2,25,5,1];
//  console.log(listaDeNumeros);
// listaDeNumeros.sort();
//  console.log(listaDeNumeros);

// //que la maquina entendio usando sort con numeros 
// //"1" viene antes que el "10"
// //10 vienes antes de 2 
//  //"2" viene antes que el "25"
// // viene el 5 al final

// listaDeNumeros.sort(function(a,b){
//     return a - b; // si a es mas peque;o que b da un negativo // le decimos a la maquina que ponga a antes que b 
//     //1-10=-9
//     //1 10
//     //10-2=8
//     //2 10
//     //1 2 10
//     //10-25= -15
//     //10 25
//     //1 2 10 25
// });

// console.log(listaDeNumeros);
// let listaNumeros =[10,2,25,5,1];
// listaNumeros.sort(function(a,b){
//     return b - a;//si b es mas grande que a el resultado es positivo //le decimos a la maquina que ponga b antes que a 
// });
// console.log(listaNumeros);

// // reverse()//invierte el orden de los elementos de un array
// let listaNumeros2 =[100,99,98];
// listaNumeros2.reverse();// invertir los numeros
// console.log(listaNumeros2);

// //foreach() ejecuta una funcion para cada elemento del array 
// let tareasDelDia =["sacar la basura", "tender la cama", "lavar los platos"];

// tareasDelDia.forEach(function(x){
//     console.log("he revisado la tarea ", x);
// });

// //map() crea un array con los resultados de lo que le dije que hiciera en dicha funcion y mantiene el array original 

// let puntuacionesExamen = [80,45,90,60,70];

// console.log("puntuaciones originales ", puntuacionesExamen);

// let mensajeDeAprobacion = puntuacionesExamen.map(function(puntacion){
//     if(puntacion >=60){
//         return "Aprobado con "+ puntacion;
//     }else{
//         return "Reprobado con "+ puntacion;
//     }
// });

// console.log(mensajeDeAprobacion);
// console.log(puntuacionesExamen);

// //filter() crea un array con todos los elementos que pasan la prueba impletada por la funcion que le indique 

// let rangosDeEmpleado=[
//     {
//     nombre:"Andrea", rango: "admin"        
// },
// {
//     nombre:"Cristian", rango: "user"
// },
// {
//     nombre:"Diana", rango: "admin"
// },
// {
//     nombre:"Horacio", rango: "user"
// },
// {
//     nombre:"Jaderson", rango: "admin"
// }];

// let administradores = rangosDeEmpleado.filter(function(rol){
//     return rol.rango === "admin";
// });

// console.log("los administradores son: ");
// console.log(administradores);


// //reduce() Aplica un afuncion a un acumulador y al valor del array (de izq a der) para reducirlo a un unico valor 

// let palabras =["Hola", "mundo","desde","javaScript"];
// console.log("Palabras separadas: " , palabras);
// let fraseCompleta = palabras.reduce(function(fraseConstruida,palabraActual){
//     return fraseConstruida +" "+ palabraActual;
// });
// console.log("la frase commpleta es : ", fraseCompleta);


// let num2 =[ 100,75,120,90,50];

// console.log("puntuaciones de cada nivel ",num2);

// let Tpuntos = num2.reduce(function(acumulador, puntuacionActual){
//     console.log(`Sumando: ${acumulador} (lo que llevo) + ${puntuacionActual}(lo que acabo de encontrar)`);
//     return acumulador + puntuacionActual;
// },0);

// console.log(Tpuntos);

// //find() devuelve el valor del primer elemnto  que encuentre que cumpla con el parametro proporcionado. si no encuentra ninguno el devuelve un undefined

// let primerRangoEncontrado = rangosDeEmpleado.find(function(rol){
//     return rol.rango === "user";
// });

// console.log(" la primera persona con el rango: ", primerRangoEncontrado);


// findIndex() Devuelve el indice del primer elemento que encuentre que cumpla con la funcion de prueba 

// let misPeliculas = [
//     {nombre:"Harry Potter" , genero:"accion" },
//     {nombre:"Fast and furios" , genero:"accion" },
//     {nombre:"Forrest Gump" , genero: "accion"},
//     {nombre:"mision imposible" , genero: "accion"},
//     {nombre:"Lilo & Stitch", genero:"accion" },
//     {nombre:"El señor de los anillos"
//  , genero:"accion" }];

//  let indicePelicula =misPeliculas.findIndex(function(g){
//     return g.genero === "drama";
//  });

//  let primerGenero =  misPeliculas.find(function(g){
//     return g.genero === "drama";
//  });

//  let primerGenero2 =  misPeliculas.filter(function(g){
//     return g.genero === "accion";
//  });

//  console.log("La primera posicion del genero accion que encontre fue : ", indicePelicula);
//  console.log("la primer coincidencia con el genero accion le pertenece a ", primerGenero);
//  console.log("los de accion son: ");
// console.log(primerGenero2);

// //some() Comprobar  si al menos un elemento del array cumple con la condicion implementada por la funcion indicada 

// let algunElemento = misPeliculas.some(function(name){
//     return  name.nombre === "Lilo & Stitch"
// });

// console.log("existe alguna pelicula que se llame el señor de los anillos ? ", algunElemento );

// //every() Comprobar si todos los elementos del array cumplen con la condicion implementada por la funcion indicada

// let todasLasPeliculasSon = misPeliculas.every(function(g){
//     return g.genero === "accion";
// });

// console.log("Todas las peliculas son de accion?", todasLasPeliculasSon);

// // concat() se usar para unir dos o mas arrays. Este metodo no cambia los arrays existentes, mas bien devuelve uno nuevos con los valores nuevos
// let cajaVaciaDeJuguetes = [];
// let misJuguetesDeMisPrimos = ["carrito", "tren", "pelota"];
// let juguetesQueMeDieron = ["robot", "bici","piano"];
// let juguetesAdicionales = ["guitarra", "monopoly","catan"];

// let todosMisJuguetes = cajaVaciaDeJuguetes.concat(misJuguetesDeMisPrimos,juguetesQueMeDieron,juguetesAdicionales);
// console.log(todosMisJuguetes);

// slice() Devuelve una copia superficial de una porcion del array dentro de un nuevo array
// el primer numero es la posicion indice donde quiero empezar a cortar
// el segundo numero (opcional) la posicion indice antes de la cual quiero terminar de cortar 
//                      0           1           2           3          4       5        
let filaDeAmigos = ["valentina", "tobias", "sebastian", "samuel", "Nicolas","luisa"];
console.log(filaDeAmigos);

let losAmigosDelMedio = filaDeAmigos.slice(1,3);
console.log("Los amigos del medio son: " , losAmigosDelMedio);


































