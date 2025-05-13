
function showData() {
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ${email} , ${number};
}