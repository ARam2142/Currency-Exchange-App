//grab elements 
const amountEl = document.getElementById('amount');
const fromCurrencyEl = document.getElementById("fromCurrency");
const toCurrencyEl = document.getElementById("toCurrency");
const convertBtn = document.getElementById('convert');
// const fromAmount = document.getElementById('baseCurrency');
// const toAmount = document.getElementById('targetCurrency'); //console.log(toAmount)
const conversion = document.getElementById('results');
const apiKey = '7ebff14093ba09068127633d';

let usdAmount;

function fetchApi() {

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)

        .then(response => {
            return response.json()

        }).then(data => {
            console.log(data)
            let jsonData = data.conversion_rates;
            const newArr = Object.keys(jsonData);
            appendData(newArr)
            convertCurrency(newArr, jsonData, data)
        }).catch(err => {
            console.log(err)
        })

    const appendData = (newArr) => {
        //console.log(newArr);
        let output = ''
        for (let i = 0; i < newArr.length; i++) {
            output = `<option>${newArr[i]}</option>`;
            fromCurrency.innerHTML += output
            toCurrency.innerHTML += output
        }
    }

    
    
    //get fromCurrency and toCurrency
    const convertCurrency= (newArr, jsonData, data) => {
        //const fromCurrency = 
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/enriched/GBP/JPY`)
        
    }

    fromCurrencyEl.addEventListener('change', convertCurrency)
    amountEl.addEventListener('input', convertCurrency)
    toCurrencyEl.addEventListener('change', convertCurrency);
    // fromAmount.addEventListener('change', convertCurrency);
    // toAmount.addEventListener('change', convertCurrency)
    

    convertBtn.addEventListener('click', e => {
        const temp = fromCurrencyEl.value; //console.log(temp)
        fromCurrencyEl.value = toCurrencyEl.value; console.log(fromCurrencyEl.value)
        toCurrencyEl.value = temp; console.log(toCurrencyEl.value);
        let output = `<p>14 ${fromCurrencyEl.value} is equivalent to 45 ${toCurrencyEl.value}</p>`;
        conversion.innerHTML = output;
        convertCurrency();
        e.preventDefault()
    })
    
}
fetchApi();