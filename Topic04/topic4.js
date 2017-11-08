function sLS() {
    let tLS = document.getElementById('tAreaLS').value;
    localStorage.setItem('tArea', tLS);
}

function rLS() {
    let tLS = document.getElementById('tAreaLS').value;
    localStorage.removeItem('tArea');
    document.getElementById('tAreaLS').value = '';
}

let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let db;
let tDB = indexedDB.open('tAreaDB', 1);

tDB.onupgradeneeded = function (e) {
    db = e.target.result;
    if (!db.objectStoreNames.contains('text')) {
        db.createObjectStore('text', { autoIncrement: true });
    }
};

tDB.onerror = function (e) {
    console.log('A wild Error has appeared: ' + e);
};

tDB.onsuccess = function (e) {
    db = e.target.result;
    console.log("It works!: " + db);
};

function sTextDB() {
    let transaction = db.transaction(['text'], 'readwrite');
    let store = transaction.objectStore('text');
    let content = document.getElementById('tAreaDB').value;
    let request = store.put(content);
    request.onerror = function (e) {
        console.log('Cant add text + e.target.error.name);
    }
    request.onsuccess = function (e) {
        console.log('Succes!');
    }
}
function rTextDB() {
    let transaction = db.transaction(['text'], 'readwrite');
    let store = transaction.objectStore('text');
    store.clear();
    document.getElementById('tAreaDB').value = ''
    console.log('You killed the text!');
}


let holder = document.getElementById('holder');

holder.ondragover = function () {
    this.className = 'hover';
    return false;
};
holder.ondragend = function () {
    this.className = '';
    return false;
};
holder.ondrop = function (e) {
    this.className = '';
    e.preventDefault();

    var file = e.dataTransfer.files[0],
        reader = new FileReader();
    reader.onload = function (event) {
        console.log(event.target);
        holder.innerText = event.target.result;
    };
    console.log(file);
    reader.readAsText(file);

    return false;
};