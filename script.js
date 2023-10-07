const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dolarToday = 5.14
    const euroToday = 5.45
    const libraToday = 6.3
    const bitToday = 143937.62


    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.querySelector(".pdolar")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImg.src ="./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Design sem nome 3.png"
    }

    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    convertValues()


}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)
