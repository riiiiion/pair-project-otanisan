'use strict';

//window.keyOfSearch = '';

let id = 0;

function search() {
    const inputEl = document.getElementById('searchWord');
    sessionStorage.setItem('searchWord', inputEl.value);
    location.href = 'display.html';
}

function next() {
    const favoliteWord = localStorage.getItem('favoliteWord');
    sessionStorage.setItem('searchWord', favoliteWord);
    location.href = './display.html';
}

window.addEventListener('click', () => {
    if (id !== 0) {
        clearInterval(id);
        id = 0;
    }
});

window.addEventListener('load', () => {
    const favoliteWord = localStorage.getItem('favoliteWord')
    const pEl = document.getElementById('message');
    const message ='※10秒経過後自動的に' + favoliteWord + 'のニュースを表示します。';
    pEl.innerText = message;

    id = window.setInterval(next, 10000);
});




/* EOF */