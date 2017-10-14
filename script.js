/* Simple registration form for an airline company. Asks the user for a username and password and checks whether they are valid.
Does not save username and password to external file but yells at the user if the username is less than eight characters or the passwords
do not match.

Version 1.1.0 - Dylan Nichols 2017 */

// connects the input from the form to js variables
let username = document.querySelector("#username")
let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
let submit = document.querySelector("#submit")

// checks the value of the username box and yells if it is less than 8 characters
let  ValidateUsername = ()  => {
    if (username.value.length < 8) {
        document.querySelector("#tooshort").innerHTML = "Your username must be at least 8 characters"
        document.querySelector("#success").innerHTML = "Please try again"
    } else {
        return true;
    }
}

// checks the values of the password boxes and yells if they are not the same
let ValidatePassword = () => {
    if (pass1.value != pass2.value) {
        document.querySelector("#nomatch").innerHTML = "Your passwords must match"
        document.querySelector("#success").innerHTML = "Please try again"
    } else {
        if (ValidateUsername()) {
            document.querySelector("#success").innerHTML = "Username and Password have been set"
        }
    }
}

// resets the error/success messages when submit is clicked and then calls the functions to validate the username and password
let submitForm = () => {
    document.querySelector("#tooshort").innerHTML = ""
    document.querySelector("#nomatch").innerHTML = ""
    document.querySelector("#success").innerHTML = ""
    ValidateUsername()
    ValidatePassword()
}

submit.addEventListener('click', (e) => {submitForm(); e.preventDefault()}) // when the submit button is clicked, call the above function

    