// index
// do{
//     proceso
//     incremento 
// }while(condicion)

/* crear un array de objetos en donde pueda buscar la edad  de x persona y que cuando lo encuentre nos imprima el nombre a partir de los datos del array  si no encuentra nada que salga un mensaje por consola que diga que no encontro coincidencias  */


const personas = [
    {
        nombre:"Ana", apellido:"Perez",edad:15
    },
    {
        nombre:"Juan", apellido:"Lopez",edad:25
    },
    {
        nombre:"Paola", apellido:"Gutierrez",edad:30
    },
    {
        nombre:"Jose", apellido:"Gonzalez",edad:40
    },
    {
        nombre:"Diana", apellido:"Castro",edad:12
    },
]

let buscarEdad =12;
let encontrado = false;


let i =0;
do{
    let personaA = personas[i]
    if(personaA.edad === buscarEdad){
        console.log("el nombre que le pertenece es: "+ personaA.nombre , personaA.apellido);
        encontrado = true;
    }
i++;

}while(i < personas.length){
    
}

if(!encontrado){
    console.log("no se encontraron coicidencias");
}


    
