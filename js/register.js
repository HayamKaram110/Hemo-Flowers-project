
let firstName = document.querySelector("#firstName");

let lastName = document.querySelector("#lastName");

let email = document.querySelector("#email");

let password = document.querySelector("#password");

let register_btn = document.querySelector("#register");

register_btn.addEventListener("click", function (e) {

e.preventDefault();


// Check if fields are empty

if (

    firstName.value.trim() === "" ||

    lastName.value.trim() === "" ||

    email.value.trim() === "" ||

    password.value.trim() === ""

) {

    alert("Please Enter Your Data");

} 

else {

    // Save user data in localStorage

    localStorage.setItem("firstName", firstName.value.trim());

    localStorage.setItem("lastName", lastName.value.trim());

    localStorage.setItem("email", email.value.trim());

    localStorage.setItem("password", password.value);


    alert("Registration successful!");


    // Go to Login page

    setTimeout(() => {

        window.location.href = "Login.html";

    }, 1000);

}

});
