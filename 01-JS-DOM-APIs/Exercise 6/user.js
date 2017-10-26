function manipulatingDom() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                objectResponse = JSON.parse(xhr.responseText);
                var table = document.getElementById("idAndEmails");
                var tr = document.createElement("tr");
                table.appendChild(tr);
                var th = document.createElement("th");
                var id = document.createTextNode("ID");
                th.appendChild(id);
                tr.appendChild(th);
                var thTwo = document.createElement("th");
                var email = document.createTextNode("Email");
                thTwo.appendChild(email);
                tr.appendChild(thTwo);
                for (var i = 0; i < objectResponse.length; i++) {
                    var data = objectResponse[i];
                    createTableContent(data);
                    function createTableContent() {
                        var row = document.createElement("tr");
                        var id = document.createElement("td");
                        var idContent = document.createTextNode(data.id);
                        id.appendChild(idContent);
                        row.appendChild(id);
                        var email = document.createElement("td");
                        var emailContent = document.createTextNode(data.email);
                        email.appendChild(emailContent);
                        row.appendChild(email);
                        table.appendChild(row);
                    }
                }

            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
}

manipulatingDom();