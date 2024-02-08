document.addEventListener('DOMContentLoaded', function () {
    // Função para adicionar o cabeçalho fixo com dias do mês
    function adicionarCabecalhoFixo() {
        const wraper = document.querySelector('.wraper');

        const cabecalhoFixo = document.createElement('div');
        cabecalhoFixo.classList.add('cabecalho-fixo');

        const linhaGanttPrimeiro = document.createElement('div');
        linhaGanttPrimeiro.classList.add('linha-gantt-primeiro');
        cabecalhoFixo.appendChild(linhaGanttPrimeiro);

        const spanVazio = document.createElement('span');
        spanVazio.style.minWidth = '14%';
        cabecalhoFixo.appendChild(spanVazio);

        const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        meses.forEach((mes) => {
            const spanMes = document.createElement('span');
            spanMes.textContent = mes;
            cabecalhoFixo.appendChild(spanMes);
        });

        wraper.insertBefore(cabecalhoFixo, wraper.firstChild);
    }

    // Chame a função para adicionar o cabeçalho fixo
    adicionarCabecalhoFixo();


    // Função para adicionar linhas ao gráfico Gantt
    function adicionarLinhasGantt() {
        const ganttChart = document.getElementById('gantt-chart');

        const posicoesBarras = [
            { colunas: '3/11', cor: 'linear-gradient(90deg, #2ecaac 10%, #0000ff 10%)', texto: '- Previsto em: 28 de Outubro', imgSrc: 'user.png', nomeUsuario: 'Bernardo da Silva' },
            { colunas: '2/5', cor: 'linear-gradient(90deg, #2ecaac 50%, #ffff00 50%)', texto: 'Previsto para: 10 de Abril', imgSrc: 'user2.png', nomeUsuario: 'Raul Ferreira' },
            { colunas: '2/6 ', cor: '#ff6252', texto: '- Previsto para: 31 de Março', listras: true, imgSrc: 'user3.png', nomeUsuario: 'Laís Maria' },
            { colunas: '3/5', cor: 'linear-gradient(90deg, #2ecaac 80%,  #ffff00 20%)', texto: '5 de Abril', imgSrc: 'user3.png', nomeUsuario: 'Virgílio Jeanes' },
            { colunas: '3/8', cor: 'linear-gradient(90deg, #2ecaac 50%, #54c6f9 50%)', texto: 'Projeto longo', imgSrc: 'user.png', nomeUsuario: 'Kaito Campos' },
            { colunas: '4/9', cor: '#ff6252', texto: 'Um título', listras: true, imgSrc: 'user3.png', nomeUsuario: 'Kátia Waterworth' },
            { colunas: '2/3', cor: 'linear-gradient(90deg, #2ecaac 100%)', texto: '15 de Janeiro', imgSrc: 'user.png', nomeUsuario: 'Novo Usuário 1' },
            { colunas: '6/9', cor: 'linear-gradient(90deg, #2ecaac 50%, #ffcf0f 50%)', texto: '20 de Junho', imgSrc: 'user2.png', nomeUsuario: 'Novo Usuário 2' },
            { colunas: '2/9', cor: '#ff6252', texto: '5 de Abril', listras: true, imgSrc: 'user3.png', nomeUsuario: 'Novo Usuário 3' },
        ];


        posicoesBarras.forEach((item) => {
            const linhaGantt = document.createElement('div');
            linhaGantt.classList.add('linha-gantt');

            const primeiroElemento = document.createElement('div');
            primeiroElemento.classList.add('linha-gantt-primeiro');

            const fotoUsuario = document.createElement('div');
            fotoUsuario.classList.add('linha-gantt-foto');
            fotoUsuario.innerHTML = `<img src="${item.imgSrc}" alt="${item.nomeUsuario}">`;
            primeiroElemento.appendChild(fotoUsuario);

            const textoUsuario = document.createElement('div');
            textoUsuario.innerHTML = `${item.nomeUsuario}`;
            primeiroElemento.appendChild(textoUsuario);

            linhaGantt.appendChild(primeiroElemento);

            const barrasGantt = document.createElement('ul');
            barrasGantt.classList.add('linha-gantt-barras');

            const barra = document.createElement('li');
            if (item.listras) {
                barra.style.cssText = `grid-column: ${item.colunas}; background-color: ${item.cor};`;
                barra.classList.add('listras');
            } else {
                barra.style.cssText = `grid-column: ${item.colunas}; background: ${item.cor};`;
            }
            barra.textContent = item.texto;
            barrasGantt.appendChild(barra);

            // Adicione o ícone de localização clicável
            const localizacaoIcone = document.createElement('div');
            localizacaoIcone.classList.add('icone-localizacao');
            localizacaoIcone.innerHTML = '<i class="fa-solid fa-location-dot" style="color: #007bff;"></i>';
            localizacaoIcone.style.backgroundColor = '#f0f0f0';
            localizacaoIcone.style.width = '30px';
            localizacaoIcone.style.heighth = '20px';
            localizacaoIcone.style.padding = "10px 0 0 15px"
            localizacaoIcone.style.borderRadius = '50%';

            // Adicione um evento de clique para lidar com a ação desejada
            localizacaoIcone.addEventListener('click', function () {
                // Adicione aqui o código que você deseja executar quando o ícone for clicado
                alert('Ícone de localização clicado para ' + item.nomeUsuario);
            });

            barrasGantt.appendChild(localizacaoIcone);

            linhaGantt.appendChild(barrasGantt);

            ganttChart.appendChild(linhaGantt);
        });
    }

    // Chame a função para adicionar as linhas ao carregar a página
    adicionarLinhasGantt();

    // Adicionar o dayline começando do cabeçalho
    const wraper = document.querySelector('.wraper');
    const dayline = document.createElement('div');
    dayline.classList.add('dayline');
    wraper.insertBefore(dayline, wraper.firstChild);
});