let box = document.querySelectorAll('.box');
let selected = document.querySelectorAll('.options');
let patern = [
  ['one','two','three'],
  ['four','five','six'],
  ['seven','eight','nine'],
  ['one','four','seven'],
  ['two','five','eight'],
  ['three','six','nine'],
  ['one','five','nine'],
  ['three','five','seven'],
];
let xoutput = [];
let ooutput = [];
let current_value = '<h1>X</h1>';
let gameWon = false;

box.forEach(e => {
    e.addEventListener('click', function() {
        if (!gameWon && !this.classList.contains('Xstyle') && !this.classList.contains('Ostyle')) {
            clicked(this);
        }
    });
});

selected.forEach(e => {
    e.addEventListener('click', function() {
        if (!gameWon) {
            selecting(this);
        }
    });
});

function clicked(element){
    element.innerHTML = current_value;
    
    if(current_value === '<h1>X</h1>'){
        if(xoutput.length < 3){
            xoutput.push(element.classList[1]);
        } else {
            xoutput.shift();
            xoutput.push(element.classList[1]);
        }
        element.classList.add('Xstyle');
        current_value = '<h1>O</h1>';
    } else {
        if(ooutput.length < 3){
            ooutput.push(element.classList[1]);
        } else {
            ooutput.shift();
            ooutput.push(element.classList[1]);
        }
        element.classList.add('Ostyle');
        current_value = '<h1>X</h1>';
    }
    
    checkWinner();
}

function selecting(element) {
    if (element.innerHTML === 'X') {
        current_value = '<h1>X</h1>';
    } else {
        current_value = '<h1>O</h1>';
    }
}

function checkWinner() {
    for(let i in patern) {
        if(patern[i].every(val => xoutput.includes(val))){
            alert('X is winner');
            gameWon = true;
            break;
        } else if(patern[i].every(val => ooutput.includes(val))){
            alert('O is winner');
            gameWon = true;
            break;
        }
    }
    if (!gameWon && xoutput.length === 5) {
        alert('It\'s a draw');
    }
}
