let secondsHand = document.getElementById('seconds')

setInterval(() => {
    turnPointer()
}, 1000);

function turnPointer() {
    let currentHour = new Date();
    document.querySelector('.seconds').style.setProperty('--rotation', `${currentHour.getSeconds()*6}deg`)
    document.querySelector('.minutes').style.setProperty('--rotation', `${currentHour.getMinutes()*6}deg`)
    document.querySelector('.hours').style.setProperty('--rotation', `${(currentHour.getHours()*30) + currentHour.getMinutes()*0.5}deg`)
}