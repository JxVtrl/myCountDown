var submit = document.getElementById('tipo-data');
const ano = new Date().getFullYear();


function changeBackgroundImage(url) {

}

function BackGround(valor){
    switch (valor) {
        case '1 Jan':
            document.body.style.backgroundImage = "url('./img/ano-novo.jpg')";
            break;
        case '1 Feb':
            document.body.style.backgroundImage = "";
            break;
        case '15 Apr':
            document.body.style.backgroundImage = "";
            break;
        case '21 Apr':
            document.body.style.backgroundImage = "";
            break;
        case '1 May':
            document.body.style.backgroundImage = "";
            break;
        case '7 Set':
            document.body.style.backgroundImage = "";
            break;
        case '12 Out':
            document.body.style.backgroundImage = "";
            break;
        case '2 Nov':
            document.body.style.backgroundImage = "";
            break;
        case '15 Nov':
            document.body.style.backgroundImage = "";
            break;
        case '25 Dec':
            document.body.style.backgroundImage = "";
            break;
        default:
            break;            
    }
}

function input() {
    const data = submit.value
    BackGround(data)
    
}

