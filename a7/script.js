
function submitForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("emailOutput").textContent = Email: ${email};
    document.getElementById("passwordOutput").textContent = Password: ${password};
}




