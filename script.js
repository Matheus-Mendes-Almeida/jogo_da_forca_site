const palavras = ['gato', 'cachorro', 'elefante', 'girafa'];
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6;
const letrasCorretas = [];
const letrasErradas = [];

document.getElementById('palavraForca').innerHTML = '_ '.repeat(palavraSecreta.length);
document.getElementById('tentativas').textContent = tentativas;

function atualizarTela() {
    const palavraDisplay = palavraSecreta.split('').map(letra => letrasCorretas.includes(letra) ? letra : '_').join(' ');
    document.getElementById('palavraForca').textContent = palavraDisplay;
    document.getElementById('tentativas').textContent = tentativas;

    if (palavraDisplay === palavraSecreta) {
        alert('Parabéns! Você adivinhou a palavra!');
        window.location.reload();
    }

    if (tentativas <= 0) {
        alert('Game over! A palavra era: ' + palavraSecreta);
        window.location.reload();
    }
}

function tentativa(letra) {
    if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
    } else {
        if (!letrasErradas.includes(letra)) {
            tentativas--;
            letrasErradas.push(letra);
        }
    }
    document.getElementById(letra).disabled = true;
    atualizarTela();
}

const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
alfabeto.forEach(letra => {
    const botao = document.createElement('button');
    botao.textContent = letra;
    botao.id = letra;
    botao.addEventListener('click', () => tentativa(letra));
    document.getElementById('alfabeto').appendChild(botao);
});
