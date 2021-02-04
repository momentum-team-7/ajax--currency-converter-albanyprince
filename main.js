/* globals fetch */
  
  
const ratesUrl = 'https://api.exchangeratesapi.io/latest'

const baseCurrency = document.querySelector('.base-currency')
const targetCurrency = document.querySelector('.target-currency')

// currencySelection.addEventListener('change', (event))

fetch (ratesUrl)
  .then(response => response.json())
  .then(data => {
    console.log('working?', data)
  // .then(data => {
    baseCurrencyEl = data.rates
    console.log('base currency is', baseCurrencyEl)
    targetCurrencyEl = data.rates
    console.log('target currency is', targetCurrencyEl)
})

convertAmount.addEventListener('click', convert)

// funtion convert() {
//     for (let i=0; i < currencies.length; i++) {

//     }
// }
// // for (let currency of currencies) {
//     baseCurrency.innerHTML = baseCurrency.innerHTML += `<option>${currency}</option>`
//   }
  

// baseCurrency.innerHTML = baseChoice.
// const targetCurrency = document.querySelector('.target-currency')



// fetch(ratesUrl)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
 