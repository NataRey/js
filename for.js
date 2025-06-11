/**for (inicializacion; condicion; expresion de actualizacion){
 * codigo a ejecutar en cada iteracion 
}*/
/*
for (let i=10; i<=15; i++){
    console.log("esto es i: ", i);
}
*/
/**Recorrer un arreglo de nombres  */
 /*                   
const nombres = ["pepito", "juanito","maria","sofia", "ana"];

for (let a=0; a < nombres.length; a++){
    console.log("Hola, " +nombres[a]);
}*/

/** calificacion estudiantes 
 * 90-100 A
 * 80-89 B
 * 70-79 C
 * 60-69 D
 * MENOR A 60 F
 */
/*
const estudiantes = [
    {nombre: "pepito", calificacion: 92},
    {nombre: "juanito", calificacion: 78},
    {nombre: "maria", calificacion: 65},
    {nombre: "sofia", calificacion: 85},
    {nombre: "juanita", calificacion: 50},
];

for (let b=0; b<estudiantes.length; b++){
    const estudianteActual = estudiantes[b];

    let calificacionLetra = "";

    if(estudianteActual.calificacion >=90){
        calificacionLetra= "A";
    }else if (estudianteActual.calificacion >=80){
        calificacionLetra= "B";
    }else if (estudianteActual.calificacion >=70){
        calificacionLetra= "C";
    }else if (estudianteActual.calificacion >=60){
        calificacionLetra= "D";
    }else{
        calificacionLetra = "F"
    }

    console.log(`${estudianteActual.nombre} obtuvo una calificacion de: ${calificacionLetra}`);
    
}*/