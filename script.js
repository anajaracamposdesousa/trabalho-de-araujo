const perguntas = [
    {
        pergunta: "Qual desses alimentos é uma fonte de proteína?",
        opcoes: ["Maçã", "Frango", "Arroz", "Cenoura"],
        resposta_correta: 1
    },
    {
        pergunta: "Quantas horas de sono por noite são recomendadas para adultos?",
        opcoes: ["4 horas", "6 horas", "8 horas", "10 horas"],
        resposta_correta: 2
    },
    {
        pergunta: "Qual atividade física é conhecida por melhorar a saúde do coração?",
        opcoes: ["Natação", "Dança", "Corrida", "Leitura"],
        resposta_correta: 3
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

const perguntaContainer = document.getElementById("pergunta-container");
const feedbackContainer = document.getElementById("feedback-container");
const proximoBtn = document.getElementById("proximo-btn");

function carregarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    perguntaContainer.innerHTML = `
        <h2>${perguntaAtual.pergunta}</h2>
        ${perguntaAtual.opcoes.map((opcao, index) => `
            <button onclick="responder(${index})">${opcao}</button>
        `).join('')}
    `;
}

function responder(resposta) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    if (resposta === perguntaAtual.resposta_correta) {
        pontuacao += 10;
    }
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarFeedback();
    }
}

function mostrarFeedback() {
    feedbackContainer.innerHTML = `
        <h2>Feedback</h2>
        <p>Sua pontuação final: ${pontuacao}</p>
        <p>${obterFeedback()}</p>
    `;
    proximoBtn.style.display = "none"; // Esconder o botão "Próxima Pergunta"
}

function obterFeedback() {
    if (pontuacao === 30) {
        return "Parabéns! Você acertou todas as perguntas. Você está muito bem informado sobre saúde!";
    } else if (pontuacao >= 20) {
        return "Você se saiu muito bem! Continue aprendendo sobre saúde para melhorar ainda mais.";
    } else if (pontuacao >= 10) {
        return "Você acertou algumas perguntas, mas ainda há espaço para melhorar seu conhecimento em saúde.";
    } else {
        return "Você precisa estudar mais sobre saúde. Não desanime, continue aprendendo!";
    }
}

carregarPergunta();
