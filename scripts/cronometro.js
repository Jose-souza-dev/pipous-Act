let tempoInicial;
let tempoDecorrido = 0;
let intervaloId;
let rodando = false;

// Mapeando os elementos do HTML
const display = document.getElementById('display');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnResetar = document.getElementById('btn-resetar');

function iniciar() {
    if (!rodando) {
        rodando = true;
        // Pega o momento exato do clique descontando o tempo que já tinha passado antes
        tempoInicial = Date.now() - tempoDecorrido;
        // Atualiza a tela a cada 10 milissegundos para manter o contador fluido
        intervaloId = setInterval(atualizarTempo, 10);

        // Ajusta os botões
        btnIniciar.disabled = true;
        btnPausar.disabled = false;
        btnResetar.disabled = false;
    }
}

function pausar() {
    if (rodando) {
        rodando = false;
        clearInterval(intervaloId);

        btnIniciar.disabled = false;
        btnPausar.disabled = true;
    }
}

function resetar() {
    rodando = false;
    clearInterval(intervaloId);
    tempoDecorrido = 0;

    // CORRIGIDO: Mantém o ID original do span ao resetar
    display.innerHTML = '00:00:<span id="milissegundos">00</span>';

    btnIniciar.disabled = false;
    btnPausar.disabled = true;
    btnResetar.disabled = true;
}

function atualizarTempo() {
    // Calcula o tempo que passou desde o clique em "Iniciar"
    tempoDecorrido = Date.now() - tempoInicial;

    // Cálculos matemáticos para extrair as partes do tempo
    let milissegundos = tempoDecorrido % 1000;
    let segundos = Math.floor((tempoDecorrido / 1000) % 60);
    let minutos = Math.floor((tempoDecorrido / (1000 * 60)) % 60);

    // Formata os números para terem sempre 2 dígitos
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');
    
    // Divide por 10 para exibir apenas 2 dígitos de milissegundos (00 a 99) em vez de 3
    milissegundos = String(Math.floor(milissegundos / 10)).padStart(2, '0');

    // Atualiza o HTML mantendo a estilização dos milissegundos
    display.innerHTML = `${minutos}:${segundos}:<span id="milissegundos">${milissegundos}</span>`;
}