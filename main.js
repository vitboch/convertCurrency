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
What do you want to convert?`)

function calculate(amount, from, to) {
    const result = amount * currencies[to] / currencies[from]
    return result.toFixed(4)
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
    let from = currencyCheck('From: > ');
    if (!from) {
        break
    }
    let to = currencyCheck('To: > ')
    if (!to) {
        break
    }
    const amount = amountCheck()
    if (!amount) {
        break
    }
    const output = calculate(amount, from, to)
    console.log(`Result: ${amount} ${from} equals ${output} ${to}`)
    if (output) {
        break
    }
}
