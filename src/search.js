'use strict';

//window.keyOfSearch = '';

function no() {
    console.log("no");
    //window.keyOfSearch = '';
    sessionStorage.removeItem('search_word');
    location.href = './display.html';
}

function yes() {
    console.log("yes");
    //window.keyOfSearch = '';
    sessionStorage.removeItem('search_word');
    location.href = './search.html';
}

function search() {
    console.log("search");
    const inputEl = document.getElementById('search_word');
    //window.keyOfSearch = inputEl.value;
    sessionStorage.setItem('search_word', inputEl.value);
    console.log(inputEl.value);
    location.href = 'display.html';
}

/* EOF */