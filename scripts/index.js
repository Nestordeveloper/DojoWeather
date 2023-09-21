function showMessage(element){
    alert('Loading weather report...')
};

function changeTemperature(element) {
    let option = element.value;
    let temperatureSpans = document.querySelectorAll('.max > span, .min > span');
    console.log(temperatureSpans);
    
    if (option === 'fahrenheit') {
        for (let i = 0; i < temperatureSpans.length; i++) {
            let temperatureText = temperatureSpans[i].innerText;
            let temperatureValue = (parseFloat(temperatureText) * 1.8) + 32;
            temperatureSpans[i].innerText = Math.round(temperatureValue);
        }
    } else {
        for (let i = 0; i < temperatureSpans.length; i++) {
            let temperatureText = temperatureSpans[i].innerText;
            let temperatureValue = (parseFloat(temperatureText) - 32) / 1.8;
            temperatureSpans[i].innerText = Math.round(temperatureValue);
        }
    }
}


function acceptCookies(element){
    let cookie = element.closest('.container-cookies');
    cookie.classList.add('hide');
};
