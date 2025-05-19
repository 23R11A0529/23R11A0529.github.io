const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];
function submitForm() {
  const cardNumber = document.getElementById("cardNumber").value;
  const pin = document.getElementById("pin").value;
  const errorMsg = document.getElementById("errorMsg");

  if (users[cardNumber] && users[cardNumber].pin === pin) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("userName").textContent = users[cardNumber].name;
    document.getElementById("welcomeScreen").style.display = "flex";
  } else {
    errorMsg.textContent = "Invalid card number or PIN.";
  }
}
