"use strict"

let phomail = function() {
    let pho = document.getElementsByClassName("iconpho");
    let mail = document.getElementsByClassName("iconmail");

    for(let i=0; i<pho.length; i++) {
        pho[i].addEventListener("click", function() {
            document.getElementById(pho[i].id+"n").classList.toggle("selected");
            document.getElementById(pho[i].id.substr(0,6)+"mail").classList.remove("selected");
        });
    }
    for(let i=0; i<mail.length; i++) {
        mail[i].addEventListener("click", function() {
            document.getElementById(mail[i].id+"l").classList.toggle("selected");
            document.getElementById(mail[i].id.substr(0,6)+"phon").classList.remove("selected");
        });
    }
}

document.addEventListener("DOMContentLoaded", phomail);
