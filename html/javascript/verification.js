function ver() {
    var inp1 = document.forms["formulaire"]["input1"];
    var inp2 = document.forms["formulaire"]["input2"];
    if (inp1.value == '' || inp2.value == '') {
        alert("remplir le champs");
    }
}