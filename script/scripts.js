function CarregaPagina(faseAtual) {
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
            proximaFase: 2,
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
            proximaFase: 3,

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
            proximaFase: 1,

        }
    ]
    //filtrando pela código da fase e pegando apenas o objeto encontrado
    let charada = arrayDeCharadas.filter(function (e) {
        return e.fase == faseAtual;
    })
    charada = charada[0];
    AtualizaImagem(charada.imagem, charada.alt);
    AtualizaTexto(charada.titulo, charada.texto, charada.dica);
    return charada;
}
function AtualizaImagem(source, txtAlt) {
    let img = document.getElementById('imagem');
    img.setAttribute('src', source);
    img.setAttribute('alt', txtAlt);
}
function AtualizaTexto(txtTitulo, txtPergunta, txtdica){
    let perguntaDaFase = document.getElementById('texto');
    let tituloDaFase = document.getElementById('titulo')
    let dicaDaFase = document.getElementById('dica');

    tituloDaFase.innerHTML = txtTitulo;
    perguntaDaFase.innerHTML = txtPergunta
    dicaDaFase.innerHTML = txtdica;
}
function PegaResposta() {
    let resposta = document.getElementById('inputResposta').value;
    charada = ConfereResposta(charada, resposta);
}
function ConfereResposta(charada, respostaDoUsuario) {
    LimpaResposta();
    if (respostaDoUsuario.toLowerCase() === charada.resposta.toLowerCase()){ // toLowerCase usado para fazer resposta ser case insentive
        return CarregaPagina(charada.proximaFase)
    } else {
        alert("Resposta errada, tente outra vez.");
        return charada;
    }  
}
function LimpaResposta() {
    let inputDeRespostaDoUsuario = document.getElementById('inputResposta')
    inputDeRespostaDoUsuario.value = "";
    inputDeRespostaDoUsuario.focus();
}
//carrega fase atual
let faseAtual = 1;
let charada = CarregaPagina(faseAtual);
//--

// Para conferir a resposta com o Enter
let inputDeResposta = document.getElementById("inputResposta");
inputDeResposta.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            PegaResposta( );
        }
})
//--

// usando axios para ler o Jason

async function PegaDadosDoArray(){
    let r = await axios.get('../charadas.json', {}).then(response => {return response.data} );
    return r;
}
let teste = PegaDadosDoArray();
console.log(teste)








