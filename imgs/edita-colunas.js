 document.addEventListener("DOMContentLoaded", function () {
        // Seleciona todos os botões "Editar" dentro da tabela
        var botoesEditar = document.querySelectorAll('.btn-editar-table');

        // Adiciona evento de clique a cada botão "Editar"
        botoesEditar.forEach(function (botao) {
            botao.addEventListener('click', function () {
                // Obtém a linha pai do botão clicado
                var linha = this.parentNode.parentNode;

                // Torna todas as células da linha editáveis
                linha.querySelectorAll('td').forEach(function (celula, index) {
                    if (index > 0) { // Ignora a primeira célula com os botões
                        var valorOriginal = celula.textContent;
                        celula.innerHTML = '<input type="text" value="' + valorOriginal + '">';
                    }
                });

                // Exibe os botões "Concluir" e "Excluir"
                var botaoConcluir = linha.querySelector('.btn-concluir-edicao');
                var botaoExcluir = linha.querySelector('.btn-excluir-edicao');
                botaoConcluir.style.display = 'inline-block';
                botaoExcluir.style.display = 'inline-block';

                // Oculta o botão "Editar"
                botao.style.display = 'none';
            });
        });

        // Adiciona evento de clique a cada botão "Concluir"
        var botoesConcluir = document.querySelectorAll('.btn-concluir-edicao');
        botoesConcluir.forEach(function (botao) {
            botao.addEventListener('click', function () {
                // Obtém a linha pai do botão clicado
                var linha = this.parentNode.parentNode;

                // Transforma os campos de entrada de volta em texto simples
                linha.querySelectorAll('td').forEach(function (celula, index) {
                    if (index > 0) { // Ignora a primeira célula com os botões
                        celula.textContent = celula.querySelector('input').value;
                    }
                });

                // Exibe o botão "Editar" e oculta os botões "Concluir" e "Excluir"
                var botaoEditar = linha.querySelector('.btn-editar-table');
                botaoEditar.style.display = 'inline-block';
                this.style.display = 'none';

                var botaoExcluir = linha.querySelector('.btn-excluir-edicao');
                botaoExcluir.style.display = 'none';
            });
        });

        // Adiciona evento de clique a cada botão "Excluir"
        var botoesExcluir = document.querySelectorAll('.btn-excluir-edicao');
        botoesExcluir.forEach(function (botao) {
            botao.addEventListener('click', function () {
                // Obtém a linha pai do botão clicado e remove a linha da tabela
                var linha = this.parentNode.parentNode;
                linha.remove();
            });
        });
    });