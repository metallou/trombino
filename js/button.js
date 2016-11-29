"use strict"

let changeColor = function(coll, color){

    for(let i=0; i<coll.length; i++)
    {
        coll[i].style["background-color"] = color;
    }
}

let animatedAsideMenu = function(){
    let aColl = document.getElementsByClassName("un");
    let bColl = document.getElementsByClassName("deux");
    let cColl = document.getElementsByClassName("trois");

    document.getElementById("un").addEventListener('click', function(){
        changeColor(aColl, '#FF0000');
        changeColor(bColl, '');
        changeColor(cColl, '');
    });

    document.getElementById("deux").addEventListener('click', function(){
        changeColor(aColl, '');
        changeColor(bColl, '#FFFF00');
        changeColor(cColl, '');
    });

    document.getElementById("trois").addEventListener('click', function(){
        changeColor(aColl, '');
        changeColor(bColl, '');
        changeColor(cColl, '#0000FF');
    });

    document.getElementById("reset").addEventListener('click', function(){
        changeColor(aColl, '');
        changeColor(bColl, '');
        changeColor(cColl, '');
    });
}

document.addEventListener("DOMContentLoaded", animatedAsideMenu);
