function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
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
          let xhr = createCORSRequest('GET', url)
          if (!xhr){
              reject("CORS isn't supported for your browser");

          }
          xhr.onload = () =>{
              resolve(JSON.parse(xhr.responseText));
          }
          xhr.onerror = () => {
              reject("A wild error has appeared!")
          }
          xhr.send();
      })
  }

  function repositories(value){
      let list = document.getElementById('exit');
      exit.innerText = "";
      let url = "https://api.github.com/search/repositories?q="+ value;
      getCORSRequest(url).then((response) => {
          for (let i = 0; i < response.items.length; i++){
            const first = document.createElement("li");
            const second = document.createElement("a");
            second.href = response.items[i].html_url;
            let textFirst = document.createTextNode(response.items[i].name)
            second.appendChild(textFirst);
            first.appendChild(second);
            exit.appendChild(first);
          }
      }).catch(function error(){
          console.log(error)
      })

  }