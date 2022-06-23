function editElement(element, match, replacer) {

    const text = element.textContent;

    const matcher = new RegExp(match, 'g');

    const edited = text.replace(matcher, replacer);
    
    element.textContent = edited;
}