/** @format */

const propListForm = function (
    title,
    propertyType,
    category,
    location,
    price,
    squareMeter,
    bedRoom,
    description,
    imgUpload
) {
    // variable declaraion
    title = document.querySelector('#title');
    propertyType = document.querySelector('#property-type');
    category = document.querySelector('#category');
    location = document.querySelector('#location');
    price = document.querySelector('#price');
    squareMeter = document.querySelector('#square-meter');
    bedRoom = document.querySelector('#bedroom');
    description = document.querySelector('#descript');
    imgUpload = document.querySelector('#imgUpload');

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

    function listRequired(inputArr) {
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

    listsForm.addEventListener('submit', (e) => {
        function listSubmit(inputArr) {
            for (let input of inputArr) {
                if (input.value.trim() === '') {
                    e.preventDefault();
                }
            }
        }

        listSubmit([
            title,
            propertyType,
            category,
            location,
            price,
            squareMeter,
            bedRoom,
            description,
            imgUpload,
        ]);

        if (
            listRequired([
                title,
                propertyType,
                category,
                location,
                price,
                squareMeter,
                bedRoom,
                description,
                imgUpload,
            ])
        );
    });
};
propListForm();
