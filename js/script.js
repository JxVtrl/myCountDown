var targetDay = ''

const anosHTML = document.getElementById('anos')
const mesesHTML = document.getElementById('meses')
const diasHTML = document.getElementById('dias')
const horasHTML = document.getElementById('horas')
const minutosHTML = document.getElementById('minutos')
const segundosHTML = document.getElementById('segundos')
var anos = '00'
var meses = '00'
var dias = '00'
var horas = '00'
var minutos = '00'
var segundos = '00'
var total = ''

// Funcao de INICIO
function inicio(){
    setInterval(Countdown, 1000)
}

// Funcao de PARADA
function parar(){
    clearInterval()
}

// O TEMPO VAI PASSANDO...
function Countdown(){
    // Funcao que calcula o tempo
    tempoPassa()

    if(total < 0) parar()
    else{
        // Calcula os dias do mês p saber os dias restantes no mes
        calculaMes(Math.floor(total / 2592000) % 12, Math.floor(total / 31536000))
        
        // Calcula o tempo
        anos = Math.floor(total / 31536000)
        meses = Math.floor(total / 2592000) % 12
        dias = (Math.floor(total / 86400) % totalMes) + 1
        horas = Math.floor(total / 3600) % 24
        minutos = Math.floor(total / 60) % 60
        segundos = Math.floor(total % 60)

        // Formata e poe no HTML
        PoeNaTela(anos, meses, dias, horas, minutos, segundos)
    }
}

// Valida Tempo
function tempoPassa(){
    // PEGA AS HORAS
    const dataAtual = new Date()
    const dataAlvo = new Date(targetDay)

    // FAZ A CONTA TOTAL DE MS -> SEC
    total = Math.floor((dataAlvo - dataAtual) / 1000)

    return total
}

// Valida mês
var totalMes = null
function calculaMes(meses, anos){
    
    if(meses == 1 || meses == 3 || meses == 5 || meses == 7 || meses == 8 || meses == 10 || meses == 12){
        totalMes = 31
    }
    else{
        if(anos % 4 == 0){
            if(meses == 2){
                totalMes = 29
            }
            else{
                totalMes = 30
            }
        }
        else{
            if(meses == 2){
                totalMes = 28
            }
            else{
                totalMes = 30
            }
        }
    }
}

// Submit Form Inicio
const submittedData = document.getElementById('tipo-data');
const form = document.getElementById('entrada');
form.addEventListener('submit', (event) =>{ 
    event.preventDefault()
    let data = submittedData.value
    if(data === 'data-user'){
        modalContainer.classList.add('show')
        modalContainer.classList.remove('hide')
    }
    else{
        BackGround(data)
    }
})

// Muda o background e a data pre-setada
var wallpaper = document.body.style.backgroundImage;
function BackGround(dataPre){
    let anoAtual = new Date().getFullYear()

    let checkTempo = tempoPassa()
    if(checkTempo < 0){ 
        ++anoAtual
    }

    let preSet = Number(dataPre)

    switch (preSet) {
        case 1:
            wallpaper = "url('./img/ano-novo.jpg')";
            targetDay = `1 Jan ${anoAtual}`
            inicio(targetDay)
        break;
            
        case 2:
            wallpaper = "url('./img/carnaval.jpg')";
            targetDay = `1 Feb ${anoAtual}`
            inicio(targetDay)
        break;
                
        case 3:
            wallpaper = "url('./img/sexta-feira-santa.jpg')";
            targetDay = `2 Apr ${anoAtual}`
            inicio(targetDay)
        break;
                    
        case 4:
            wallpaper = "url('./img/tiradentes.jpg')";
            targetDay = `21 Apr ${anoAtual}`
            inicio(targetDay)
        break;
                        
        case 5:
            wallpaper = "url('./img/dia-do-trabalho.jpg')";
            targetDay = `1 May ${anoAtual}`
            inicio(targetDay)
        break;
                            
        case 6:
            wallpaper = "url('./img/independencia-do-brasil.jpg')";
            targetDay = `7 Sep ${anoAtual}`
            inicio(targetDay)
        break;

        case 7:
            wallpaper = "url('./img/nossa-senhora-aparecida.jpg')";
            targetDay = `12 Oct ${anoAtual}`
            inicio(targetDay)
        break;

        case 8:
            wallpaper = "url('./img/finados.jpg')";
            targetDay = `2 Nov ${anoAtual}`
            inicio(targetDay)
        break;

        case 9:
            wallpaper = "url('./img/proclamacao-da-republica.jpg')";
            targetDay = `15 Nov ${anoAtual}`
            inicio(targetDay)
        break;
            
        case 10:
            wallpaper = "url('./img/natal.jpg')";
            targetDay = `25 Dec ${anoAtual}`
            inicio(targetDay)
        break;           
    }
}

// Modal Box Enviar Function
const btnEnviar = document.getElementById('btn-input')
btnEnviar.addEventListener('click', (event) => {
    event.preventDefault()

    let diaModal = document.getElementById('input-dia').value
    let mesModal = document.getElementById('input-mes').value
    let anoModal = document.getElementById('input-ano').value
    
        targetDay = `${diaModal} ${mesModal} ${anoModal}`
    
    modalContainer.classList.remove('show')
    modalContainer.classList.add('hide')
    
    inicio(targetDay)
})

// Modal Box Close Function
const btnX = document.getElementsByClassName('close')[0];
const modalContainer = document.getElementsByClassName('modal-container')[0];
btnX.addEventListener('click', () => {
    if(modalContainer.classList.contains('show')){
        modalContainer.classList.add('hide');
        modalContainer.classList.remove('show');
    }
     
})

// Formatando
function timeFormat(time){
    return time < 10 && time > 0 ? '0' + time : time
}

// Imprimindo na tela
function PoeNaTela(anos, meses, dias, horas, minutos, segundos){
    if(isNaN(anosHTML) && isNaN(mesesHTML) && isNaN(diasHTML) && isNaN(horasHTML) && isNaN(minutosHTML) && isNaN(segundosHTML)){
        anosHTML.innerHTML = timeFormat(anos)
        mesesHTML.innerHTML = timeFormat(meses)
        diasHTML.innerHTML = timeFormat(dias)
        horasHTML.innerHTML = timeFormat(horas)
        minutosHTML.innerHTML = timeFormat(minutos)
        segundosHTML.innerHTML = timeFormat(segundos)
    }
    else{
        anosHTML.innerHTML = '00'
        mesesHTML.innerHTML = '00'
        diasHTML.innerHTML = '00'
        horasHTML.innerHTML = '00'
        minutosHTML.innerHTML = '00'
        segundosHTML.innerHTML = '00'
    }
}
