const url = "./fragen/fragen.json";
let fragen = "ss"


function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}


async function doAjaxThings() {
    // await code here
    let  result = await makeRequest("GET", url);
    // code below here will only execute when await makeRequest() finished loading
   result = JSON.parse(result); 
    StartGame(result);

}




document.addEventListener("DOMContentLoaded", function () {
    result =   doAjaxThings();
    // create and manipulate your DOM here. doAjaxThings() will run asynchronously and not block your DOM rendering
    try{
        document.createElement("...");
        document.getElementById("...").addEventListener("...");
    }catch(error){
        
    }
    
});


