let inputText = document.querySelector("#input-text");
let inputButton = document.querySelector("#input-button");

inputButton.addEventListener("click", function() {
    let listItemText = inputText.value;
    // validation
    if (!listItemText || listItemText === "") return;
    console.log(listItemText);

    let list = document.querySelector("#the-list");
    let newListItem = document.createElement("li");
    let newContent = document.createTextNode(listItemText);

    newListItem.appendChild(newContent);
    list.appendChild(newListItem);
    
    inputText.value = "";

})

