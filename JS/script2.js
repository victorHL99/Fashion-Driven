const promiseRoupas = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
promiseRoupas.then(mostrarRoupas)

function mostrarRoupas(resposta) {
    let i = 0;
    let containerRoupas = document.querySelector(".ultimos-pedidos")

    for (i; i < resposta.data.length; i++) {

        containerRoupas.innerHTML += `
            <div class="propaganda">
                <img class="imagem" src="${resposta.data[i].image}" alt="">
                <p><strong>Criador:</strong> ${resposta.data[i].owner}</p>
            </div>
        `

    }
}

