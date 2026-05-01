// Endereço base da API que fornece o histórico de câmbio.
// A URL completa será montada depois com o par de moedas desejado.
const API_Historico = 'https://economia.awesomeapi.com.br/json/daily/';

// Quantos dias de histórico serão exibidos no gráfico.
const numero_dias = 7;

// Referência ao elemento <canvas> onde o Chart.js desenhará o gráfico.
const ctx = document.getElementById('myChart');

// Guarda a instância atual do gráfico para que possamos destruí-la
// antes de desenhar outro gráfico na mesma tela.
let chartInstance = null;

async function Iniciar_Grafico() {
  // Recupera as moedas de origem e destino do localStorage.
  // Se não existir, usa um valor padrão.
  const moedaInicial = localStorage.getItem('moeda_origem') || 'USD';
  const moedaFinal = localStorage.getItem('moeda_destino') || 'BRL';

  // Se as moedas forem iguais, não faz sentido mostrar histórico de conversão.
  if (moedaInicial === moedaFinal) {
    document.getElementById('Grafico').innerHTML = 'Selecione moedas diferentes para ver o gráfico de histórico.';
    return;
  }

  try {
    // Variáveis para armazenar os dados de histórico de cada moeda.
    let dados1, dados2;

    // Se a moeda inicial for BRL, a API não retorna BRL-BRL, então usamos valores fixos 1.
    // Isso garante que o gráfico mostre um valor neutro para o real.
    if (moedaInicial === 'BRL') {
      dados1 = Array(7).fill({ bid: '1.00', timestamp: Math.floor(Date.now() / 1000) });
    } else {
      const response1 = await fetch(`${API_Historico}${moedaInicial}-BRL/${numero_dias}`);
      dados1 = await response1.json();
    }

    // Mesma lógica para a moeda final: se for BRL, usamos valor fixo 1.
    if (moedaFinal === 'BRL') {
      dados2 = Array(7).fill({ bid: '1.00', timestamp: Math.floor(Date.now() / 1000) });
    } else {
      const response2 = await fetch(`${API_Historico}${moedaFinal}-BRL/${numero_dias}`);
      dados2 = await response2.json();
    }

    // Verifica se os dados retornados são arrays válidos.
    if (!Array.isArray(dados1) || !Array.isArray(dados2)) {
      throw new Error('Formato de dados inválido');
    }

    // Monta as labels do eixo X usando a data de cada item.
    // Cada timestamp é convertido para o formato DD/MM.
    const labels = dados1.map(item => {
      const data = new Date(item.timestamp * 1000); // timestamp em segundos
      return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    }).reverse(); // inverte para ordenar do mais antigo ao mais recente

    // Extrai os valores de compra (bid) e converte para número.
    const valores1 = dados1.map(item => parseFloat(item.bid)).reverse();
    const valores2 = dados2.map(item => parseFloat(item.bid)).reverse();

    // Cria um array fixo de 1's com o mesmo tamanho das labels.
    // Essa variável não está sendo usada atualmente no gráfico,
    // mas pode servir como referência futura para comparar com uma moeda base.
    const valoresBaseFixo = new Array(labels.length).fill(1);

    // Chama a função que desenha o gráfico a partir dos dados preparados.
    renderizarChart(labels, valores1, valores2, moedaInicial, moedaFinal);
  } catch (error) {
    console.error('Erro ao carregar dados do gráfico:', error);
    document.getElementById('Grafico').innerHTML = 'Não foi possível carregar os dados do gráfico.';
  }
}

function renderizarChart(labels, dataInicial, dataFinal, moeda1, moeda2) {
  // Se já existir um gráfico exibido, destrói-o antes de criar um novo.
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Cria um novo gráfico de linha usando Chart.js.
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels, // Datas no eixo X
      datasets: [
        {
          label: `${moeda1}`, // Texto que aparece na legenda para a primeira linha
          data: dataInicial,
          fill: true,
          tension: 0.4,
          borderWidth: 1
        },
        {
          label: `${moeda2}`, // Texto que aparece na legenda para a segunda linha
          data: dataFinal,
          fill: true,
          tension: 0.4,
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // permite que o gráfico ocupe o espaço do container pai
      scales: {
        y: {
          beginAtZero: false, // não força o eixo Y a começar em zero
          ticks: {
            callback: (v) => v.toFixed(2) // formata os valores do eixo Y com duas casas decimais
          }
        }
      }
    }
  });
}

// Executa a função de inicialização quando o DOM estiver totalmente carregado.
document.addEventListener('DOMContentLoaded', Iniciar_Grafico);