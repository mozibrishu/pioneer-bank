// Login Button Event Handler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit Button Event Handler
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);    
    document.getElementById("deposit-amount").value = ""
})

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id);
    const currentNumber = parseFloat(current.innerText);
    const total = depositNumber + currentNumber;
    current.innerText = total;
}
