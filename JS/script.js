const urlGet = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
const urlPost = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
let nomeUsuario = 0;
let modeloSelecionado = null;
let idModeloSelecionado = null;
let golaSelecionada = null;
let tecidoSelecionado = null;
let validadorUrl = false;
let urlInput = null;


function requisicaoGetApi() {
    const promiseRoupas = axios.get(urlGet)
    promiseRoupas.then(mostrarRoupas)
}
requisicaoGetApi();

function mostrarRoupas(resposta) {
    let i = 0;
    let containerRoupas = document.querySelector(".ultimos-pedidos")

    for (i; i < resposta.data.length; i++) {

        containerRoupas.innerHTML += `
            <div class="propaganda" onclick="confirmarCompra()">
                <img class="imagem" src="${resposta.data[i].image}" alt="">
                <p><strong>Criador:</strong> ${resposta.data[i].owner}</p>
            </div>
        `

    }
}

function requisicaoPostApi() {
    let objetoPedido = {
        model: modeloSelecionado,
        neck: golaSelecionada,
        material: tecidoSelecionado,
        image: urlInput,
        owner: nomeUsuario,
        author: nomeUsuario
    }
    const promisePedido = axios.post(urlPost, objetoPedido)
    promisePedido.then(sucesso => alert("Sua encomenda foi realizada"))
    promisePedido.catch(error => console.log("Ops, não conseguimos processar sua encomenda"))
}


function recolherNome() {
    nomeUsuario = prompt("Digite o seu nome")

}
recolherNome();

function selecionarModelo(classeBotãoModelo) {
    modeloSelecionado = document.querySelector(".modelo-selecionado")

    if (modeloSelecionado !== null) {
        modeloSelecionado.classList.remove("modelo-selecionado");
    }
    modeloSelecionado = classeBotãoModelo;
    const modelo = document.querySelector("." + classeBotãoModelo);
    modelo.classList.add("modelo-selecionado")
    ativarBotao();
}

function selecionarGola(classeBotãoGola) {
    golaSelecionada = document.querySelector(".gola-selecionado")
    if (golaSelecionada !== null) {
        golaSelecionada.classList.remove("gola-selecionado");
    }
    golaSelecionada = classeBotãoGola;
    const gola = document.querySelector("." + classeBotãoGola);
    gola.classList.add("gola-selecionado")
    ativarBotao();
}

function selecionarTecido(classeBotãoTecido) {
    tecidoSelecionado = document.querySelector(".tecido-selecionado")
    if (tecidoSelecionado !== null) {
        tecidoSelecionado.classList.remove("tecido-selecionado");
    }

    tecidoSelecionado = classeBotãoTecido;
    const tecido = document.querySelector("." + classeBotãoTecido);
    tecido.classList.add("tecido-selecionado")
    ativarBotao();
}

function confirmarPedido() {
    let botaoConfirmacao = document.querySelector(".confirmacao");

    botaoConfirmacao.classList.add("confirmado")

    mostrarRoupas();

}


function ativarBotao() {
    if (validadorUrl === true && modeloSelecionado !== null && golaSelecionada !== null && tecidoSelecionado !== null) {

        confirmarPedido();

    } else {
    }

}

function validarInput() {
    let url;
    let input = document.querySelector("input").value
    urlInput = input;

    try {
        url = new URL(input);
    } catch (_) {
        return false;
    }
    validadorUrl = true
    ativarBotao();
    return url.protocol === "http:" || url.protocol === "https:";
}

function soltarAlerta() {
    let possuiConfirmacao = document.querySelector(".confirmacao")
    if (possuiConfirmacao.classList.contains("confirmado")) {
        confirm("Deseja efetuar a compra?")
        requisicaoPostApi();
        requisicaoGetApi();
    }
}

function confirmarCompra(){
    confirm("Deseja realizar o pedido?")
}
