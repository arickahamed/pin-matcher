function generatePin() {
    var pin = Math.ceil(Math.random() * 10000);
    document.getElementById("show-pin").value = pin;
}

function buttonClicked() {
    var click = document.getElementsByClassName("button").innetHTML;
    document.getElementById("match-pin").innetHTML = click;
    console.log(click);
}



