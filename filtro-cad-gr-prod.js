// Este bloco de código é executado quando o DOM é completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Oculta a tabela assim que o DOM estiver pronto
    var tabelaContainer = document.getElementById('tabelaContainer');
    tabelaContainer.style.display = 'none'; // Garante que a tabela esteja oculta inicialmente

    // Define o modo de exibição inicial
    var modoExibicao = 'cards';
});

// Função para alternar entre a visualização da tabela e dos cards
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

$(document).ready(function () {
    // Script para abrir/fechar o formulário de Criar Novo
    $('#btnAbrirNovo').click(function () {
        $('#formulario').slideToggle();
    });

    
// Função para buscar
function buscar() {
    // Obtém o valor digitado no campo de busca
    var termoBusca = document.getElementById("inputBusca").value.toLowerCase();

    // Obtém todos os elementos com a classe "titulo2"
    var titulos = document.querySelectorAll('.titulo2');

    // Itera sobre os elementos para verificar se o texto corresponde à busca
    for (var i = 0; i < titulos.length; i++) {
        var titulo = titulos[i].querySelector('span').innerText.toLowerCase();
        // Se o texto do título corresponder ao termo de busca, exibe o elemento pai, senão, oculta-o
        if (titulo.includes(termoBusca)) {
            titulos[i].closest(".col-md-4").style.display = "block";
        } else {
            titulos[i].closest(".col-md-4").style.display = "none";
        }
    }
}

// Função habilita a tecla Enter para agilizar a busca
function handleKeyPress(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.keyCode === 13) {
        buscar();
    }
}
});


    // Inicialização do (LISTA DE FICHAS DE GRUPO DE PRODUTOS) slick carousel 
    $(document).ready(function() {
        // Inicialização do slick carousel
        $('.carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
            nextArrow: '<button type="button" class="slick-next">Próximo</button>',
            dots: true, // Habilita os bullets de navegação
            infinite: true,
            speed: 300,
            adaptiveHeight: true,
            // Outras opções de configuração conforme necessário
        });
    });
    

    