async function BuscaCharada(faseAtual) {
    const resp = await axios.get('../charadas.json');
    let arrayDeCharadas = resp.data;
    //filtrando pela código da fase e pegando apenas o objeto encontrado
    return arrayDeCharadas.filter( function(e) {
        return e.fase == faseAtual;
    })[0]       
}
function CarregaPagina(charada) {
    AtualizaImagem(charada.imagem, charada.alt);
    AtualizaTexto(charada.titulo, charada.texto, charada.dica);
    AdicionarListeners(charada);
    console.log(charada.fase);
    return charada;
}
function AtualizaImagem(source, txtAlt) {
    let img = document.getElementById('imagem');
    img.setAttribute('src', source);
    img.setAttribute('alt', txtAlt);
}
function AtualizaTexto(txtTitulo, txtPergunta, txtdica) {
    let perguntaDaFase = document.getElementById('texto');
    let tituloDaFase = document.getElementById('titulo')
    let dicaDaFase = document.getElementById('dica');

    tituloDaFase.innerHTML = txtTitulo;
    perguntaDaFase.innerHTML = txtPergunta
    dicaDaFase.innerHTML = txtdica;
}
function AdicionarListeners(charada){
    document.getElementById("inputResposta")
    .addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            ConfereResposta(charada);
        }
    });
    document.getElementById("botao-confirmar")
    .addEventListener("click", (e) => {
        ConfereResposta(charada);
    } ) 
}
function LimpaResposta() {
    let inputDeRespostaDoUsuario = document.getElementById('inputResposta')
    inputDeRespostaDoUsuario.value = "";
    inputDeRespostaDoUsuario.focus();
}
async function ConfereResposta(charada) {
    let respostaDoUsuario = document.getElementById('inputResposta').value;
    LimpaResposta();
    console.log(charada.resposta);
    if (respostaDoUsuario.toLowerCase() === charada.resposta.toLowerCase()) { // toLowerCase usado para fazer resposta ser case insentive
        let novaCharada = await BuscaCharada(charada.proximaFase);        
        CarregaPagina(novaCharada);
        localStorage.setItem('faseAtual', novaCharada.fase);        
    } else {
        alert("Resposta errada, tente outra vez.");
        return charada;        
    }    
}

if (!localStorage.faseAtual) {
     localStorage.setItem('faseAtual', 3);
}

BuscaCharada(localStorage.faseAtual).then((charada) => {
    CarregaPagina(charada);
})








