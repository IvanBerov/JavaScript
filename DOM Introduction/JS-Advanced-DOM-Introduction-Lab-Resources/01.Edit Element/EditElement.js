function editElement(currText, match, replacer) {

    const text = currText.textContent;

    const matcher = new RegExp(match, 'g');

    const edited = text.replace(matcher, replacer);
    
    currText.textContent = edited;
}