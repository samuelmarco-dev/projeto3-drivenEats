let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

let meuPrato = null;
let minhaBebida = null;
let minhaSobremesa = null;

let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

/* Primeiro passo, limitar o click do usuário em apenas um tipo de prato, 
seja prato principal, bebida ou sobremesa. No mais, quando o usuário clicar 
em uma opção não selecionada, devemos adicionar a classe 'selecionado' */

function selecionarOpcaoDePrato(
    pratoEscolhido,
    elementoIcone,
    nomedeExibicao,
    precoPedido
) {
    const selecionado = document.querySelector(".tipo-de-prato .selecionado");
    console.log(pratoEscolhido, selecionado, meuPrato);

    // Se a classe selecionado está na tela, devemos remover
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    // Se a classe selecionado não está na tela, devemos adicionar
    pratoEscolhido.classList.add("selecionado");

    // Informações da minha escolha
    meuPrato = pratoEscolhido;
    pratoSelecionado = nomedeExibicao;
    valorPrato = precoPedido;

    // Verificar Botao
    verificarItensSelecionado();
}

function selecionarOpcaoDeBebida(
    pratoEscolhido,
    elementoIcone,
    nomedeExibicao,
    precoPedido
) {
    console.log("bebida", pratoEscolhido);
    const selecionado = document.querySelector(".tipo-de-bebida .selecionado");
    console.log(pratoEscolhido, selecionado, minhaBebida);

    // Se a classe selecionado está na tela, devemos remover
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    // Se a classe selecionado não está na tela, devemos adicionar
    pratoEscolhido.classList.add("selecionado");

    // Informações da minha escolha
    minhaBebida = pratoEscolhido;
    bebidaSelecionada = nomedeExibicao;
    valorBebida = precoPedido;

    if (pratoEscolhido == minhaBebida) {
        selecionado?.classList.remove("selecionado");
    }

    // Verificar Botao
    verificarItensSelecionado();
}

function selecionarOpcaoDeSobremesa(
    pratoEscolhido,
    elementoIcone,
    nomedeExibicao,
    precoPedido
) {
    const selecionado = document.querySelector(
        ".tipo-de-sobremesa .selecionado"
    );

    // Se a classe selecionado está na tela, devemos remover
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    // Se a classe selecionado não está na tela, devemos adicionar
    pratoEscolhido.classList.add("selecionado");

    // Informações da minha escolha
    minhaSobremesa = pratoEscolhido;
    sobremesaSelecionada = nomedeExibicao;
    valorSobremesa = precoPedido;

    // Verificar Botao
    verificarItensSelecionado();
}

/* Segundo passo, verificar se o usuário selecionou o combo DrivenEats, 
que inclui um prato, uma bebida e uma sobremesa. A verificação será: se
os três itens foram selecionados o botão na tag <footer> te´ra background
green, caso contrário, devemos esperar até que os três itens sejam selecionados */

function verificarItensSelecionado() {
    let botaoDePedido = document.querySelector("footer .botao");

    if (meuPrato !== null && minhaBebida !== null && minhaSobremesa !== null) {
        botaoDePedido.innerHTML = "Fechar pedido";
        botaoDePedido.classList.add("texto-pedido");
        botaoDePedido.style.fontWeight = "700";
        botaoDePedido.style.backgroundColor = "rgba(50, 183, 47, 1)";
    }
}

/* Terceiro passo, após habilitar o background no botão, devemos mostrar ao 
usuário os itens que ele selecionou como combo, a partir disto, devemos enca-
minhá-lo para o WhatsApp Web do restaurante com uma mensagem pronta para ser
enviada, contendo o valor em reais do combo escolhido*/

let valorTotal = 0;

function enviarPedido() {
    let nomeUsuario = prompt("Por favor, nos informe seu nome:");
    let enderecoUsuario = prompt("Agora, nos informe seu endereço, número:");
    let bairroUsuario = prompt("Por último, nos informe seu bairro:");

    valorTotal = (valorPrato + valorBebida + valorSobremesa).toFixed(2);
    let mensagemDoPedido = window.encodeURIComponent(
        `Olá, gostaria de fazer o pedido:\n\n- Prato: ${pratoSelecionado}\n- Bebida: ${bebidaSelecionada}\n- Sobremesa: ${sobremesaSelecionada}\n\nTotal: R$ ${valorTotal}\n\nNome: ${nomeUsuario}\nEndereço: ${enderecoUsuario}\nBairro: ${bairroUsuario} - São Paulo`
    );

    window.location.href = `https://wa.me/5519994103269?text=${mensagemDoPedido}`;
}

function encaminharWhatsApp() {
    alert("Caso esteja em dúvida sobre seu combo, continue aqui...");
    const status = confirm("Gostaria de ser encaminhado para o WhatsApp?");

    if (status) {
        window.location.href = `https://wa.me/5519994103269`;
    }
}
