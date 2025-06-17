const inputProducto = document.getElementById('nombreProducto');
const botonAgregar = document.getElementById('botonAgregar');
const listaProductos = document.getElementById('listaProductos');

botonAgregar.addEventListener('click', function(){
    const nombreDelProducto = inputProducto.value;

    if(nombreDelProducto === ''){
        alert("Por favor escribe el nombre del producto");
        return;
    }

    const nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = nombreDelProducto;

     const botonEliminar = document.createElement('button');
     botonEliminar.textContent= 'Eliminar';

     botonEliminar.addEventListener('click', function(){
        listaProductos.removeChild(nuevoElementoLista);
     });

     nuevoElementoLista.appendChild(botonEliminar);


     listaProductos.appendChild(nuevoElementoLista);
     inputProducto.value = '';

});