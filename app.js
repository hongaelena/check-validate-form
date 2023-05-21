const form = document.querySelector('#form-1')
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password_confirmation = document.querySelector('#password_confirmation');
let onSuccess = true;

const messageLogPasswordConfirm = password_confirmation.parentElement.querySelector('.form-message');
const messageLogFullname = fullname.parentElement.querySelector('.form-message');
const messageLogEmail = email.parentElement.querySelector('.form-message');
const messageLogPassword = password.parentElement.querySelector('.form-message');
const validateEmail = (value) => {
    return value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
form.onsubmit = function(e) {
    //ngắt mặc định submit
    e.preventDefault();

    const valueFullName = fullname.value;
    const valueEmail = email.value;
    const valuePassword = password.value;
    const valuePasswordConfirm = password_confirmation.value;

    function success() {
        if (!valueFullName) {
            fullname.parentElement.classList.add('invalid')
            messageLogFullname.textContent = 'Bạn bắt buộc phải nhập trường này';
            onSuccess = false;
        }
        if (!valueEmail) {
            email.parentElement.classList.add('invalid')
            messageLogEmail.textContent = 'Bạn bắt buộc phải nhập trường này';
            onSuccess = false;
        }
        if (!validateEmail(valueEmail)) {
            email.parentElement.classList.add('invalid')
            messageLogEmail.textContent = 'Bạn phải nhập đúng dang email';
            onSuccess = false;
        }
        if (!valuePassword) {
            password.parentElement.classList.add('invalid')
            messageLogPassword.textContent = 'Bạn bắt buộc phải nhập mật khẩu';
            onSuccess = false;
        }
        if (valuePasswordConfirm !== valuePassword) {
            password_confirmation.parentElement.classList.add('invalid')
            messageLogPasswordConfirm.textContent = 'Không khớp với password';
            onSuccess = false;
        }
        return onSuccess;
    }


    console.log({
        valueFullName,
        valueEmail,
        valuePassword,
    });

    if (success()) {
        form.submit()
    }

}

function checkValidateFullName() {
    // fullname.onchange = (event) => {
    //     const value = event.target.value;
    //     if (!value) {
    //         //nếu if này không có value
    //         fullname.parentElement.classList.add('invalid')
    //         messageLog.textContent = 'Bạn bắt buộc phải nhập trường này';
    //         return;
    //     }
    //     fullname.parentElement.classList.remove('invalid')
    //     messageLog.textContent = '';
    // }
    fullname.onblur = (event) => {
        const value = event.target.value;
        if (!value) {
            fullname.parentElement.classList.add('invalid')
            messageLogFullname.textContent = 'Bạn bắt buộc phải nhập trường này';
            return
        }
        onSuccess = true;
        fullname.parentElement.classList.remove('invalid')
        messageLogFullname.textContent = '';
    }
}

function checkValidateEmail() {
    email.onblur = (event) => {
        const value = event.target.value;
        if (!value) {
            email.parentElement.classList.add('invalid')
            messageLogEmail.textContent = 'Bạn bắt buộc phải nhập trường này';
            return
        }
        if (!validateEmail(value)) {
            email.parentElement.classList.add('invalid')
            messageLogEmail.textContent = 'Bạn phải nhập đúng dang email';
            return
        }
        onSuccess = true;
        email.parentElement.classList.remove('invalid')
        messageLogEmail.textContent = '';
    }
}

function checkValidatePassword() {
    password.onblur = (event) => {
        const value = event.target.value;
        if (!value) {
            password.parentElement.classList.add('invalid')
            messageLogPassword.textContent = 'Bạn bắt buộc phải nhập mật khẩu';
            return;
        }
        if (value.length < 6) {
            password.parentElement.classList.add('invalid')
            messageLogPassword.textContent = 'Bạn bắt buộc phải nhập lớn hơn hoặc bằng 6 ký tự';
            return;
        }
        onSuccess = true;
        password.parentElement.classList.remove('invalid')
        messageLogPassword.textContent = '';
    }
}

function checkValidatePasswordConfirm() {
    password_confirmation.onblur = (event) => {
        const value = event.target.value;
        const password = document.querySelector('#password').value;
        if (value !== password) {
            password_confirmation.parentElement.classList.add('invalid')
            messageLogPasswordConfirm.textContent = 'Không khớp với password';
            return;
        }
        onSuccess = true;
        password_confirmation.parentElement.classList.remove('invalid')
        messageLogPasswordConfirm.textContent = '';
    }
}

checkValidateFullName();
checkValidateEmail();
checkValidatePassword();
checkValidatePasswordConfirm();