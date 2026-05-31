// Selecionando os elementos do DOM
const numberInput = document.getElementById('numberInput');
const convertButton = document.getElementById('convertButton');
const resultadoDiv = document.getElementById('resultado');

// Adicionando o evento de clique no botão
convertButton.addEventListener('click', () => {
    // Pega a quantidade de séries digitada
    const totalSeries = parseInt(numberInput.value);

    // Limpa os checkboxes gerados anteriormente
    resultadoDiv.innerHTML = '';

    // Validação simples para o caso de o campo estar vazio ou zerado
    if (isNaN(totalSeries) || totalSeries <= 0) {
        return;
    }

    // Loop para criar apenas os checkboxes
    for (let i = 0; i < totalSeries; i++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('anilha'); // O CSS cuida de todo o visual agora

        // Injeta o checkbox direto na div resultado
        resultadoDiv.appendChild(checkbox);
    }
});