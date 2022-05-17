const input = require('sync-input')

const currencies = {
    'USD': 1.0,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75
}

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`)

function calculate(amount, to) {
    const res = amount * currencies[to]
    return res.toFixed(4)
}

function amountCheck() {
    let amount = input('Amount: > ')
    if (isNaN(amount)) {
        console.log('The amount has to be a number')
    } else if (amount < 1) {
        console.log('The amount can not be less than 1')
    }
    else {
        return amount
    }
}

function currencyCheck(data) {
    const currency = input(data).toUpperCase()
    if (currencies[currency] == undefined) {
        console.log('Unknown currency')
    }
    else {
        return currency
    }
}

while (true) {
    const to = currencyCheck('To: > ')
    if (!to) {
        break
    }
    const amount = amountCheck()
    if (!amount) {
        break
    }
    const result = calculate(amount, to)
    console.log(`Result: ${amount} USD equals ${result} ${to}`)
    if (result) {
        break
    }
}
