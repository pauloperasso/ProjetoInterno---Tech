const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const tabs = document.querySelectorAll(".tab-button");
const content = document.getElementById("dados-content");

const dados = {
  descritiva: {
    titulo: "Entendendo o passado e o presente",
    subtitulo: "DESCRITIVA",
    texto: `A frente descritiva envolve a descrição e resumo dos dados disponíveis. Isso inclui calcular medidas de tendência central (como média, mediana e moda), medidas de dispersão (como desvio padrão e variância) e apresentar os dados de forma visual através de gráficos e tabelas. Essa fase é essencial para entendimento claro das informações e desenvolvimento futuro de análises mais complexas.`,
    imagem: "./Images/Descritiva.jpg"
  },
  diagnostica: {
    titulo: "Identificando causas e padrões",
    subtitulo: "DIAGNÓSTICA",
    texto: `A análise diagnóstica busca entender por que algo aconteceu. A partir dos dados históricos, identifica-se relações entre variáveis e causas de determinados comportamentos. É uma etapa essencial para compreender problemas e propor soluções com base em evidências.`,
    imagem: "./Images/Diagnóstica.jpg"
  },
  preditiva: {
    titulo: "Prevendo resultados futuros",
    subtitulo: "PREDITIVA",
    texto: `A análise preditiva utiliza modelagem estatística e algoritmos de aprendizado de máquina para prever tendências e comportamentos futuros. Essa etapa ajuda a antecipar demandas, identificar riscos e tomar decisões estratégicas mais assertivas.`,
    imagem: "./Images/Preditiva.png"
  },
  prescritiva: {
    titulo: "Recomendando ações inteligentes",
    subtitulo: "PRESCRITIVA",
    texto: `A análise prescritiva vai além da previsão — ela indica o melhor caminho a seguir. A partir de simulações e otimizações, recomenda ações que maximizem resultados e minimizem riscos, apoiando decisões com base em dados e inteligência computacional.`,
    imagem: "./Images/Prescritiva.png"
  }
};

// Função para atualizar o conteúdo da seção
function atualizarConteudo(tipo) {
  const info = dados[tipo];

  content.classList.add("fade");
  setTimeout(() => {
    content.innerHTML = `
      <div class="dados-text">
        <span class="dados-sub">${info.subtitulo}</span>
        <h2>${info.titulo}</h2>
        <p>${info.texto}</p>
        <div class="dados-buttons">
          <button class="dados-small-btn"><i class="fas fa-bolt"></i>  Insights mais eficientes</button>
          <button class="dados-small-btn"><i class="fas fa-lightbulb"></i>  Identificação de Oportunidades</button>
        </div>
      </div>
      <div class="dados-image">
        <img src="${info.imagem}" alt="${info.subtitulo}">
      </div>
    `;
    content.classList.remove("fade");
  }, 300);
}

// Adiciona evento de clique em cada botão
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    tab.classList.add("active");
    const tipo = tab.dataset.tab;
    atualizarConteudo(tipo);
  });
});

// ==============================
// AJUSTES SOLICITADOS
// ==============================

// (1) Alinhar os botões ao centro (CSS complementar abaixo)
// (2) Exibir "Descritiva" como padrão ao abrir a página
window.addEventListener("DOMContentLoaded", () => {
  // Define o primeiro botão (Descritiva) como ativo
  const primeiraAba = tabs[0];
  primeiraAba.classList.add("active");

  // Atualiza o conteúdo inicial com a aba descritiva
  atualizarConteudo("descritiva");
});
