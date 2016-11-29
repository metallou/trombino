let phomail = function() {
    let pho = document.getElementsByClassName("iconpho");
    let mail = document.getElementsByClassName("iconmail");

    for(let i=0; i<pho.length; i++) {
        pho[i].addEventListener("click", function() {
            document.getElementById(pho[i].id+"n").classList.toggle("selected");
        });
    }
    for(let i=0; i<mail.length; i++) {
        mail[i].addEventListener("click", function() {
            document.getElementById(mail[i].id+"t").classList.toggle("selected");
        });
    }
}

document.addEventListener("DOMContentLoaded", phomail);
