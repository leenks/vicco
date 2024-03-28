document.addEventListener('DOMContentLoaded', function() {
    // Oculta a tabela assim que o DOM estiver pronto
    var tabela = document.getElementById('tabelaGrupos');
    tabela.style.display = 'none';

    // Define o modo de exibição inicial
    var modoExibicao = 'cards';
});

function alterarModo() {
    // Obtém referências aos elementos
    var cards = document.querySelectorAll('.card');
    var tabela = document.getElementById('tabelaGrupos');
    var visualizacaoBtn = document.getElementById('visualizacaoBtn');

    // Verifica se a tabela está visível
    if (tabela.style.display === 'none') {
        // Mostra a tabela
        tabela.style.display = 'block';
        // Oculta os cards
        cards.forEach(function(card) {
            card.style.display = 'none';
        });
        // Altera o ícone do botão de visualização para lista
        visualizacaoBtn.innerHTML = '<span class="fas fa-th-list"></span> &nbsp; VISUALIZAÇÃO';
    } else {
        // Oculta a tabela
        tabela.style.display = 'none';
        // Mostra os cards
        cards.forEach(function(card) {
            card.style.display = 'block';
        });
        // Altera o ícone do botão de visualização para large
        visualizacaoBtn.innerHTML = '<span class="fas fa-th-large"></span> &nbsp; VISUALIZAÇÃO';
    }  
}
