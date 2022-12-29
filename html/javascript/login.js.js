function connexion() {
    // var password = "admin",
    // login = "test@gmail.com";
    var pwd = document.getElementById("mdp").value,
        login1 = document.getElementById("mail").value,
        pwdValidate = document.getElementById("mdpValidate").value;


    if (pwd == "" && pwdValidate == "" && login1 == "") {
        alert("L'email et le mot de passe ne sont pas bien renseigner");
    }
    if (login1 == "") {
        alert("Saisir un mail valide");
    } else if (pwd == "") {
        alert("Saisir un mot de passe valide");
    }
    if (pwd != pwdValidate) {
        alert("Aucune correspondance de mot de passe")
    }

    if ((pwd != "") && (pwd == pwdValidate)) {

        window.location = "../html/index.html";
    } else if (login1 == login || pwd != pawdValidate) {
        alert("Vérifier le mot de passe");
    }

    if ((password == pwd) && (login == login1)) {
        alert("Bienvenue !!!");
    } else {
        alert("Login ou mot de passe incorrect");
    }
}