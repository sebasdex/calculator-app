//Variables
const toggle = document.querySelector('.toggle-theme');
const keyboard = document.querySelector('.keys');
const screen = document.querySelector('.screen');
const iqual = document.querySelector('.key-iquals');

// AddEvents
toggle.addEventListener('click', themeToggle);
keyboard.addEventListener('click', (e) => {
    typeScreen(e);
    operationSign(e);
    calculate(e);
    deleteScreen(e);
});


// Themes Function
function themeToggle(e) {
    const theme = document.querySelector('BODY');
    if (e.target.id === 'one') {
        theme.classList = 'dark';
    }

    if (e.target.id === 'two') {
        theme.classList = 'light';
    }

    if (e.target.id === 'three') {
        theme.classList = 'violet';
    }
}
//Variables Function
var operation = '';
var num1 = 0;
var num2 = 0;
//Calculator Function
function typeScreen(e) {
    if (e.target.classList.contains('operation-numbers')) {
        operation += e.target.textContent;        
        screen.children[0].textContent = operation;
    }

    if(e.target.textContent === 'DEL'){
        operation = '';
        screen.children[0].textContent = 0;
    }
}

function operationSign(e) {
    if (e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === 'x' || e.target.textContent === '/'){
        num1 = parseFloat(operation);        
        operation = '';        
        operation += e.target.textContent;
    }
}

function calculate(e) {
    if (e.target.textContent === '=') {
        num2 = parseFloat(operation.slice(1));        
        var res = 0;
        if (operation.includes('+')) {
            res = num1 + num2;
        } else if (operation.includes('-')) {
            res = num1 - num2;
        } else if (operation.includes('x')) {
            res = num1 * num2;
        } else if (operation.includes('/')) {
            res = num1 / num2;
        }
        operation = res.toString();
        screen.children[0].textContent = res;
    }
}

function deleteScreen(e) {
    if (e.target.textContent === 'Reset') {
        operation = '';
        screen.children[0].textContent = 0;
    }
}
