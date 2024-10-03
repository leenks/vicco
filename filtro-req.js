// Função para abrir o modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block'; // Exibe o modal
    }
}


function validateNumber(input) {
    // Remove qualquer caractere não numérico
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Função para fechar o modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Oculta o modal
    }
}

// Fecha o modal quando clica fora dele
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target === modal) {
            modal.style.display = 'none';
        }
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
        modoExibicao = 'modo-simples';
    } else if (modoExibicao === 'modo-simples') {
        modoExibicao = 'modo-simples2';
    } else {
        modoExibicao = 'card';
    }
    atualizarModoExibicao();
}

function atualizarModoExibicao() {
    const cardsContainer = document.querySelector('.cards-container');
    const iconElement = document.getElementById('modo-icon');
    const conteudoModoSimples2 = document.getElementById('conteudoModoSimples2');
    const conteudoModoSimples = document.querySelector('.conteudo-in');

    // Remove todas as classes de modo
    cardsContainer.classList.remove('modo-simples2', 'modo-simples');

    // Adiciona a classe do modo atual
    if (modoExibicao === 'modo-simples2') {
        cardsContainer.classList.add('modo-simples2');
        iconElement.classList.remove('fa-th-large');
        iconElement.classList.add('fa-th-list');
        conteudoModoSimples2.style.display = 'block'; // Exibe a tabela
        
        
    } else if (modoExibicao === 'modo-simples') {
        cardsContainer.classList.add('modo-simples');
        iconElement.classList.remove('fa-th-list');
        iconElement.classList.add('fa-th-large');
        conteudoModoSimples2.style.display = '  '; // Oculta a tabela
        conteudoModoSimples.style.display = 'block'; // Exibe o conteúdo abaixo da tabela
    } else {
        cardsContainer.classList.remove('modo-simples', 'modo-simples2'); // Remover outras classes se estiverem presentes
        iconElement.classList.remove('fa-th-list', 'fa-th-large'); // Remover outras classes se estiverem presentes
        conteudoModoSimples2.style.display = 'none'; // Ocultar a tabela
        conteudoModoSimples.style.display = 'block'; // Exibir o conteúdo abaixo da tabela
    }
}
// Verifica se o dispositivo é um dispositivo móvel
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Define o modo de exibição para "modo-simples2" se o dispositivo for móvel
if (isMobileDevice()) {
    modoExibicao = 'modo-simples2';
    atualizarModoExibicao();
}
