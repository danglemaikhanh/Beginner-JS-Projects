const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const pwError = document.querySelector('#pw-error');
const submitError = document.querySelector('#submit-error');

const nameField = document.querySelector('#fullName');
const emailField = document.querySelector('#emailAdress');
const pwField = document.querySelector('#passwort');

const popUp = document.querySelector('#pop-up');
const submitBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.close-btn');
const formReseted = document.getElementById('myForm');

const validateName = () => {
    let name = nameField.value;
    if (name.length === 0) {
        nameError.textContent = 'name is required';
        return false;
    }
    else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.textContent = 'write full name';
        return false;
    }
    else {
        nameError.innerHTML = `<i class='bx bxs-check-circle'></i>`;
        nameField.style.borderBottom = '2px solid green';
        return true;
    }
};

const validateEmail = () => {
    let email = emailField.value;
    if (email.length === 0) {
        emailError.textContent = 'email is required';
        return false;
    }
    else if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        emailError.textContent = 'email is invalid';
        return false;
    }
    else {
        emailError.innerHTML = `<i class='bx bxs-check-circle'></i>`;
        emailField.style.borderBottom = '2px solid green';
        return true;
    }
};

const validatePassword = () => {
    let pw = pwField.value;
    if (pw.length === 0) {
        pwError.textContent = 'password is required';
        return false;
    }
    else if (!pw.match(/^(?=.*\d)(?=.*[a-z]).{8,}/)) {
        pwError.textContent = 'password is too short';
        return false;
    }
    else {
        pwError.innerHTML = `<i class='bx bxs-check-circle'></i>`;
        pwField.style.borderBottom = '2px solid green';
        return true;
    }
}

submitBtn.addEventListener('click', () => {
    if (validateName() && validateEmail() && validatePassword()) {
        popUp.style.display = 'block';
        return true;
    }
    else {
        submitError.style.display = 'block';
        submitError.textContent = 'please fix error';
        setTimeout(() => {
            submitError.style.display = 'none'
        }, 3000);
        return false;
    }
});

closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
    resetForm();
});

const resetForm = () => {
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    pwError.innerHTML = '';
    nameField.style.borderBottom = ''
    emailField.style.borderBottom = '';
    pwField.style.borderBottom = '';
    formReseted.reset();
}