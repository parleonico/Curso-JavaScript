// Iteración FOR

// for(let i=0; i<10; i = i+ 1){
//     console.log(i)
// }

// for (let i= 0; i> 10; i= i + 1){

//     let alumnos = prompt("Ingrese su nombre");
//     console.log("El alumno número "+i+" es "+alumnos);
// }

// Ejercicio
// for (let i= 0; i< 3; i= i + 1){

//     let alumnos = prompt("Ingrese su nombre");
//     let edad = prompt("Ingrese su edad");
//     if(parseInt(edad) >=18){
//         console.log("El alumno "+alumnos+" ingresó a la escuela nocturna")
    
//     }else{
//         console.log("El alumno "+alumnos+" ingresó a la escuela diurna")
//     };
// }

// Ejercicio: pedir usuario y contraseña. Tres intentos fallidos, se corta

// let user1 = "Pedro"
// let pass1 = 1234
// let error = 0

// for (let i=0; i<10; i = i+1){
//     let user = prompt("ingrese su usuario");
//     let pass = parseInt(prompt("ingrese su contraseña"));
//     if(user==user1 && pass==pass1){
//         console.log="Bienvenido";
//         break;
//     }
//     else{
//         console.log="Ingreso incorrecto";
//         error = error + 1;
//         if (error == 2){
//             console.log="Chau tarjeta";
//             break;
//         }

    
//     }
// }

// let user = prompt("Ingrese su usuario o ESC para salir")


// while (user != "ESC"){
//     console.log("Hola "+user);
// prompt ("Ingrese su usuario o ESC para salir")    
// }

// Ejercicio
// Crear un programa para la votación de un club de Barrio
//No se sabe cuantas personas van a votar
// se puede votar por el partido a y b

let partidoA = 0
let partidoB = 0


do
{
    voto = prompt("Partido A o B. Para terminar, escriba ESC")
    if(voto == "A"){
    partidoA = partidoA + 1
    } else if(voto == "B"){
    partidoB = partidoB + 1
    }
   }   while(voto != "ESC")


console.log("El partido A tuvo "+partidoA);
console.log("El partido B tuvo "+partidoB);
if (partidoA > partidoB) {
    console.log("Ganó el partido A")
} else if (partidoA < partidoB){
    console.log("Ganó el partido B")
} else if (partidoA == partidoB)
{
    console.log("Empate")
}