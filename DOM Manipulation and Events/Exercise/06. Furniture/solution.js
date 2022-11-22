function solve() {

  let [generateBtn,buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click',generate);
  buyBtn.addEventListener('click',buy);

  function generate(){

    let input = JSON.parse(document.querySelector('textarea').value);
    input.forEach(element => {

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let img = document.createElement('img');
    img.src = element.img;
    td1.appendChild(img);
    tr.appendChild(td1);
    
    let td2 = document.createElement('td');
    let p = document.createElement('p');
    p.textContent = element.name;
    td2.appendChild(p);
    tr.appendChild(td2);
    
    let td3 = document.createElement('td');
    let p2 = document.createElement('p');
    p2.textContent = Number(element.price);
    td3.appendChild(p2);
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    let p3 = document.createElement('p');
    p3.textContent = Number(element.decFactor);
    td4.appendChild(p3);
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'checkbox';
    td5.appendChild(input);
    tr.appendChild(td5);

    document.querySelector('tbody').appendChild(tr);
    });
  }

  function buy(){
  let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter(e => e.checked);
  let bought = [];
  let price = 0;
  let decoration = 0;

  checkboxes.forEach(x=>{
    let parent = x.parentElement.parentElement;
    let data = Array.from(parent.querySelectorAll('p'));
    bought.push(data[0].textContent);
    price += Number(data[1].textContent);
    decoration += Number(data[2].textContent);
  })

  let output = document.querySelectorAll('textarea')[1];
  output.textContent += `Bought furniture: ${bought.join(', ')}\r\n`;
  output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
  outüut.textContent += `Average decoration factor: ${decoration / checkboxes.length}`; 
  }

  // let buttonElements = document.getElementsByTagName('button');
  // let textareaElements = document.getElementsByTagName('textarea');
  // let parentTBodyElement = document.getElementsByTagName('tbody')[0];

  // let generateButtonElement = buttonElements[0];
  // generateButtonElement.addEventListener('click', generate);

  // let buyButtonElement = buttonElements[1];
  // buyButtonElement.addEventListener('click', buy);

  // function generate() {
  //   let generateTextAreaElement = textareaElements[0];
  //   let exampleTrElement = document.querySelector('tbody tr');

  //   JSON.parse(generateTextAreaElement.value).forEach((curr) => {
  //     let clonedTrElement = exampleTrElement.cloneNode(true);

  //     clonedTrElement.children[0].children[0].src = curr.img;
  //     clonedTrElement.children[1].children[0].textContent = curr.name;
  //     clonedTrElement.children[2].children[0].textContent = curr.price;
  //     clonedTrElement.children[3].children[0].textContent = curr.decFactor;
  //     clonedTrElement.children[4].children[0].removeAttribute('disabled');

  //     // for Judge
  //     // clonedTrElement.children[0].innerHTML = `<img src=${curr.img}>`;
  //     // clonedTrElement.children[1].innerHTML = `<p>${curr.name}</p>`;
  //     // clonedTrElement.children[2].innerHTML = `<p>${curr.price}</p>`;
  //     // clonedTrElement.children[3].innerHTML = `<p>${curr.decFactor}</p>`;
  //     // clonedTrElement.children[4].innerHTML = `<input type="checkbox"/>`;

  //     parentTBodyElement.appendChild(clonedTrElement);
  //   });

  //   generateTextAreaElement.value = '';
  // }

  // function buy() {
    
  //   let boughtFurniture = [];
  //   let totalPrice = 0;
  //   let sumlDecFactor = 0;

  //   Array.from(parentTBodyElement.children).forEach((tr) => {
  //     const isChecked = tr.children[4].children[0].checked;

  //     if (isChecked) {
  //       const name = tr.children[1].children[0].textContent;
  //       boughtFurniture.push(name);

  //       const price = Number(tr.children[2].children[0].textContent);
  //       totalPrice += price;

  //       const decFactor = Number(tr.children[3].children[0].textContent);
  //       sumlDecFactor += decFactor;
  //     }
  //   });

  //   const avgDecFactor = sumlDecFactor / boughtFurniture.length;
  //   const resultMessage = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;

  //   let buyTextAreaElement = textareaElements[1];
  //   buyTextAreaElement.value = resultMessage;
  //}
}