// Esquema Simples para minimizar o Sidebar/ barra de menu na esquerda //
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var sidebarIcon = document.getElementById("sidebar-icon");

    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {
        sidebarIcon.classList.remove("fa-arrow-left");
        sidebarIcon.classList.add("fa-arrow-right");
    } else {
        sidebarIcon.classList.remove("fa-arrow-right");
        sidebarIcon.classList.add("fa-arrow-left");
    }
}

// Lógica para abrir balão quando clica em notificações//
function toggleNotifications() {
    var popup = document.getElementById("notification-popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";

    // Ocultar o círculo de notificações
    var badge = document.getElementById("notification-badge");
    badge.style.display = "none";
}

// Função para simular a captura de dados em tempo real
function simularCapturaDados(bloco) {
    // Gerar um número aleatório entre 1 e 100 (simulando dados)
    const dadosSimulados = Math.floor(Math.random() * 100) + 1;

    // Atualizar o conteúdo do bloco com os dados simulados
    bloco.innerHTML = `
        <div class="dados-container">
            <i class="fas fa-chart-pie" style="font-size: 60px; color: #3498db;"></i> <!-- Ícone de gráfico -->
            <p class="dados-label">Dados em tempo real:</p>
            <p class="dados-valor">${dadosSimulados}</p>
        </div>
    `;
}

// Função para simular a captura de dados em tempo real para todos os blocos
function simularCapturaTodosBlocos() {
    // Obter todos os elementos com a classe 'block'
    const blocos = document.querySelectorAll('.block');

    // Iterar sobre cada bloco e chamar a função de simulação
    blocos.forEach((bloco) => {
        // Alterar o estilo do bloco para ajustar na página
        bloco.style.width = '200px'; // ajustar largura
        bloco.style.margin = '10px'; // adicionar margem
        bloco.style.display = 'inline-block'; // exibir em linha
        bloco.style.verticalAlign = 'top'; // alinhar ao topo

        // Chamar a função para simular a captura de dados em tempo real para cada bloco
        simularCapturaDados(bloco);
    });

    // Chamar a função a cada 5 segundos (5000 milissegundos)
    setTimeout(simularCapturaTodosBlocos, 5000);
}

// Chamar a função para iniciar a simulação
simularCapturaTodosBlocos();