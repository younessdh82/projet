const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const button = document.getElementById("button");


console.log(name);
console.log(email);
console.log(password);
console.log(button);

button.addEventListener("click", function() {
    console.log("Button clicked");
    console.log("Name: " ,name.value);
    console.log("Email: " , email.value);
    console.log("Password: " ,password.value);

    alert("Name: " + name.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
}

