let chave = "af2b5974da59b7d5298fd278f74a0b62"


function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".temp-max").innerHTML = "Temperatura Máxima: " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp-min").innerHTML ="Temperatura Míninima: " + Math.floor(dados.main.temp_min) + "°C"
}

async function buscarCidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
        "&appid=af2b5974da59b7d5298fd278f74a0b62&units=metric").then(resposta => resposta.json())

    // AWAIT = ESPERE
    // FETCH -> Ferramenta do JavaScript para acessar servidores
    // THEN -> ENTÃO
    // JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)

    colocarNaTela(dados)


}


function cliqueNoBotao() {
    let cidade = document.querySelector(".input-cidade").value
    console.log(cidade)


    buscarCidade(cidade)

}

/*
Clica no BOTÃO 
  -> CHAMA A FUNÇÃO cliqueiNoBotao()
  -> Vai no INPUT e pega o que está lá dentro
  -> PASSAR a cidade para o servidor

  Math.floor -> Ferramenta do JavaScript para Arredondar valores

*/