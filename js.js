const price = document.querySelector('#price');
const people = document.querySelector('.persons')
const tip = document.querySelector('#napiwek')
const error = document.querySelector('.start-info')
const countInfo = document.querySelector('.cost-info span')
const countBtn = document.querySelector('.btn')


const showBill = () => {

    const countBill = () => {
        const wynik =(parseInt( price.value) + price.value * tip.value ) / people.value;
        countInfo.textContent = wynik.toFixed(2); 
    }


    if(price.value == 0 || people.value == 0 || tip.value == 0){
        countInfo.textContent = "Wprowadź dane";
    } else {
        countBill();
    }



}


countBtn.addEventListener('click', showBill)


