// ÁREA DE PIX

// Seleciona o botão pelo seu ID
const copyButton = document.getElementById('copyButton');

// Adiciona um ouvinte de eventos ao botão para que, quando clicado, execute a função copyText
copyButton.addEventListener('click', copyText);

// Função que será chamada quando o botão for clicado
function copyText() {
    // Seleciona a caixa de texto pelo seu ID
    const textToCopy = document.getElementById('textToCopy');

    // Seleciona o conteúdo da caixa de texto
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');

    // Alerta o usuário que o texto foi copiado (opcional)
    alert('Texto copiado para a área de transferência!');
}

