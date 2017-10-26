function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);} 
      else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }
  function getCORSRequest(url){
      return new Promise(function(resolve,reject){
          var xhr = createCORSRequest('GET', url)
          if (!xhr){
              reject("CORS isn't supported for your browser");

          }
          xhr.onload = function (){
              resolve(JSON.parse(xhr.responseText));
          }
          xhr.onerror = function (){
              reject("A wild error has appeared!")
          }
          xhr.send();
      })
  }

  function repositories(value){
      var list = document.getElementById('exit');
      exit.innerText = "";
      var url = "https://api.github.com/search/repositories?q="+ value;
      getCORSRequest(url).then(function (response){
          for (var i = 0; i < response.items.length; i++){
            var first = document.createElement("li");
            var second = document.createElement("a");
            second.href = response.items[i].html_url;
            var textFirst = document.createTextNode(response.items[i].name)
            second.appendChild(textFirst);
            first.appendChild(second);
            exit.appendChild(first);
          }
      }).catch(function error(){
          console.log(error)
      })

  }