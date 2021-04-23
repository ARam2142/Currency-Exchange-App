//grab elements from html
//get target.value of user input
//userInput is to match the currency that will be converted
//currency options for 
//fetch exchangeRate-api
//make sure button submits
//options should hook with name of currency ex. yen, euro, usd
//user has option to select the currency to convert from and currenty to convert to 
//submitting the convert button will give the user the equivalent currency amount to the selected currency

//grab elements 
const userInput = document.getElementById('userInput');
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById('convert');
const result = document.querySelector('result');
const apiKey = '7ebff14093ba09068127633d';

function fetchApi() {

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)

        .then(response => {
            return response.json()

        }).then(data => {
            //console.log(data)
            let jsonData = data.conversion_rates;
            const newArr = Object.keys(jsonData); console.log(newArr);
            appendData(newArr)
            amount(newArr, jsonData)
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

    //get the value of what ever the user types in.
    //get the value to match the currency from the api
    //user chooses currency and then hits convert button which will display on the bottom

    const amount = (newArr, jsonData) => {
        //console.log(jsonData)
        let monetaryVal = jsonData

        for (const key in monetaryVal) {
            console.log(`${key}: ${monetaryVal[key]}`)
        }
        userInput.addEventListener('keyup', e => {
            let keyPress = e.target.value
            console.log(keyPress)
        });
    }
    amount()


}

fetchApi();