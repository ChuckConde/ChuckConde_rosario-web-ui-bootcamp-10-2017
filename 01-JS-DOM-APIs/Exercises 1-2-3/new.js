function showNinja(){
    document.getElementById("ninja").style.visibility = "visible";
}
window.onload = showNinja;

function callSamurai(){
    alert("I'm a samurai, nothing like ninja");
}
function chuckJoke() {
    config = {
        method: "GET",
        url: "http://api.icndb.com/jokes/random",
        async: "true"
    };
    return onClick(config);
}

function onClick(config) {
    const xhttp = new XMLHttpRequest();
    xhttp.open(config.method, config.url, config.async);
    xhttp.onload = function (e) {
        if (this.readyState == 4 && this.status == 200) {
            const answer = JSON.parse(xhttp.response);
            const ans = answer.value;
            document.getElementById("ninja").innerText = ans.joke;
        } else {
            document.getElementById("ninja").innerText = xhttp.statusText;
            document.getElementById("ninja").style.backgroundColor = "red";
        }
    }
    xhttp.onerror = function (e) {
        document.getElementById("ninja").innerText = xhttp.statusText;
        document.getElementById("ninja").style.backgroundColor = "red";
    };
    xhttp.send();
};