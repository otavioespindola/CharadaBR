
//declaração de variável fora das funções para que ela possa ser usada em to escopo do código
let respostaDoUsuario = document.getElementById("inputResposta");

//acionando chamada de resposta com a tecla Enter
respostaDoUsuario.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        confereResposta();
    }
});   

function confereResposta() {
    const respostaCerta = "salsichinha"    
    // uso do método toLowerCase para fazer a resposta ser case insentive
    if (respostaDoUsuario.value.toLowerCase() === respostaCerta.toLowerCase()) {
        // redirecionar para página 2
        window.location.href = './pergunta02.html'
    } else {
        alert("Resposta errada, tente outra vez.");
        respostaDoUsuario.value = "";
        respostaDoUsuario.focus();
    }    
}

