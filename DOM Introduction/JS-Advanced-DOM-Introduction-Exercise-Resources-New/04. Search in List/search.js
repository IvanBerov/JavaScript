function search() {

   let listElements = document.getElementById('towns').getElementsByTagName('li');

   let searchText = document.getElementById('searchText').value;

   let matches = 0;

   for (let index = 0; index < listElements.length; index++) {
      
      if ((listElements[index].textContent).includes(searchText)) {

         matches++;

         listElements[index].style.fontWeight='bold';

         listElements[index].style.textDecoration='underline';
      }
   }

   document.getElementById('result').textContent = `${matches} matches found`;
}
