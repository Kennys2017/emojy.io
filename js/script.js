let getJsonFile = (pathToFile) => {
    let request = new XMLHttpRequest();
    request.open("GET", pathToFile, false);
    request.send(null);
    let my_JSON_object = JSON.parse(request.responseText);
    return my_JSON_object;
};
let stroke = '';
let emoji = document.getElementsByClassName("searchBlock")[0];
/*Document представляет собой любую веб-страницу, загруженную в браузер, и служит точкой входа в содержимое веб-страницы, которое представляет собой дерево DOM*/
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");
str(allEmoji); /*преобразование в строку */
    function str(array){
        stroke = '';
    for(let i = 0; i<array.length;i++){
        stroke += 
      `<div  class ="searchBlob"> /*создание блока с эмоджи*/ 
      <h2 class="symbol">${array[i].symbol}</h2>
      <h3>${array[i].title}</h3>
      <p>${array[i].keywords}</p>
         </div>`;      
    }
    emoji.innerHTML = stroke; 
        /*Свойство интерфейса Element innerHTML устанавливает или получает HTML или XML разметку дочерних элементов.*/
}
   
    document.querySelector("#place").oninput = function(){ 
/*метод querySelector() возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращает значение null. */
    let value = this.value.trim();
 /*Свойство контекста выполнения кода, которое в нестрогом режиме всегда является ссылкой на объект, а в строгом режиме может иметь любое значение.*/
    let item = allEmoji.filter(element => element.title.includes(value) || element.keywords.includes(value));
        str(item);
/*element- Текущий обрабатываемый элемент в массиве. index -Необязательный Индекс текущего обрабатываемого элемента в массиве.*/
}
