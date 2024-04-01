document.addEventListener('DOMContentLoaded', function() {
    // Oculta a tabela assim que o DOM estiver pronto
    var tabelaContainer = document.getElementById('tabelaContainer');
    tabelaContainer.style.display = 'none'; // Garante que a tabela esteja oculta inicialmente

    // Define o modo de exibição inicial
    var modoExibicao = 'cards';
});

function alterarModo() {
    // Obtém referência ao contêiner da tabela
    var tabelaContainer = document.getElementById('tabelaContainer');
    // Obtém referências aos cards
    var cardsContainer = document.querySelector('.container');

    // Obtém referência ao botão de visualização
    var visualizacaoBtn = document.getElementById('visualizacaoBtn');

    // Verifica se a tabela está visível
    if (tabelaContainer.style.display === 'none') {
        // Mostra a tabela e oculta os cards
        tabelaContainer.style.display = 'block';
        cardsContainer.style.display = 'none';

        // Altera o texto do botão de visualização
        visualizacaoBtn.innerHTML = '<span class="fas fa-th-list"></span> &nbsp; VISUALIZAÇÃO';
    } else {
        // Oculta a tabela e mostra os cards
        tabelaContainer.style.display = 'none';
        cardsContainer.style.display = 'block';

        // Altera o texto do botão de visualização
        visualizacaoBtn.innerHTML = '<span class="fas fa-th-large"></span> &nbsp; VISUALIZAÇÃO';
    }  
}