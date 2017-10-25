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
            const response = JSON.parse(xhttp.response);
            const resp = response.value;
            console.log(resp.id);
            console.log(resp.joke);
            document.getElementById("ninja").innerText = resp.joke;
        } else {
            console.error(xhttp.statusText);
            document.getElementById("ninja").innerText = xhttp.statusText;
            document.getElementById("ninja").style.backgroundColor = "red";
        }
    }
    xhttp.onerror = function (e) {
        console.error(xhttp.statusText);
        document.getElementById("ninja").innerText = xhttp.statusText;
        document.getElementById("ninja").style.backgroundColor = "red";
    };
    xhttp.send();
};