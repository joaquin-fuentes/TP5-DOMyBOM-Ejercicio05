/*
Realizar una web con un cronómetro, que tenga las opciones de iniciar, reiniciar (volver el cronómetro a 0) y pausar.
 */

// Se obtienen los elementos 
var cronometro = document.getElementById("cronometro");
let btnIniciar = document.getElementById("btnIniciar");
let btnPausar = document.getElementById("btnPausar");
let btnReiniciar = document.getElementById("btnReiniciar");

// Inicializa las variables
var horas = 0;
var minutos = 0;
var segundos = 0;
var detener;

// Función para añadir ceros a la izquierda en los valores de horas, minutos y segundos
function agregarCero(valor) {
    return valor < 10 ? "0" + valor : valor;
}

// Función para actualizar el cronómetro
function actualizarCronometro() {
    segundos++;
    if (segundos == 60) {
        minutos++;
        segundos = 0;
    }
    if (minutos == 60) {
        horas++;
        minutos = 0;
    }
    cronometro.textContent = agregarCero(horas) + ":" + agregarCero(minutos) + ":" + agregarCero(segundos);
    iniciar();
}

// Función para iniciar el cronómetro
function iniciar() {
    detener = setTimeout(actualizarCronometro, 1000);
    btnIniciar.disabled = true;
    btnPausar.disabled = false;
    btnReiniciar.disabled = false;
    btnIniciar.textContent = "Iniciar"
}

// Función para pausar el cronómetro
function pausar() {
    clearTimeout(detener);
    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnIniciar.textContent = "Continuar"
}

// Función para reiniciarear el cronómetro
function reiniciar() {
    clearTimeout(detener);
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometro.textContent = "00:00:00";
    btnIniciar.disabled = false;
    btnReiniciar.disabled = true;
    btnPausar.disabled = true;
    btnIniciar.textContent = "Iniciar"
}