// Login Button Event Handler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
    // Login Area Hide and transaction Area unhide
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit Button EventHandler
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
    const amount = inputAmount("deposit-amount");
    updateSpanText("currentDeposit", amount);
    updateSpanText("currentBalance", amount);
})

// withdraw Button EventHandler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
    const amount = inputAmount("withdraw-amount");
    updateSpanText("currentWithdraw", amount);
    updateSpanText("currentBalance", (-1) * amount);
})


function inputAmount(id) {
    const amount = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = '';
    return amount;
}

function updateSpanText(id, inputAmount) {
    const current = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = current + inputAmount;
}