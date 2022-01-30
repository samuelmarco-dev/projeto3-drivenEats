/* Primeiro passo, limitar o click do usuário em apenas um tipo de prato, 
seja prato principal, bebida ou sobremesa. No mais, quando o usuário clicar 
em uma opção não selecionada, devemos adicionar a classe 'selecionado' */

function selecionarOpcaoDePrato(pratoEscolhido, elementoIcone){
    console.log(pratoEscolhido, elementoIcone);
    const selecionado = document.querySelector('.tipo-de-prato .selecionado');

    // Se a classe selecionado está na tela, devemos remover
    if(selecionado !== null){
        selecionado.classList.remove('selecionado');
    }
    // Se a classe selecionado não está na tela, devemos adicionar
    pratoEscolhido.classList.add('selecionado');
}

function selecionarOpcaoDeBebida(pratoEscolhido, elementoIcone){
    console.log(pratoEscolhido, elementoIcone);
    const selecionado = document.querySelector('.tipo-de-bebida .selecionado');

    // Se a classe selecionado está na tela, devemos remover
    if(selecionado !== null){
        selecionado.classList.remove('selecionado');
    }
    // Se a classe selecionado não está na tela, devemos adicionar
    pratoEscolhido.classList.add('selecionado');
}

function selecionarOpcaoDeSobremesa(pratoEscolhido, elementoIcone){
    console.log(pratoEscolhido, elementoIcone);
    const selecionado = document.querySelector('.tipo-de-sobremesa .selecionado');

    // Se a classe selecionado está na tela, devemos remover
    if(selecionado !== null){
        selecionado.classList.remove('selecionado');
    }
    // Se a classe selecionado não está na tela, devemos adicionar
    pratoEscolhido.classList.add('selecionado');
}

// function selecionarTipoDePrato(elementoSelecionado, elementoFigure){
//     console.log(elementoSelecionado);
//     console.log(elementoFigure);

//     const selecionado = document.querySelector(".selecionado");
//     console.log(selecionado);
//     const minhaEscolha = document.querySelector(".tipo-de-prato ." + elementoSelecionado);
//     console.log(minhaEscolha);

//     const escondido = document.querySelector(".none");
//     console.log(escondido);
//     const pratoConfirmado = document.querySelector("figure ." +elementoFigure);
//     console.log(pratoConfirmado);

//     // Se a classe selecionado está na tela, devemos remover
//     if(selecionado !== null){
//         selecionado.classList.remove("selecionado");
//     }
//     if(escondido === null){
//         escondido.classList.add("none");
//     }
    
//         // Se a classe selecionado não está na tela, devemos adicionar
//         pratoConfirmado.classList.remove("none");
//         minhaEscolha.classList.toggle("selecionado");
//         // OBS: podemos utilizar também a lógica do toggle
// }