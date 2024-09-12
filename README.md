DevClub - Previsão do Tempo 🌤️
Este projeto é uma aplicação simples de previsão do tempo, desenvolvida com HTML, CSS e JavaScript, que utiliza a API do OpenWeatherMap para fornecer informações climáticas em tempo real com base na cidade digitada pelo usuário.

Funcionalidades 🛠️
Busca de cidade: O usuário pode digitar o nome da cidade e clicar no botão de busca (ou pressionar a tecla Enter) para ver a previsão do tempo.
Previsão em tempo real: Exibe a temperatura atual, temperatura máxima e mínima, umidade e o ícone correspondente ao clima da cidade.
Design responsivo: A interface foi construída para ser acessível em diferentes tamanhos de tela, com estilizações que adaptam o layout.
Tecnologias Utilizadas 💻
HTML5: Estrutura da página e integração com a API.
CSS3: Estilização da página, com foco em responsividade e uma interface amigável.
JavaScript: Lógica de busca e manipulação de dados da API OpenWeatherMap.
API OpenWeatherMap: Utilizada para acessar as informações climáticas.
Estrutura do Código 📝
HTML
A estrutura HTML do projeto inclui:

Um campo de input para a busca da cidade.
Um botão com um ícone de lupa que dispara a busca de dados da cidade digitada.
Uma área onde são exibidas as informações do clima, incluindo nome da cidade, temperatura, temperatura máxima e mínima, umidade e ícone de previsão.

CSS
O CSS foi utilizado para criar um design limpo e moderno:

Background: Imagem de fundo representando uma cidade, cobrindo toda a tela.
Container: A caixa central onde as informações são exibidas tem bordas arredondadas, transparência e adaptação responsiva.
Botão: O botão tem um design circular e muda de cor ao passar o mouse (hover).
css

JavaScript
O JavaScript é responsável por:

Buscar os dados climáticos da cidade digitada pelo usuário, através da função buscarCidade(), que utiliza a API do OpenWeatherMap.
Exibir as informações na tela como nome da cidade, temperatura atual, máxima e mínima, e a umidade, através da função colocarNaTela().
Eventos: O botão de busca e a tecla Enter são configurados para acionar a função de busca.
