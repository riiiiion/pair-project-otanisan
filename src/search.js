
window.keyOfSearch = '';

function no() {
    console.log("no");
    window.keyOfSearch = '';
    window.location.href = './display.html';
}

function yes() {
    window.keyOfSearch = '';
    window.location.href = './search.html';
}

function searchWithKey() {
    const inputEl = document.getElementById('search_word');
    window.keyOfSearch = inputEl.value;
    console.log(inputEl.value);
    //locaction.href = 'display.html';
}

/* EOF */