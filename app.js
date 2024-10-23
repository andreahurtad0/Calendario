const calendario = document.getElementById('calendario');
const mesesa = document.getElementById('mesesa');
const diasContainer = document.getElementById('dias');

let fechaActual = new Date();

function renderizarCalendario() {
    const ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
    const primerDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    const primerDiaIndice = primerDia.getDay(); // Obtener el día de la semana del primer día del mes
    const ultimoDiaIndice = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDay();
    const ultimoDiaMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
    const mesesArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const diasSemanaArray = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"]; // Orden dia de la semana calendarios

    mesesa.innerHTML = `${mesesArray[fechaActual.getMonth()]} ${fechaActual.getFullYear()}`;

    let dias = "";

    // Agregar días del mes anterior
    for(let x = primerDiaIndice; x > 0; x--){
        dias += `<div class="dia mesAnterior">${ultimoDiaMesAnterior - x + 1}</div>`;
    }

    // Agregar días del mes actual
    for(let i = 1; i <= ultimoDia; i++){
        if(i === new Date().getDate() && fechaActual.getMonth() === new Date().getMonth()){
            dias += `<div class="dia hoy">${i}</div>`;
        } else {
            dias += `<div class="dia">${i}</div>`;
        }
    }

    // Agregar días del mes siguiente
    for(let j = 1; j <= 6 - ultimoDiaIndice; j++){
        dias += `<div class="dia mesSiguiente">${j}</div>`;
    }

    diasContainer.innerHTML = dias;

    // Agregar nombres de los días de la semana
    const diasSemana = document.getElementById('dias-semana');
    let nombresDiasSemana = "";
    for(let i = 0; i < 7; i++) {
        nombresDiasSemana += `<div class="dia-semana">${diasSemanaArray[i]}</div>`;
    }
    diasSemana.innerHTML = nombresDiasSemana;
}

function mesAnterior() {
    fechaActual.setMonth(fechaActual.getMonth() - 1);
    renderizarCalendario();
}

function mesSiguiente() {
    fechaActual.setMonth(fechaActual.getMonth() + 1);
    renderizarCalendario();
}

renderizarCalendario();

