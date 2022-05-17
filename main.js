const input = require('sync-input')

const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`)

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

const question = `What do you want to do?
1-Convert currencies 2-Exit program`

while (true) {
    console.log(question)
    const choice = input('> ')
    if (choice == 2) {
        console.log('Have a nice day!')
        break
    } else if (choice != 1) {
        console.log('Unknown input')
        continue
    }
    console.log('What do you want to convert?')
    const from = currencyCheck('From: > ')
    if (!from) {
        continue
    }
    const to = currencyCheck('To: > ')
    if (!to) {
        continue
    }
    const amount = amountCheck()
    if (!amount) {
        continue
    }
    const output = calculate(amount, from, to)
    console.log(`Result: ${amount} ${from} equals ${output} ${to}`)
}
