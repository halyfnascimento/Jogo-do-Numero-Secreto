//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jodo no número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabens Você acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Parabens você descobriu o número secreto, com ${tentativas} ${palavraTentativas}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', "O Número secreto é menor que o chute")
        }
        else{
            exibirTextoNaTela('p', "O Número secreto é maior que o chute")
        }
        tentativas++;
        limpaCampo()
        }
    }


    function limpaCampo(){
        chute = document.querySelector('input');
        chute.value = '';
    }

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numerolimite){
    listaDeNumerosSorteados = [];
   }


   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }
   else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido;
   }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    msgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}

function msgInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


msgInicial()
