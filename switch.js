/**sisntaxis */
/*switch(expresion logica){
    case valor1:
        //que hacer si se cuumple 
        break;
    case valor2:
        break;
        default:
         // por defecto se ejecuta un codigo si no coincide con ningun valor 
}*/

let diasemana= "Enero";

switch(diasemana){
    case "Lunes":
        console.log("es el primer dia de la semana");
        break;
    case "Martes":
        console.log("es el segundo dia de la semana");
        break;   
    case "Miercoles":
        console.log("es el tercer dia de la semana");
        break;
    case "Jueves":
        console.log("vamos a mitad de la semana");
        break;
    case "Viernes":
        console.log("ya por fin el mejor dia de la semana");
        break;
    case "Sabado":
        console.log("descanso de la semana");
        break;
    case "Domingo":
        console.log("finalizando la semana");
        break;
        default:
            console.log("Este no es un dia de la semana que yo conozca");          
}
