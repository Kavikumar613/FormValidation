let form = document.querySelector("#form");
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let confirm_password = document.querySelector('#confirm_password');
let gendermale = document.querySelector('#male');
let genderfemale = document.querySelector('#female');
let age = document.querySelector('#age');
let email = document.querySelector('#email')
let mobile_no = document.querySelector('#mobile_no');
let Country = document.querySelector('#Country');
let terms = document.querySelector('#terms');

form.addEventListener("submit", (e) => {

    if (!validateinput()) {
        e.preventDefault()
        console.log(e)
    }
})

function validateinput() {

    let username_value = username.value.trim();
    let password_value = password.value.trim();
    let confirmpassword_value = confirm_password.value.trim();
    let genderselectmale = gendermale.checked;
    let genderselectfemale = genderfemale.checked;
    let age_value = age.value.trim();
    let email_value = email.value.trim();
    let mobileno_value = mobile_no.value.trim();
    let Country_value = Country.value.trim();
    let terms_value = terms.checked;
    let success = true;
    if (username_value === "") {
        success = false;
        seterror(username, "Username is required")
    }
    else {
        success = true;
        setsuccess(username)
    }

    if (password_value === "") {
        success = false;
        seterror(password, "Password is required")
    }
    else if (password_value.length < 6) {
        success = false;
        seterror(password, "Password must be at least 6 characters long.")
    }
    else if (password_value.length > 10) {
        success = false;
        seterror(password, "Password must be maximum 10 characters long.")
    }
    else {
        success = true;
        setsuccess(password)
    }

    if (confirmpassword_value === "") {
        success = false;
        seterror(confirm_password, "Confirm Password is required")
    }
    else if (confirmpassword_value != password_value) {
        success = false;
        seterror(confirm_password, "Passwords do not match")
    }
    else {
        success = true;
        setsuccess(confirm_password)
    }

    if (!genderselectmale && !genderselectfemale) {
        success = false;
        seterror(gendermale && genderfemale, "Please select a gender")
    }
    else {
        success = true;
        setsuccess(gendermale && genderfemale)
    }

    if (age_value === "" || isNaN(age_value) || parseInt(age_value) <= 0) {
        success = false;
        seterror(age, "Please enter a valid age")
    }
    else {
        success = true;
        setsuccess(age)
    }
    if (email_value === "") {
        success = false;
        seterror(email, "Gmail is required")
    }
    else if (!validateEmail(email_value)) {
        success = false;
        seterror(email, "Please enter a valid email address")
    }
    else {
        success = true;
        setsuccess(email)
    }
    if (mobileno_value === "" || isNaN(mobileno_value) || parseInt(mobileno_value) <= 0) {
        success = false;
        seterror(mobile_no, "Please enter a valid Mobile no")
    }
    else if (mobileno_value.length !== 10) {
        success = false;
        seterror(mobile_no, "Please enter a valid 10-digit mobile number")
    }
    else {
        success = true;
        setsuccess(mobile_no)
    }
    if (Country_value === "") {
        success = false;
        seterror(Country, "Please select a country")
    }
    else {
        success = true;
        setsuccess(Country)
    }

    if (!terms_value) {
        success = false;
        seterror(terms, "You must agree to the Terms of Use")
    }
    else {
        success = true;
        setsuccess(terms)
    }
}
function seterror(element, message) {
    let input_group = element.parentElement;
    let errorElement = input_group.querySelector("#result");
    errorElement.innerHTML = message;
    input_group.classList.add('error');
    input_group.classList.remove('success');
}
function setsuccess(element) {
    let input_group = element.parentElement;
    let successElement = input_group.querySelector("#result")
    successElement.innerHTML = "";
    input_group.classList.add('success');
    input_group.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};