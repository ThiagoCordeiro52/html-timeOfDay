function load() {
    const data = new Date();
    const hour = data.getHours();
    const message = window.document.getElementById('divTime');
    const image = window.document.getElementById('image');

    message.innerHTML = `Agora são ${hour} horas`;

    if(hour >= 0 && hour < 12) {
        image.src = './assets/Dia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        image.src = './assets/Tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        image.src = './assets/Noite.png'
        document.body.style.background = '#515154'
    }
}

