function validate() {

    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', check);

    function check() {

        const emailRegexValidation = new RegExp(/^[a-z]+[@][a-z]+[.][a-z]+$/);

        if (!inputElement.value.match(emailRegexValidation))
        {
            inputElement.classList.add('error');
        } 
        else
        {
            inputElement.classList.remove('error');
        }
    }
}