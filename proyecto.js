// version 1.0.0
// No borrar ni modificar las constantes y variables que ya están declaradas, ya que son necesarias para el funcionamiento del juego.
// Simplemente comenta las líneas indicadas más abajo una vez hagas las pruebas del funcionamiento del código inicial.

let username = "";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cedula = "33651234"
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
let vidas = 6;
// ------------------- Ejemplo para pedir datos al usuario ----------------------

// Llama a la función getUserInput para obtener la entrada del usuario.
// De esta manera debes pedir datos al usuario durante el juego.
// Simplemente guardarás la respuesta en otra variable para el fin que corresponda.

// ------------------- Función para pedir datos al usuario ----------------------
// Esta función se encarga de obtener la entrada del usuario a través de la consola. 
// Toma una pregunta como argumento, la muestra al usuario y espera su respuesta. 
// Una vez que el usuario ingresa su respuesta, la función devuelve esa respuesta como una cadena de texto.
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}
//-------------------- Fin del código Espacio Educa ----------------------

// Recuerda que debes seguir las instrucciones del proyecto para completar el juego.
// Y no borres el código que ya está escrito, ya que es necesario para el funcionamiento del juego.
// Solo comenta las líneas indicadas más arriba.

// Get ur coffee and Empieza a codear!!

// Declara las variables que necesitas para el juego antes de llamar a la función startGame.

// Luego llama a la función startGame para iniciar el juego.

startGame();
async function startGame(){
    username = await getUserInput("What is your name?"); // COMENTA esta linea cuando empieces a programar.
    do {
        console.log("Bienvenido al juego del ahorcado",username);
        console.log("Para empezar a jugar por favor coloque el numero 1");
        console.log("para salir de programa coloque la cedula del autor:",cedula);
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
                    console.log(palabraSecreta);
                    palabrasUsadas.push(palabraSecreta);
                    console.log(palabrasUsadas)
                
                }
                
            break;
            
            default:
            console.log("Por favor escoja una opcion valida");    
            break;
        }
    } while (opcion !== cedula);
    // Aquí va la lógica principal del juego.
    return rl.close(); // Linea que hace que el programa se cierre una vez termine el juego. No la borres ni comentes.
}