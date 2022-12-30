function seConnecter() {

    var motDepasse = "admin";
    var login = "etudiant@univ-thies.sn";
    var login2 = document.getElementById("nom").value;
    var motDepasse2 = document.getElementById("motDepasse").value;
    if ((motDepasse == motDepasse2) && (login == login2)) {
        alert("connexion reussi");
    } else {
        alert("connexion non reussi");
    }


}