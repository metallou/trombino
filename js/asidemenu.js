"use strict"

let changeColor = function(col, color){

    for(let i=0; i<col.length; i++)
    {
        col[i].style["background-color"] = color;
    }
}

let resetColors = function(nets, sks) {
    for(let i=0; i<nets.length; i++)
    {
        changeColor(nets[i], '');
    }
    for(let i=0; i<sks.length; i++)
    {
        changeColor(sks[i], '');
    }
}

let animatedAsideMenu = function(){
    //Networks
    let networksnames = [
                        "github",
                        "linkedin",
                        "viadeo",
                        //"wordpress",
                        //"twitter",
                        //"facebook"
                        ];
    let networks = [];
    for(let i=0; i<networksnames.length; i++) {
        networks.push(document.getElementsByClassName(networksnames[i]));
    }

    //Skills
    let skillsnames = [];
    let skills = [];
    for(let i=0; i<skillsnames.length; i++) {
        skills.push(document.getElementsByClassName(skillsnames[i]));
    }

    //Events
    for(let i=0; i<networksnames.length; i++) {
        document.getElementById(networksnames[i]).addEventListener('click', function(){
            resetColors(networks, skills);
            changeColor(networks[i], '#FFFF00');
        });
    }
    for(let i=0; i<skillsnames.length; i++) {
        document.getElementById(skillsnames[i]).addEventListener('click', function(){
            resetColors(networks, skills);
            changeColor(skills[i], '#00FFFF');
        });
    }
    document.getElementById("reset").addEventListener('click', function(){
        resetColors(networks, skills);
    });
}

document.addEventListener("DOMContentLoaded", animatedAsideMenu);
