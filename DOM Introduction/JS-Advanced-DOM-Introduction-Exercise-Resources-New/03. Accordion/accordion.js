function toggle() {

    let elementText=document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if (button.textContent==='More') {

        button.textContent='Less';

        elementText.style.display='block';
    }else{

        button.textContent='More';
        
        elementText.style.display='none';
    }
}