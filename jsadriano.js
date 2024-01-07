// Desafio 1: Contador de Cliques
let contador = 0;
function aumentarContador() {
    contador++;
    document.getElementById('contador').innerText = contador;

    // Estilização conforme a faixa de valores
    let cor = contador <= 100 ? 'green' : (contador <= 150 ? 'yellow' : 'red');
    document.getElementById('contador').style.color = cor;
}

// Desafio 2: Sorteador de Números
function sortearNumero() {
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);

    // Verificar se o mínimo é menor que o máximo
    if (minimo >= maximo) {
        alert('O valor mínimo deve ser menor que o valor máximo.');
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    document.getElementById('numero-sorteado').innerText = Número Sorteado: ${numeroSorteado};
}
}

// Desafio 3: Slide de Imagens
let imagemAtual = 1;                      
function mudarImagem(delta) {
    // Lógica para mudar de imagem
}

// Desafio 4: Conversor de Temperatura
function converterTemperatura() {
    // Lógica para converter a temperatura
}