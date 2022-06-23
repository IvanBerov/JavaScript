function solve() {
  
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let result='Error!';

  if (namingConvention==='Camel Case') {

    result='';

    let words = text.split(' ');

    for (let index = 0; index < words.length; index++) {     
      if (index==0) {        
        result += words[index].toLowerCase();
      }
      else{
        result += words[index].charAt(0).toUpperCase() + words[index].toLowerCase().slice(1);
      }       
    }
  }
  else if (namingConvention==='Pascal Case') {

    result='';

    let words = text.split(' ');

    for (let index = 0; index < words.length; index++) {      
        result+=words[index].charAt(0).toUpperCase() + words[index].toLowerCase().slice(1);            
    }
  }

  document.getElementById('result').textContent = result;
}