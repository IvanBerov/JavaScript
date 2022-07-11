function addItem() {
    let inputText = document.getElementById("newItemText");

    let items = document.getElementById("items");
  
    let inputValue = inputText.value;

    let newElement = document.createElement("li");
    
    newElement.textContent = inputValue;

    items.appendChild(newElement);

    inputText.value = '';
  }