// CARDS MODOS DE LISTAGEM
let modoExibicao = 'card-prod';

function alterarModo() {
    if (modoExibicao === 'card-prod') {
        modoExibicao = 'modo-simples';
    } else {
        modoExibicao = 'card-prod';
    }
    atualizarModoExibicao();
    alternarIcone();
}

function alternarIcone() {
    const iconElement = document.getElementById('modo-icon');
    
    // Verifica o modo de exibição atual e altera o ícone correspondente
    if (modoExibicao === 'modo-simples') {
        iconElement.classList.remove('fa-th-large');
        iconElement.classList.add('fa-rectangle-list');
    } else {
        iconElement.classList.remove('fa-rectangle-list');
        iconElement.classList.add('fa-th-large');
    }
}

function atualizarModoExibicao() {
    const cardsContainer = document.querySelector('.cards-container');
    const conteudoModoSimples = document.querySelector('.conteudo-in');

    // Remove todas as classes de modo
    cardsContainer.classList.remove('modo-simples');

    // Adiciona a classe do modo atual
    if (modoExibicao === 'modo-simples') {
        cardsContainer.classList.add('modo-simples');
        conteudoModoSimples.style.display = 'block'; // Exibe o conteúdo abaixo da tabela
    } else {
        cardsContainer.classList.remove('card-prod'); // Remove card pra mostrar modo simples
        conteudoModoSimples.style.display = 'block'; // Ocultar o conteúdo abaixo da tabela
    }
}
