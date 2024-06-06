function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function backspace() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.substring(0, screen.value.length - 1);
}

function calculateResult() {
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Erro';
    }
}