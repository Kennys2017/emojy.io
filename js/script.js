let getJsonFile = (pathToFile) => {
    let request = new XMLHttpRequest();
    request.open("GET", pathToFile, false);
    request.send(null);
    let my_JSON_object = JSON.parse(request.responseText);

    return my_JSON_object;
};
let stroke = '';
let emoji = document.getElementsByClassName("searchBlock")[0];
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");
str(allEmoji);
    function str(array){
        stroke = '';
    for(let i = 0; i<array.length;i++){
        stroke += 
      `<div  class ="searchBlob">
      <h2 class="symbol">${array[i].symbol}</h2>
      <h3>${array[i].title}</h3>
      <p>${array[i].keywords}</p>
         </div>`;      
    }
    emoji.innerHTML = stroke;
}
   
    document.querySelector("#place").oninput = function(){
    let value = this.value.trim();
    let item = allEmoji.filter(element => element.title.includes(value) || element.keywords.includes(value));
        str(item);
}
