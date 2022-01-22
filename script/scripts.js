
//declaração de variável fora das funções para que ela possa ser usada em to escopo do código
let respostaDoUsuario = document.getElementById("inputResposta");

//acionando chamada de resposta com a tecla Enter
respostaDoUsuario.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        confereResposta();
    }
});   

function confereResposta() {
        
    // uso do método toLowerCase para fazer a resposta ser case insentive
    if (respostaDoUsuario.value.toLowerCase() === respostaDaFase.toLowerCase()) {
        // redirecionar para página 2
        window.location.href = './pergunta02.html'
    } else {
        alert("Resposta errada, tente outra vez.");
        respostaDoUsuario.value = "";
        respostaDoUsuario.focus();
    }    
}
// array com as propriedades da página
let arrayDeCharadas = [
    {
        id: 35,
        imagem: "./img/imgPergunta01.jpg",
        alt: "Um dachshund no mato",
        texto: "Esse cãozinho é bem popular.",
        dica: "Tente no diminutivo",
        titulo: "Pergunta 01",
        resposta: "salsichinha",
        fase: 1,
    },
    {
        id: 45,
        imagem: "./img/imgPergunta02.jpg",
        alt: "Um prédio muito alto",
        texto: "Se tivesse unhas",
        dica: "Hifen e acentos importam",
        titulo: "Pergunta 02",
        resposta: "arranha-céu",
        fase: 2,
    },
    {
        id: 55,
        imagem: "./img/imgpergunta03.jpg",
        alt: "Um palhaço",
        texto: "Um palhaço pode ser mal?",
        dica: "DC",
        titulo: `Pergunta 03`,
        resposta: "Coringa",
        fase: 3,
    }
]

let faseAtual = 1;

//filtrando pela código da fase, que será também o fator que ordenará em que aparecerá no game
let charada = arrayDeCharadas.filter(function (e) {
    return e.fase == faseAtual;
})
charada = charada[0];

//atualizando a imagem
let imagemDaFase = document.getElementById('imagem');
imagemDaFase.setAttribute('src', charada.imagem)
imagemDaFase.setAttribute('alt', charada.alt)

// atualizando o texto
let textoDaFase = document.getElementById('texto');
textoDaFase.innerHTML = charada.texto;
let dicaDaFase = document.getElementById('dica');
dicaDaFase.innerHTML = charada.dica;
//atualizando a respota
let respostaDaFase = charada.resposta;

let tituloDaFase = document.getElementById('titulo');
tituloDaFase.innerHTML = charada.titulo;




