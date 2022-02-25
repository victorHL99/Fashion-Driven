let nomeUsuario = 0;
let modeloSelecionado = null;
let golaSelecionada = null;
let tecidoSelecionado = null;
let validadorUrl = false;



function recolherNome() {
    nomeUsuario = prompt("Digite o seu nome")

}
recolherNome();

function selecionarModelo(classeBotãoModelo) {
    modeloSelecionado = document.querySelector(".modelo-selecionado")
    if (modeloSelecionado !== null) {
        modeloSelecionado.classList.remove("modelo-selecionado");
    }


    const modelo = document.querySelector("." + classeBotãoModelo);
    modelo.classList.add("modelo-selecionado")
    modeloSelecionado = modelo;
    ativarBotao();
}

function selecionarGola(classeBotãoGola) {
    golaSelecionada = document.querySelector(".gola-selecionado")
    if (golaSelecionada !== null) {
        golaSelecionada.classList.remove("gola-selecionado");
    }

    const gola = document.querySelector("." + classeBotãoGola);
    gola.classList.add("gola-selecionado")
    golaSelecionada = gola;
    ativarBotao();
}

function selecionarTecido(classeBotãoTecido) {
    tecidoSelecionado = document.querySelector(".tecido-selecionado")
    if (tecidoSelecionado !== null) {
        tecidoSelecionado.classList.remove("tecido-selecionado");
    }


    const tecido = document.querySelector("." + classeBotãoTecido);
    tecido.classList.add("tecido-selecionado")
    tecidoSelecionado = tecido;
    ativarBotao();
}

function confirmarPedido() {
    let botaoConfirmacao = document.querySelector(".confirmacao");
    console.log("teste")

    botaoConfirmacao.classList.add("confirmado")
    mostrarRoupas();

    let objeto = {
        
    }

}


function ativarBotao() {
    if (validadorUrl=== true && modeloSelecionado !== null && golaSelecionada !== null && tecidoSelecionado !== null) {

        confirmarPedido();
        
    } else {
        console.log("deu ruim")
    }

}

function validarInput() {
    let url;
    let input = document.querySelector("input").value

    try {
        url = new URL(input);
    } catch (_) {
        return false;
    }
    validadorUrl = true
    ativarBotao();
    console.log(url)
    return url.protocol === "http:" || url.protocol === "https:";
}