var num = parseInt(Math.random() * 10) + 1;
var num1 = parseInt(Math.random() * 10) + 1;
document.getElementById("num").value = num;
document.getElementById("num1").value = num1;
var num00 = parseInt(Math.random() * 10) + 1;
var num11 = parseInt(Math.random() * 10) + 1;
document.getElementById("num00").value = num00;
document.getElementById("num11").value = num11;
var num000 = parseInt(Math.random() * 10) + 1;
var num111 = parseInt(Math.random() * 10) + 1;
document.getElementById("num000").value = num000;
document.getElementById("num111").value = num111;
var num0000 = parseInt(Math.random() * 10) + 1;
var num1111 = parseInt(Math.random() * 10) + 1;
document.getElementById("num0000").value = num0000;
document.getElementById("num11111").value = num1111;
var num00000 = parseInt(Math.random() * 10) + 1;
var num11111 = parseInt(Math.random() * 10) + 1;
document.getElementById("num00000").value = num00000;
document.getElementById("num11111").value = num11111;
function checkPlus() {
    num = parseInt(document.getElementById("num").value);
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    if (num + num1== num2) {
        document.getElementById("msgPlus").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgPlus").innerHTML = "נסה שנית";
    }
}
function checkMinus() {
    num00 = parseInt(document.getElementById("num00").value);
    num11 = parseInt(document.getElementById("num11").value);
    num22 = parseInt(document.getElementById("num22").value);
    if (num00 - num11 == num22) {
        document.getElementById("msgPlus1").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgPlus1").innerHTML = "נסה שנית";
    }
}
function checkMul() {
    num000 = parseInt(document.getElementById("num000").value);
    num111 = parseInt(document.getElementById("num111").value);
    num222 = parseInt(document.getElementById("num222").value);
    if (num000 * num111 == num222) {
        document.getElementById("msgPlus2").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgPlus2").innerHTML = "נסה שנית";
    }
}
function checkDiv() {
    num0000 = parseInt(document.getElementById("num0000").value);
    num1111 = parseInt(document.getElementById("num1111").value);
    num2222 = parseInt(document.getElementById("num2222").value);
    if (num0000 / num1111 == num2222) {
        document.getElementById("msgPlus3").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgPlus3").innerHTML = "נסה שנית";
    }
}
function checkMod() {
    num00000 = parseInt(document.getElementById("num00000").value);
    num11111 = parseInt(document.getElementById("num11111").value);
    num22222 = parseInt(document.getElementById("num22222").value);
    if (num00000 % num11111 == num22222) {
        document.getElementById("msgPlus4").innerHTML = "יפה מאוד";
    }
    else {
        document.getElementById("msgPlus4").innerHTML = "נסה שנית";
    }
}
function checkAnswer() {
    checkPlus()
    checkMinus()
    checkMul()
    checkDiv()
    checkMod()
}
function changedrill() {
    var num = parseInt(Math.random() * 10) + 1;
    var num1 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num").value = num;
    document.getElementById("num1").value = num1;
    var num00 = parseInt(Math.random() * 10) + 1;
    var num11 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num00").value = num00;
    document.getElementById("num11").value = num11;
    var num000 = parseInt(Math.random() * 10) + 1;
    var num111 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num000").value = num000;
    document.getElementById("num111").value = num111;
    var num0000 = parseInt(Math.random() * 10) + 1;
    var num1111 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num0000").value = num0000;
    document.getElementById("num1111").value = num1111;
    var num00000 = parseInt(Math.random() * 10) + 1;
    var num11111 = parseInt(Math.random() * 10) + 1;
    document.getElementById("num00000").value = num00000;
    document.getElementById("num11111").value = num11111;
}