// function saludar(){
// let usuario = prompt("Ingrese su usuario");
// let edad = prompt("Ingrese su edad");
//     console.log("Hola "+usuario)
//     console.log("Usted tiene: "+edad+" años");
// }

// saludar();

//Ejercicio: función de suma


// function suma(){
//     let numero1 = parseInt(prompt("Ingrese un número"));
//     let numero2 = parseInt(prompt("Ingrese otro número"));
//     console.log( numero1 + numero2 );
// }

// suma()


// let usuario = prompt("Ingrese su usuario");
// let edad = prompt("Ingrese su edad");


// function saludar(nombreUsuario , usuarioEdad)
// {

//     console.log("Hola "+nombreUsuario)
//     console.log("Usted tiene: "+usuarioEdad+" años");
// }

// saludar(usuario, edad);

//Ejercicio: Nos pasa la edad y devolvemos año de nacimiento

// let edad = parseInt(prompt("Ingrese su edad"));


// function anioNacimiento (edadIngresada, anioActual)
// {

//     console.log("Naciste en " +(anioActual-edadIngresada))
// }
// new Date(currentYear())
// anioNacimiento (edad, Date);

//Ejercicio: función validar que reciba un usuario y comprobar que no sea un string vacío.

// let usuario = prompt("Ingrese su usuario");
// let edad = parseInt(prompt("Ingrese su edad"));

// function validarNombre(nombre){
//     if (nombre == ""){
//         console.log("Es un string vacío")
//     }else {
//         console.log("No es un string vacío")
//     }
// }

// function validarEdad(edadUsuario){
//     if (edadUsuario >=18){
//         console.log("Es mayor de edad")
//     }else {
//         console.log("Es menor de edad")
//     }
// }

// validarNombre(usuario)
// validarEdad(edad)

//Crear un programa que calcule los descuentos de un precio

let precio = parseInt(prompt("Ingrese un precio"));
let dia = prompt("ingrese día de la semana");
let descuento = 0

function precioFinal(unPrecio,diaSemana){
 if (diaSemana == "lunes"){descuento = +0.05}

 else if (diaSemana == "miercoles"){
    descuento = +0.15
 } else if (diaSemana == "sabado"){descuento = +0.20
 }
    return unPrecio*(1-(descuento))
}

console.log("El precio sin iva es $"+precioFinal(precio,dia));

function IVA (precio){
    return precio * 1.21
}

console.log("El precio con iva es $"+IVA(precioFinal(precio,dia)))