'use strict';



window.keyOfSearch = '';

function no() {
    console.log("no");
    window.keyOfSearch = '';
    location.href = './display.html';
}

function yes() {
    console.log("yes");
    window.keyOfSearch = '';
    location.href = './search.html';
}

function search() {
    const inputEl = document.getElementById('search_word');
    window.keyOfSearch = inputEl.value;
    console.log(inputEl.value);
    location.href = 'display.html';
}

/* EOF */