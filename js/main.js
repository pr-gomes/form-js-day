function carregar() {
    var agora = new Date();
    var hrs = 19;
    var min = agora.getMinutes();
    var resultado = document.querySelector('#resul');
    var info = document.querySelector('#info');
    var img = document.querySelector('.img-fundo');

    info.innerHTML = `Agora são ${hrs}:${min} hrs.`;

    if (hrs >= 0 && hrs < 12) {
        resultado.innerHTML = ` Estamos no horário da manhã`
        img.src = './img/morning.jpg'

    } else if (hrs >= 12 && hrs < 18) {
        resultado.innerHTML = ' Estamos no horário da Tarde ! '
        img.src = './img/afternoon.jpg'

    } else {
        resultado.innerHTML = ' Estamos no horário da Noite'
        img.src = './img/night.jpg'

    }
}


