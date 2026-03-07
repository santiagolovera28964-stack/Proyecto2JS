// version 1.0.0
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}
// No borrar ni modificar las constantes y variables que ya están declaradas, ya que son necesarias para el funcionamiento del juego.
// Simplemente comenta las líneas indicadas más abajo una vez hagas las pruebas del funcionamiento del código inicial.
let username = "";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// ------------------- Ejemplo para pedir datos al usuario ----------------------

// Llama a la función getUserInput para obtener la entrada del usuario.
// De esta manera debes pedir datos al usuario durante el juego.
// Simplemente guardarás la respuesta en otra variable para el fin que corresponda.


// ------------------- Función para pedir datos al usuario ----------------------
// Esta función se encarga de obtener la entrada del usuario a través de la consola. 
// Toma una pregunta como argumento, la muestra al usuario y espera su respuesta. 
// Una vez que el usuario ingresa su respuesta, la función devuelve esa respuesta como una cadena de texto.

//-------------------- Fin del código Espacio Educa ----------------------

// Recuerda que debes seguir las instrucciones del proyecto para completar el juego.
// Y no borres el código que ya está escrito, ya que es necesario para el funcionamiento del juego.
// Solo comenta las líneas indicadas más arriba.

// Get ur coffee and Empieza a codear!!

// Declara las variables que necesitas para el juego antes de llamar a la función startGame.

// Luego llama a la función startGame para iniciar el juego.

startGame();
async function startGame(){
    username = await getUserInput("cual es tu nombre?");
    let listaNombres = [];
    console.log("inserte 3 nombres");
    for (let i = 0; i < 3; i++) {
        listaNombres.push(await getUserInput("Cual es tu nombre numero " + (i+1) + ":"));
    }
    console.log("hola "+ username+", los nombres agregados son: ")
    console.log(listaNombres);
    return rl.close(); // Linea que hace que el programa se cierre una vez termine el juego. No la borres ni comentes.
}
