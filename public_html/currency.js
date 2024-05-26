/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//Adding variables
const currency1 = document.getElementById('FirstCurrency');
const currency2 = document.getElementById('ExchangeCurrency');
const firstamount= document.getElementById('one');
const secondamount = document.getElementById('amount');
const exrate = document.getElementById('rate');


function conversion() {
    //Fetches the value of the currency to display to user 
    const FirstCurrency = currency1.value;
    const ExchangeCurrency = currency2.value;
    
    //fetching api and returning the response as a json 
    fetch(`https://api.exchangerate-api.com/v4/latest/${FirstCurrency}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    //based on exchange rate calculates final amount in the destination currency 
     const rate = data.rates[ExchangeCurrency];
      exrate.innerText = `1 ${FirstCurrency} = ${rate} ${ExchangeCurrency}`;
      secondamount.value = (firstamount.value * rate).toFixed(2);
   
    });
}
   
 //adds event listenters to variables and calls function 
currency1.addEventListener('change', conversion);
firstamount.addEventListener('input',  conversion);
currency2.addEventListener('change',  conversion);
secondamount.addEventListener('input', conversion);

//Calls function 
conversion();


