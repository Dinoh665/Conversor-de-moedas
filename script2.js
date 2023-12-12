

const botaoDeConversao = document.querySelector(".botao-de-conversao")
const firstInputValue = document.querySelector(".first-currency-select")
const secondInputValue = document.querySelector(".second-currency-select")

const converter = async () => {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json()) // mapeia o valor atualizado das moedeas


    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high
    const bit = data.BTCBRL.high

    const valorDoInput = document.querySelector(".valor-digitado").value  // mapeia o valor digitado no input
    const primeiraMoedaSelecionada = document.querySelector(".first-currency-select").value // mapeia a primeira moeda selecionada
    const segundaMoedaSelecionada = document.querySelector(".second-currency-select").value // mapeia a segunda moeda selecionada
    const colocarNaAplicacao = document.querySelector(".valor-convertido") // mapeia o parágrafo para exibir o resultado da conversão

    // converter DE real PARA outras moedas

    if (primeiraMoedaSelecionada === "Real1" && segundaMoedaSelecionada === "Dolar2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput / dolar)

    }

    if (primeiraMoedaSelecionada === "Real1" && segundaMoedaSelecionada === "Euro2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput / euro)

    }

    if (primeiraMoedaSelecionada === "Real1" && segundaMoedaSelecionada === "Libra2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorDoInput / libra)

    }

    if (primeiraMoedaSelecionada === "Real1" && segundaMoedaSelecionada === "Bitcoin2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(valorDoInput / bit)

    }

    // converter De dolar PARA outras moedas

    if (primeiraMoedaSelecionada === "Dolar1" && segundaMoedaSelecionada === "Real2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput * dolar)

    }

    if (primeiraMoedaSelecionada === "Dolar1" && segundaMoedaSelecionada === "Euro2") {

        const valorEmReal = valorDoInput * dolar

        const valorConvertido = valorEmReal / euro

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)
    }

    if (primeiraMoedaSelecionada === "Dolar1" && segundaMoedaSelecionada === "Libra2") {

        const valorEmReal = valorDoInput * dolar

        const valorConvertido = valorEmReal / libra

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido)

    }

    if (primeiraMoedaSelecionada === "Dolar1" && segundaMoedaSelecionada === "Bitcoin2") {

        const valorEmReal = valorDoInput * dolar

        const valorConvertido = valorEmReal / bit

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(valorConvertido)
    }

    // converter DE euro PARA outras moedas

    if (primeiraMoedaSelecionada == "Euro1" && segundaMoedaSelecionada == "Real2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput * euro)
    }
    if (primeiraMoedaSelecionada == "Euro1" && segundaMoedaSelecionada == "Dolar2") {

        const valorEmReal = valorDoInput * euro

        const valorConvertido = valorEmReal / dolar

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido)
    }
    if (primeiraMoedaSelecionada == "Euro1" && segundaMoedaSelecionada == "Libra2") {

        const valorEmReal = valorDoInput * euro

        const valorConvertido = valorEmReal / libra

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido)
    }
    if (primeiraMoedaSelecionada == "Euro1" && segundaMoedaSelecionada == "Bitcoin2") {

        const valorEmReal = valorDoInput * euro

        const valorConvertido = valorEmReal / bit

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(valorConvertido)
    }

    // converter DE libra PARA outras moedas

    if (primeiraMoedaSelecionada == "Libra1" && segundaMoedaSelecionada == "Real2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput * libra)
    }

    if (primeiraMoedaSelecionada == "Libra1" && segundaMoedaSelecionada == "Dolar2") {

        const valorEmReal = valorDoInput * libra

        const valorConvertido = valorEmReal / dolar

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(valorConvertido)
    }
    if (primeiraMoedaSelecionada == "Libra1" && segundaMoedaSelecionada == "Euro2") {

        const valorEmReal = valorDoInput * libra

        const valorConvertido = valorEmReal / euro

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)
    }

    if (primeiraMoedaSelecionada == "Libra1" && segundaMoedaSelecionada == "Bitcoin2") {

        const valorEmReal = valorDoInput * libra

        const valorConvertido = valorEmReal / bit

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(valorConvertido)

    }

    // converter DE bitcoin PARA outras moedas

    if (primeiraMoedaSelecionada == "Bitcoin1" && segundaMoedaSelecionada == "Real2") {
        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput * bit)

    }
    if (primeiraMoedaSelecionada == "Bitcoin1" && segundaMoedaSelecionada == "Dolar2") {

        const valorEmReal = valorDoInput * bit

        const valorConvertido = valorEmReal / dolar

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "UDS"
        }).format(valorConvertido)

    }
    if (primeiraMoedaSelecionada == "Bitcoin1" && segundaMoedaSelecionada == "Euro2") {

        const valorEmReal = valorDoInput * bit

        const valorConvertido = valorEmReal / euro

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorConvertido)

    }
    if (primeiraMoedaSelecionada == "Bitcoin1" && segundaMoedaSelecionada == "Libra2") {

        const valorEmReal = valorDoInput * bit

        const valorConvertido = valorEmReal / libra

        colocarNaAplicacao.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorConvertido)

    }
}

const colocarValorDigitado = () => {

    const primeiraMoedaSelecionada = document.querySelector(".first-currency-select").value // mapeia a primeira moeda selecionada
    const valorASerConvertido = document.querySelector(".currency-value-to-convert")
    const valorDoInput = document.querySelector(".valor-digitado").value
    const nomeDaMoeda = document.querySelector(".preal")
    const imagemDaMoeda = document.querySelector(".imagem2")

    if (primeiraMoedaSelecionada == "Real1") {

        nomeDaMoeda.innerHTML = "Real"
        imagemDaMoeda.src = "./assets/brasil 2.png"
        
        valorASerConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput)
    }
    if (primeiraMoedaSelecionada == "Dolar1") {

        nomeDaMoeda.innerHTML = "Dólar"
        imagemDaMoeda.src = "./assets/estados-unidos (1) 1.png"

        valorASerConvertido.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(valorDoInput)
    }
    if (primeiraMoedaSelecionada == "Euro1") {

        nomeDaMoeda.innerHTML = "Euro"
        imagemDaMoeda.src = "./assets/Design sem nome 3.png"

        valorASerConvertido.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorDoInput)
    }
    if (primeiraMoedaSelecionada == "Libra1") {

        nomeDaMoeda.innerHTML = "Libra"
        imagemDaMoeda.src = "./assets/libra 1.png"

        valorASerConvertido.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorDoInput)
    }
    if (primeiraMoedaSelecionada == "Bitcoin1") {

        nomeDaMoeda.innerHTML = "Bitcoin"
        imagemDaMoeda.src = "./assets/bitcoin 1.png"

        valorASerConvertido.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(valorDoInput)
    }

converter()
}


const colocarMoedaDoInputNoSegundoParagrafo = async () => {
    const nomeDaMoeda = document.querySelector(".pdolar")
    const segundaMoedaSelecionada = document.querySelector(".second-currency-select").value // mapeia a segunda moeda selecionada
    const paragrafoMoedaDeConversao = document.querySelector(".valor-convertido")
    const imagemDaMoeda = document.querySelector(".currency-img")
    const valor = 0 

    if (segundaMoedaSelecionada == "Real2") {

        nomeDaMoeda.innerHTML = "Real"
        imagemDaMoeda.src = "./assets/brasil 2.png"

        paragrafoMoedaDeConversao.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor)
    }
    if (segundaMoedaSelecionada == "Dolar2") {

        nomeDaMoeda.innerHTML = "Dólar"
        imagemDaMoeda.src = "./assets/estados-unidos (1) 1.png"

        paragrafoMoedaDeConversao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(valor)
    }
    if (segundaMoedaSelecionada == "Euro2") {

        nomeDaMoeda.innerHTML = "Euro"
        imagemDaMoeda.src = "./assets/Design sem nome 3.png"

        paragrafoMoedaDeConversao.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valor)
    }
    if (segundaMoedaSelecionada == "Libra2") {

        nomeDaMoeda.innerHTML = "Libra"
        imagemDaMoeda.src = "./assets/libra 1.png"

        paragrafoMoedaDeConversao.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(0)
    }
    if (segundaMoedaSelecionada == "Bitcoin2") {

        nomeDaMoeda.innerHTML = "Bitcoin"
        imagemDaMoeda.src = "./assets/bitcoin 1.png"

        paragrafoMoedaDeConversao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(0)


    }

    converter()
}

const BloquearMoedasIguais = () => {

    const valorDoInput = document.querySelector(".valor-digitado").value
    const valorASerConvertido = document.querySelector(".currency-value-to-convert")
    const paragrafoMoedaDeConversao = document.querySelector(".valor-convertido")
    const valor = 0 


    const nomeDaMoeda1 = document.querySelector(".preal")
    const imagemDaMoeda1 = document.querySelector(".imagem2")
    
    const imagemDaMoeda2 = document.querySelector(".currency-img")
    const nomeDaMoeda2 = document.querySelector(".pdolar")

    const primeiraMoedaSelecionada = formatarMoeda(document.querySelector(".first-currency-select").value);
    const segundaMoedaSelecionada = formatarMoeda(document.querySelector(".second-currency-select").value);

    const firstSelect = document.querySelector(".first-currency-select");
    const secondSelect = document.querySelector(".second-currency-select");

    if(primeiraMoedaSelecionada === segundaMoedaSelecionada){

        alert("Você NÃO PODE selecionar moedas iguais")

        firstSelect.selectedIndex = 0
        secondSelect.selectedIndex = 0;

        nomeDaMoeda1.innerHTML = "Real"
        imagemDaMoeda1.src = "./assets/brasil 2.png"

        nomeDaMoeda2.innerHTML = "Dólar"
        imagemDaMoeda2.src = "./assets/estados-unidos (1) 1.png"

        valorASerConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorDoInput)

        paragrafoMoedaDeConversao.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD"
        }).format(valor)
    }
}


const formatarMoeda = (valor) => {
    // Remove todos os dígitos usando uma expressão regular
    const valorSemNumeros = valor.replace(/\d/g, '');

    return valorSemNumeros
};


firstInputValue.addEventListener("change", colocarValorDigitado)

secondInputValue.addEventListener("change", colocarMoedaDoInputNoSegundoParagrafo)

firstInputValue.addEventListener("change", BloquearMoedasIguais)

secondInputValue.addEventListener("change", BloquearMoedasIguais)

botaoDeConversao.addEventListener("click", colocarValorDigitado)
