
window.addEventListener('load', () => {
    let favolite = localStorage.getItem('favoliteWord');
    if ( ! favolite) {
        favolite = '大谷翔平';
        localStorage.setItem('favoliteWord', favolite);
    }
    
    const pEl = document.getElementById('favoliteWord');
    pEl.innerText = favolite + 'に関するニュースですか？';
});


function yes() {
    console.log("yes");
    const favoliteWord = localStorage.getItem('favoliteWord')
    sessionStorage.setItem('searchWord', favoliteWord);
    location.href = './display.html';
}

function no() {
    console.log("no");
    sessionStorage.removeItem('searchWord');
    location.href = './search.html';
}