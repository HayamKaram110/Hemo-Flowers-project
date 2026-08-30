let email = document.querySelector("#email");

let password = document.querySelector("#password");

let remember = document.querySelector("#remember");

let loginBtn = document.querySelector("#sign_in");

// Get registered user data

let getFirstName = localStorage.getItem("firstName");

let getLastName = localStorage.getItem("lastName");

let getEmail = localStorage.getItem("email");

let getPassword = localStorage.getItem("password");

loginBtn.addEventListener("click", function (e) {

e.preventDefault();


// Check empty fields

if (

    email.value.trim() === "" ||

    password.value === ""

) {

    alert("Please Enter Your Data");

    return;

}


// Check email and password

if (

    getEmail &&

    getPassword &&

    getEmail === email.value.trim() &&

    getPassword === password.value

) {

    // Login successful

    localStorage.setItem("loggedInUser", getFirstName);


    // Remember Me

    if (remember.checked) {

        localStorage.setItem("rememberMe", "true");

    } else {

        localStorage.removeItem("rememberMe");

    }


    alert("Login successful!");


    setTimeout(() => {

        window.location.href = "index.html";

    }, 1000);

}

else {

    alert("Email or password is wrong");

}

});
