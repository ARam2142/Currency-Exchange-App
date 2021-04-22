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
const fromCurrency = document.getElementById("fromCurrency"); console.log(fromCurrency)
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById('convert');
const result = document.querySelector('result');
const apiKey = '7ebff14093ba09068127633d';

const app = () => {

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`, {
        method: "GET",
    })
    .then(function(response) {  
        return response.json()
    }).then(function(data) {
        console.log(data)
        // appendData(data)
        }).catch(function(err) {
            console.log(err)
        })
}
app()

// function appendData(data) {
//     let option = document.createElement('option');
//     for (let i = 0; i < data.length; i++) {
//         const element = array[i];
        
//     }
    
// }
// appendData()