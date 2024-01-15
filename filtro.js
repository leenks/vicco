function openFilterModal() {
    var modal = document.getElementById('filterModal');
    modal.style.display = 'block';
}

// Fecha o modal quando clica no Xis
function closeFilterModal() {
    var modal = document.getElementById('filterModal');
    modal.style.display = 'none';
}

// Fecha o modal quando clica fora dele
window.onclick = function (event) {
    var modal = document.getElementById('filterModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Efeito de slide na caixa
function openFilterModal() {
    var modal = document.getElementById('filterModal');
    modal.style.display = 'block';
    modal.classList.add('slideIn'); // Adiciona a classe de animação
}

// CARDS MODOS DE LISTAGEM
let modoExibicao = 'card';

function alterarModo() {
    modoExibicao = modoExibicao === 'card' ? 'lista' : 'card';
    atualizarModoExibicao();
}

function atualizarModoExibicao() {
    const cardsContainer = document.querySelector('.cards-container');

    if (modoExibicao === 'card') {
        cardsContainer.classList.remove('modo-lista');
    } else {
        cardsContainer.classList.add('modo-lista');
    }

    // Pega a referência do ícone
    const iconElement = document.getElementById('modo-icon');

    // Alterna entre os ícones de lista e large no mobile
    if (modoExibicao === 'lista') {
        iconElement.classList.remove('fa-th-large');
        iconElement.classList.add('fa-th-list');
    } else {
        iconElement.classList.remove('fa-th-list');
        iconElement.classList.add('fa-th-large');
    }
}

