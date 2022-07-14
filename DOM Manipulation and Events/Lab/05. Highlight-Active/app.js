function focused() {

    let inputElements = document.querySelectorAll('input[type="text"]');

    Array.from(inputElements).forEach((e) => {
        e.addEventListener('focus', focusElement);
        e.addEventListener('blur', focusElement);
    });

    function focusElement(e) {

        let targetElement = e.target.parentElement;

        if (targetElement.classList.contains('focused')) {
            targetElement.classList.remove('focused');

        } else {
            targetElement.classList.add('focused');
        }
    }
}