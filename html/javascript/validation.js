function validation() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
    if ((input1 == '') || (input2 == '') || (input3 == '')) {
        alert("veuillez remplir ce champ");
    }
}

function suivant() {
    window.history.forward();
}