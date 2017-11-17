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
    console.log('Something went wrong: ' + e);
};

tDB.onsuccess = function (e) {
    db = e.target.result;
    console.log("Yay! Success: " + db);
};

function sTextDB() {
    let transaction = db.transaction(['text'], 'readwrite');
    let store = transaction.objectStore('text');
    let content = document.getElementById('tAreaDB').value;
    let request = store.put(content);
    request.onerror = function (e) {
        console.log('Unable to add text' + e.target.error.name);
    }
    request.onsuccess = function (e) {
        console.log('Text added to database!');
    }
}
function rTextDB() {
    let transaction = db.transaction(['text'], 'readwrite');
    let store = transaction.objectStore('text');
    store.clear();
    document.getElementById('tAreaDB').value = ''
    console.log('Text erased!');
}