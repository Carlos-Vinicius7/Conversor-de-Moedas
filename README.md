# 💱 Conversor de Câmbio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)

Uma aplicação web moderna e responsiva para conversão de moedas em tempo real, oferecendo uma interface intuitiva e funcionalidades avançadas para acompanhamento de taxas de câmbio.

## 📋 Sobre o Projeto

Este projeto é um **Conversor de Câmbio** que permite aos usuários converter valores entre diversas moedas globais instantaneamente. A aplicação utiliza dados atualizados de uma API externa para garantir precisão nas conversões e oferece uma visualização gráfica para análise de tendências.

## ✨ Funcionalidades

- 🗓️ **Conversão em Tempo Real:** Conversão instantânea de valores utilizando taxas de câmbio atualizadas.
- 🪙 **Diversas Moedas:** Suporte para as principais moedas do mundo, incluindo Real (BRL), Dólar (USD), Euro (EUR) e mais.
- 🌆 **Modo Escuro/Claro:** Interface adaptável com alternância de tema para melhor conforto visual.
- 📊 **Gráficos Interativos:** Visualização de dados históricos e taxas em tempo real através de gráficos dinâmicos.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização personalizada, incluindo animações e design responsivo.
- **JavaScript (Vanilla):** Lógica da aplicação, manipulação do DOM e consumo de API.
- **[ExchangeRate-API](https://www.exchangerate-api.com/):** API utilizada para obter as taxas de câmbio em tempo real.
- **[Chart.js](https://www.chartjs.org/):** Biblioteca utilizada para a renderização dos gráficos de câmbio.
- **[Boxicons](https://boxicons.com/):** Conjunto de ícones modernos e minimalistas.

## 🏗️ Estrutura do Projeto
```
Projeto1/                             # Raiz do repositório
├── 📁 Conversor de Moedas/            # Pasta principal da aplicação
│   ├── 📁 .vscode/                    # Configurações do VS Code
│   ├── 📁 assets/                     # Recursos estáticos
│   │   ├── 📁 css/                    # Estilos CSS
│   │   │   ├── 📁 global/             # Estilos globais e variáveis
│   │   │   │   ├── 📄 Global.css      # Estilos principais
│   │   │   │   ├── 📄 Normalizacao.css # Reset/normalização de estilos
│   │   │   │   └── 📄 Variaveis.css   # Variáveis CSS reutilizáveis
│   │   │   ├── 📁 pages/              # Estilos por página/tema
│   │   │   │   ├── 📁 Grafico/        # Estilos da página de gráfico
│   │   │   │   │   └── 📄 grafico.css
│   │   │   │   ├── 📁 Index/          # Estilos da página inicial
│   │   │   │   │   └── 📄 style.css
│   │   │   │   └── 📁 ModoEscuro/      # Estilos do modo escuro
│   │   │   │       ├── 📄 ModoEscuro.css
│   │   │   │       └── 📄 ModoEscuroG.css
│   │   ├── 📊 grafico.html            # Página de gráfico interativo
│   │   ├── 📁 img/                    # Imagens e ícones do site
│   │   └── 📁 javascript/             # Scripts JavaScript
│   │       └── 📁 pages/              # Scripts organizados por página
│   │           ├── 📁 Grafico/        # Lógica dos gráficos
│   │           │   └── 📄 grafico.js
│   │           ├── 📁 Index/          # Lógica da página principal
│   │           │   └── 📄 script.js
│   │           └── 📁 ModoEscuro/      # Lógica do tema escuro
│   │               └── 📄 ModoEscuro.js
│   └── 🌐 index.html                  # Página inicial do projeto
```

## 💻 Como Usar

1. 💰Insira o valor que deseja converter no campo **Valor**.
2. 💵Selecione a moeda de origem (Moeda I).
3. 💷Selecione a moeda de destino (Moeda II).
4. 💱Clique no botão **Converter**.
5. ✅O resultado aparecerá instantaneamente na tela, junto com a taxa de câmbio aplicada.
6. 📊Clique em **Taxas em tempo real** para visualizar o gráfico comparativo entre as moedas selecionadas.

🌐. https://conversor-de-moedas-three-kappa.vercel.app/

---
Desenvolvido como parte de um projeto de aprendizado em desenvolvimento web.
