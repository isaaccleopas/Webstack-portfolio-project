/** @format */

function signIn(email, pass) {
    // variable declaraion
    user = document.querySelector('#username');
    email = document.querySelector('#email');
    pass = document.querySelector('#password');
    contact = document.querySelector('#contact');

    //errorMessage
    function errorMessage(input, message) {
        const formField = input.parentElement;
        const small = formField.querySelector('small');
        small.className = `text-danger`;
        small.innerText = message;
    }

    // successMessage
    function successMessage(input, message) {
        const formField = input.parentElement;
        const small = formField.querySelector('small');
        small.className = `success`;
        small.innerText = message;
    }

    function isRequired(inputArr) {
        let required = false;
        inputArr.forEach((input) => {
            if (input.value.trim() === '') {
                errorMessage(input, `${inputName(input)} is required`);
                required = true;
            } else {
                successMessage(input, '');
                required = false;
            }
            return required;
        });
    }

    // inputName
    function inputName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    signInForm.addEventListener('submit', (e) => {
        function submitForm(inputArr) {
            for (let input of inputArr) {
                if (input.value.trim() === '') {
                    e.preventDefault();
                }
            }
        }

        submitForm([email, pass]);

        if (isRequired([email, pass]));
    });
}
signIn();
