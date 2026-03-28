let username = "";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let cedula = "33651234";
let arregloAhorcado = [
    "escritorio", "computadora", "biblioteca", "estudiante", "diccionario", "universo", "galaxia", "planeta", "estrella", "cientifico",
    "biologia", "quimica", "historia", "geografia", "matematica", "literatura", "gramatica", "arquitecto", "ingeniero", "medicina",
    "hospital", "farmacia", "elefante", "jirafa", "cocodrilo", "ballena", "mariposa", "hormiga", "avestruz", "invierno",
    "primavera", "atardecer", "amanecer", "tormenta", "relampago", "terremoto", "volcanes", "oceanos", "desierto", "aventura",
    "pelicula", "guitarra", "orquesta", "concierto", "escultor", "pintura", "acuarela", "telefono", "internet", "teclado",
    "pantalla", "mensaje", "whatsapp", "programa", "algoritmo", "servidor", "proyectos", "reunion", "empresa", "negocio",
    "finanzas", "economia", "politica", "derecho", "justicia", "libertad", "sociedad", "cultura", "tradicion", "familia",
    "hermanos", "sobrino", "abuelos", "vacacion", "viajeros", "maletas", "cruceros", "deportes", "estadios", "atletismo",
    "natacion", "ciclismo", "gimnasia", "esfuerzo", "victoria", "derrota", "campeon", "entrenar", "bicicleta", "automovil",
    "semaforo", "carretera", "gasolina", "mecanico", "alimento", "desayuno", "almuerzo", "merienda", "cocinar", "parque"
];
let palabraSecreta;
let opcion = "";
let palabrasUsadas = [];
let vidas = 3;
let victorias = 0;
let derrotas = 0;
let cantidadLetras;
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}
startGame();
async function startGame(){
    username = await getUserInput("Cual es tu nombre?");
    do {
        console.log("Bienvenido al juego del ahorcado", username);
        console.log("Para empezar a jugar por favor coloque el numero 1");
        console.log("para salir de programa coloque la cedula del autor:", cedula);
        console.log("Buena suerte");
        opcion = await getUserInput("Seleccione su opcion");
        if (opcion === cedula) break;
        switch (opcion) {
            case "1":
                if (palabrasUsadas.length === arregloAhorcado.length) {
                    console.log("Ya se han usado todas las palabras, por favor cierre el juego... Gracias por jugar");
                    opcion = cedula;
                    break;
                } else {
                    do {
                        palabraSecreta = arregloAhorcado[Math.floor(Math.random() * arregloAhorcado.length)].toLowerCase();
                    } while (palabrasUsadas.includes(palabraSecreta));
                    palabrasUsadas.push(palabraSecreta); 
                    cantidadLetras = palabraSecreta.length; 
                    vidas = 3; 
                    let letrasUsadas = []; 
                    let progreso = Array(cantidadLetras).fill("_"); 
                    while (vidas > 0 && progreso.includes("_")) {
                        console.log("\n====================================="); 
                        console.log("Palabra: " + progreso.join(" ") + " (" + cantidadLetras + " letras)"); 
                        console.log(""); 
                        console.log("Vidas: " + vidas + " | Letras usadas: " + letrasUsadas.join(",")); 
                        console.log("Victorias: " + victorias + " | Derrotas: " + derrotas); 
                        let entrada = await getUserInput("Ingresa una letra:"); 
                        if (entrada === cedula) { 
                            opcion = cedula; 
                            break; 
                        }
                        let letra = entrada.toLowerCase(); 
                        if (letra.length !== 1 || !/[a-z]/.test(letra) || letra === "ñ") {
                            console.log("ERROR: Ingresa solo una letra válida (a-z, sin ñ)."); 
                            continue; 
                        }
                        if (letrasUsadas.includes(letra)) { 
                            console.log("Ya utilizaste la letra: " + letra);
                            continue;
                        }
                        letrasUsadas.push(letra);    
                        if (palabraSecreta.includes(letra)) { 
                            console.log("¡Letra correcta!"); 
                            for (let i = 0; i < palabraSecreta.length; i++) { 
                                if (palabraSecreta[i] === letra) progreso[i] = letra;
                            }
                        } else { 
                            console.log("Letra incorrecta."); 
                            vidas--; 
                        }
                        await getUserInput("Presiona Enter para continuar..."); 
                    }
                    if (opcion === cedula) break; 
                    if (!progreso.includes("_")) { 
                        console.log("\n¡Felicidades " + username + "! Ganaste. La palabra era: " + palabraSecreta); 
                        victorias++; 
                    } else { 
                        console.log("\nPerdiste todas tus vidas. La palabra era: " + palabraSecreta); 
                        derrotas++; 
                    }
                    await getUserInput("Presiona Enter para volver al menú..."); 
                    break; 
                } 
            default: 
                if (opcion !== cedula) console.log("Opción no válida."); 
                break; 
        }
    } while (opcion !== cedula);   
    return rl.close(); 
}
console.log("Gracias por jugar, Saliendo del programa......");