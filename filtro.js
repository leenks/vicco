// Efeito de slide na caixa de filtro
function openFilterModal() {
    var modal = document.getElementById('filterModal');
    modal.style.display = 'block';
    modal.classList.add('slideIn'); // Adiciona a classe de animação
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
// Adiciona o filtro à lista de filtros selecionados
function adicionarFiltro(nomeFiltro) {
    const filtrosSelecionados = document.querySelector('.filtros-selecionados');
    // FALTA MONTAR AQUI

}

// CARDS MODOS DE LISTAGEM
let modoExibicao = 'card';

function alterarModo() {
    if (modoExibicao === 'card') {
        modoExibicao = 'lista';
        atualizarModoExibicao();
    } else if (modoExibicao === 'lista') {
        modoExibicao = 'simples';
        atualizarModoExibicao();
    } else {
        modoExibicao = 'card';
        atualizarModoExibicao();
    }
}

function atualizarModoExibicao() {
    const cardsContainer = document.querySelector('.cards-container');

    // Remove todas as classes de modo
    cardsContainer.classList.remove('modo-lista', 'modo-simples');

    // Adiciona a classe do modo atual
    if (modoExibicao === 'lista') {
        cardsContainer.classList.add('modo-lista');
    } else if (modoExibicao === 'simples') {
        cardsContainer.classList.add('modo-simples');
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

    // Verifica se está em um dispositivo móvel
    if (window.innerWidth <= 768) {
        // Esconde o botão de visualização
        const visualizacaoBtn = document.querySelector('.visualizacao');
        visualizacaoBtn.style.display = 'none';
    } else {
        // Garante que o botão de visualização esteja visível em outras larguras de tela
        const visualizacaoBtn = document.querySelector('.visualizacao');
        visualizacaoBtn.style.display = 'block';
    }
}


