// Pega o elemento do formulário pelo id 'Form'
const form = document.getElementById('Form');

// Pega o campo de valor digitado pelo usuário
const valor = document.getElementById('valor');

// Pega a moeda de origem selecionada pelo usuário
const moeda_origem = document.getElementById('moeda_origem');

// Pega o campo onde o valor convertido será exibido
const valor_f = document.getElementById('valor_f');

// Pega a moeda de destino selecionada pelo usuário
const moeda_conertida = document.getElementById('moeda_conertida');

// Pega o elemento que mostra o indicador de carregamento
const carregando = document.querySelector('.carregando');

// Pega o elemento onde o resultado da conversão será exibido
const resultado = document.querySelector('.resultado');

// Pega o elemento onde mensagens de erro serão exibidas
const erro = document.querySelector('.ERRO');

// URL base da API de cotação de câmbio
const Api_Url = 'https://api.exchangerate-api.com/v4/latest/';

// Função assíncrona que realiza a conversão de câmbio
async function converter_cambio() {

    // Mostra o indicador de carregamento enquanto busca os dados
    carregando.style.display = 'block';

    // Esconde o resultado anterior para evitar confusão
    resultado.style.display = 'none';

    // Esconde qualquer mensagem de erro anterior
    erro.style.display = 'none';

    try {
        // Faz a requisição para a API usando a moeda de origem selecionada
        const response = await fetch(Api_Url + moeda_origem.value);

        // Converte o resultado da API para JSON
        const data = await response.json();

        // Pega a taxa de câmbio para a moeda de destino selecionada
        const taxa_cambio = data.rates[moeda_conertida.value];

        // Calcula o valor convertido e mantém duas casas decimais
        const valor_convertido = (valor.value * taxa_cambio).toFixed(2);

        // Atualiza o campo de valor convertido no formulário
        valor_f.value = valor_convertido;

         // --- INTEGRAÇÃO COM O GRÁFICO ---
        // Salva as moedas no navegador para o grafico.js ler depois
        localStorage.setItem('moeda_origem', moeda_origem.value);
        localStorage.setItem('moeda_destino', moeda_conertida.value);

        // Mostra a área de resultado com o valor convertido
        resultado.style.display = 'block';

        // Preenche o HTML do resultado e da taxa de câmbio
        resultado.innerHTML = `
        <div class="Resultado">
            ${valor.value} ${moeda_origem.value} = ${valor_convertido} ${moeda_conertida.value}
        </div>

        <div class="Taxa">
            Taxa de câmbio: 1 ${moeda_origem.value} = ${taxa_cambio} ${moeda_conertida.value}
        </div>
        `;
    }
    catch(error) {
        // Se ocorrer erro na requisição ou no cálculo, mostra mensagem de erro
        erro.style.display = 'block';
        erro.innerHTML = 'Ocorreu um erro ao converter a moeda. Por favor, tente novamente.';
    }

    // Esconde o carregamento depois que terminou o processo
    carregando.style.display = 'none';
}

// Adiciona o evento de envio do formulário
form.addEventListener('submit', function(event) {
    // Impede o envio padrão da página, evitando refresh
    event.preventDefault();

    // Chama a função que faz a conversão de câmbio
    converter_cambio();
});