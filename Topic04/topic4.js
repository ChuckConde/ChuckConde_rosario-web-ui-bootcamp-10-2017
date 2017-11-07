function sLS() {
    let tLS = document.getElementById('tAreaLS').value;
    localStorage.setItem('tArea', tLS);
}

function rLS() {
    let tLS = document.getElementById('tAreaLS').value;
    localStorage.removeItem('tArea');
    document.getElementById('tAreaLS').value = '';
}