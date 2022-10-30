const form = document.getElementById("form");
const email = document.getElementById("email");
const errorText = document.querySelector(".error");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g

form.addEventListener("submit", function(e) {
    if(email.value === "" || email.value === null) {
        e.preventDefault();
        email.style.borderColor = "var(--Light-Red)"
        errorText.firstElementChild.innerText = "Whoops! It looks like you forgot to add your email";
    }else if(regex.test(email.value) === false) {
        e.preventDefault();
        errorText.firstElementChild.innerText = "Please provide a valid email address"
    }
})

email.addEventListener("keypress", function(e) {
    email.style.borderColor = "var(--Gray)";
    errorText.firstElementChild.innerText = "";
})