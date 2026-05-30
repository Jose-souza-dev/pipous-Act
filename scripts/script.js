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
    checkbox.classList.add('anilha');
    
    // Espaçamento entre eles
    checkbox.style.margin = '5px'; 

    // Escuta a mudança para aplicar a imagem apenas quando marcado
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Remove a aparência padrão apenas ao marcar para permitir o fundo personalizado
            this.style.webkitAppearance = 'none';
            this.style.appearance = 'none';
            
            // Define o tamanho para casar com o tamanho padrão e aplica a imagem
            this.style.width = '40px'; 
            this.style.height = '40px';
            this.style.backgroundImage = "url('../img/anilha-branco.png')";
            this.style.backgroundSize = 'cover';
            this.style.backgroundPosition = 'center';
            this.style.border = 'none';
        } else {
            // Quando desmarcado, volta a ser o checkbox nativo do navegador
            this.style.webkitAppearance = 'checkbox';
            this.style.appearance = 'checkbox';
            this.style.backgroundImage = 'none';
            this.style.width = 'auto';
            this.style.height = 'auto';
        }
    });

    // Injeta o checkbox direto na div resultado
    resultadoDiv.appendChild(checkbox);
}
});