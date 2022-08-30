const hidden = document.getElementById('hidden');
const input = document.querySelector('input');
const showData = document.getElementById('showData')
const alert = document.getElementById('alert')

function calc() {
    let number = input.value.toString();
    let numberZero = 0;
    if (number == 0) {
        alert.hidden = false;
        setTimeout(hide, 3000)
    } else {
        for (let i = 0; i < number.length; i++) {
            numberZero += parseInt(number[i]);
            console.log(numberZero)
        }
        if (numberZero % 2 === 0) {
            hidden.hidden = false;
            showData.innerHTML = `${numberZero}` + ' is even';
        } else {
            hidden.hidden = false;
            showData.innerHTML = `${numberZero}` + ' is odd';
        }
    }
}

function hide() {
    alert.hidden = true;
}
