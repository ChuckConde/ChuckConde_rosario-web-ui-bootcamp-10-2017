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
        console.log('Cant add text + e.target.error.name');
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
function sMsg() {
    let ws = new WebSocket('ws://demos.kaazing.com/echo');
    let msg = document.getElementById('msg').value;
    if (!msg) {
        document.getElementById('answer').innerHTML += `<p>You have to write something!</p>`;
        return;
    }

    ws.onopen = function () {
        ws.send(msg);
        document.getElementById('answer').innerHTML += `<p>You wrote: ${msg}</p>`;
    };

    ws.onmessage = function (e) {
        var receivedMsg = e.data;
        document.getElementById('answer').innerHTML += `<p>You recived: ${receivedMsg}</p>`;
    };

    ws.onclose = function () {
        console.log('Closed');
    };

    window.onbeforeunload = function (e) {
        socket.close();
    };
}


function drawCanvas() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = randomColor();
        ctx.fillRect(0, 100, 80, 50);
        ctx.fillStyle = randomColor();
        ctx.fillRect(90, 50, 80, 50);
        ctx.fillStyle = randomColor();
        ctx.fillRect(180, 0, 80, 50);
        for (let i = 0; i < Math.random() * 100; i++) {
            ctx.fillStyle = randomColor();
            ctx.beginPath();
            ctx.arc((Math.random() * 300), (Math.random() * 300), 10, 0, (Math.PI * 2), false);
            ctx.fill();
        }
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
}

drawCanvas();