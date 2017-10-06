let username = document.querySelector("#username")
let pass1 = document.querySelector("#pw1")
let pass2 = document.querySelector("#pw2")
let submit = document.querySelector("#submit")

let  ValidateUsername = ()  => {
    if (username.value.length < 8) {
        document.querySelector("#tooshort").innerHTML = "Your username must be at least 8 character"
        document.querySelector("#success").innerHTML = "Please try again"
    } else {
        return true;
    }
}

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

let submitForm = () => {
    document.querySelector("#tooshort").innerHTML = ""
    document.querySelector("#nomatch").innerHTML = ""
    document.querySelector("#success").innerHTML = ""
    ValidateUsername()
    ValidatePassword()
}

submit.addEventListener('click', (e) => {submitForm(); e.preventDefault()})

    