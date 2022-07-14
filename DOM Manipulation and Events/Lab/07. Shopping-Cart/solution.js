function solve() {
   
   let shoppingCardElements = document.querySelector('.shopping-cart');
   shoppingCardElements.addEventListener('click', onClick);
   let outputTextArea = shoppingCardElements.querySelector('textarea');

   let totalPrice = 0;
   let productNamesOutput = [];

   function onClick(event) {

      if (event.target.tagName == 'BUTTON' && event.target.className == 'add-product')
      {
         let productName = event.target.parentNode.parentNode.children[1].querySelector('.product-title').textContent;
         let productPrice = Number(event.target.parentNode.parentNode.children[3].textContent);

         outputTextArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         totalPrice += productPrice;

         if (!productNamesOutput.includes(productName)) {
            productNamesOutput.push(productName);
         }
      }
      else if (event.target.tagName == 'BUTTON' && event.target.className == 'checkout') {

         let addButtons = shoppingCardElements.querySelectorAll('.add-product');
         
         for (const button of addButtons) {
            button.disabled = true;
         }
         
         outputTextArea.value += `You bought ${productNamesOutput.join(', ')} for ${totalPrice.toFixed(2)}.\n`;   
      }
   }
}