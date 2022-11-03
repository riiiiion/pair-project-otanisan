
window.addEventListener('load', () => {
    let favorite = localStorage.getItem('favoriteWord');
    if ( ! favorite) {
        favorite = '大谷翔平';
        localStorage.setItem('favoriteWord', favorite);
    }
    
    const pEl = document.getElementById('favoriteWord');
    pEl.innerText = favorite + 'に関するニュースですか？';
});


function yes() {
    console.log("yes");
    const favoriteWord = localStorage.getItem('favoriteWord')
    sessionStorage.setItem('searchWord', favoriteWord);
    location.href = './display.html';
}

function no() {
    console.log("no");
    sessionStorage.removeItem('searchWord');
    location.href = './search.html';
}