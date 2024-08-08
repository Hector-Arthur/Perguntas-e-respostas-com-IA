const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere jogar no:",
        alternativas: [
            {
                texto: "Criativo",
                afirmacao: "Você gosta de tentar criar construções ou fazer experimentos sem necessidade de coletar recursos,"
            },
            {
                texto: "Sobrevivencia",
                afirmacao: "Você gosta de explorar e ficar forte do jeito classico, tentando com dificuldades,"
            }
        ]
    },
    {
        enunciado: "Você gosta de um jogar no:",
        alternativas: [
            {
                texto: "Pacífico/fácil",
                afirmacao: "além disso, é um jogador mais cassual, que prefere um jogo tranquilo e que não gosta de muito desafios."
            },
            {
                texto: "Hardcore/difícil",
                afirmacao: "além disso, é uma pessoa que gosta de dificuldade e desafiar a si mesmo, tentando no modo mais dificl."
            }
        ]
    },
    {
        enunciado: "Dentro do jogo, você prefere:",
        alternativas: [
            {
                texto: "Construir, fazer um abrigo bonito e explorar o mundo",
                afirmacao: "Você quer aproveitar a diversidades do jogo e viver de modo tranquilo e calmo."
            },
            {
                texto: "Ficar forte e tentar zerar o jogo o mais rapido possivel ",
                afirmacao: "Você quer aproveitar as dificuldades do jogo, enfrentando monstros e desafios do jogo."
            }
        ]
    },
    {
        enunciado: "Você gosta de jogar com:",
        alternativas: [
            {
                texto: "Os amigos",
                afirmacao: "Você gosta de se divertir com pessoas e acha que jogar sozinho é algo sem graça."
            },
            {
                texto: "Sozinho",
                afirmacao: "Você gosta de fazer as coisas sozinhas e do seu jeito, proveitando calmamente."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
