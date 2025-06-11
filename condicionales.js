/*estructura basica 

if (condicion){
    que hacer si se cumple 
}else {
    que hacer si se cumple el de lo contrario 
}

if (condicion){
    que hacer si se cumple 
}else if{
    que hacer si se cumple el otro if 
}

if (condicion){
    que hacer si se cumple 
}else if(nueva condicion){
    que hacer si se cumple el otro if 
}else{
    finalizar o que hacer si es de lo contrario 
}*/

let edad = 19;
let nacio= 2005;
if (edad = 18 && nacio == 2005 ){
    console.log("usted es mayor de edad y nacio en el 2005");
}else if (edad < 18 ){
    console.log("usted es menor de edad ");
}else if (edad > 18 ){
    console.log("usted es mayor de edad");
}else{
    console.log("ingrese un dato valido");
}


let usuarioActivo = false;
let rolUsuario = "pepito";


if (usuarioActivo){
    if(rolUsuario === "admin"){
        console.log("Tiene acceso a todo el sistema");
    }else if(rolUsuario === "user"){
        console.log("Tiene acceso limitado al sistema");
    }else{
        console.log("Usuario no creado comuniquese con admin del sistema")
    }
}else{
    console.log("el usuario no esta activo");
}

