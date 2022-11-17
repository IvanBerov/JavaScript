function encodeAndDecodeMessages() {
    
    let buttons = document.getElementsByTagName('button');
    let text = document.getElementsByTagName('textarea');

    let encodeButtonEl = buttons[0];
    encodeButtonEl.addEventListener('click', encode);

    let decodeButtonEl = buttons[1];
    decodeButtonEl.addEventListener('click', decode);

    let decodeTextArea = text[1];

    function encode(){

        let encodeTextArea = text[0];
        
        const message = encodeTextArea
            .value
            .split('')
            .map((x) => x.charCodeAt(0) + 1)
            .map((x) => String.fromCharCode(x))
            .join('');

            encodeTextArea.value = '';
            
            decodeTextArea.value = message;
    }

    function decode(){

        const message = decodeTextArea
        .value
        .split('')
        .map((x) => x.charCodeAt(0) - 1)
        .map((x)=>String.fromCharCode(x))
        .join(''); 

        decodeTextArea.value = message;
    }
}