//grab elements 
const amountEl = document.getElementById('amount');
const fromCurrencyEl = document.getElementById("fromCurrency");
const toCurrencyEl = document.getElementById("toCurrency");
const convertBtn = document.getElementById('convert');
const conversion = document.getElementById('results');
const apiKey = '7ebff14093ba09068127633d';

//fetch api from exchangerate
fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)

    .then(response => {
        return response.json()

    }).then(data => {
        const currencyNames = Object.keys(data.conversion_rates);
        const currency_exchange_rate = Object.values(data.conversion_rates);

        console.log(currencyNames, currency_exchange_rate);

        appendData(currencyNames, currency_exchange_rate);
    }).catch(err => {
        console.log(err)
    })

//attach api data and populate it in the select options tag
const appendData = (currencyNames, exchange_rate) => {
    let output = '';
    for (let i = 0; i < currencyNames.length; i++) {
        output = `<option value="${exchange_rate[i]}">${currencyNames[i]}</option>`;
        fromCurrency.innerHTML += output
        toCurrency.innerHTML += output
    }
}

//addeventlistener will change when converBtn is clicked
amountEl.addEventListener('input', convertBtn)

//Conversions will display at the bottom of the card 
convertBtn.addEventListener('click', e => {
    e.preventDefault()
    const startingCurrency = fromCurrencyEl.value;
    
    fromCurrencyEl.value = toCurrencyEl.value;
    
    toCurrencyEl.value = startingCurrency;
    
    let currency_rate = toCurrencyEl.options[toCurrencyEl.selectedIndex].getAttribute('value');
    
    let currencyNameFrom = fromCurrencyEl.options[fromCurrencyEl.selectedIndex];
    let currencyNameTo = toCurrencyEl.options[toCurrencyEl.selectedIndex];
    let output = `
    <p> ${fromCurrencyEl.value} ${currencyNameFrom.text} = ${toCurrencyEl.value} ${currencyNameTo.text}</p>
    <h4>${amountEl.value} ${currencyNameFrom.text} = ${(amountEl.value * currency_rate)} ${currencyNameTo.text}</h4>`;
    conversion.innerHTML = output;
})
