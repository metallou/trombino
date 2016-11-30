"use strict"

let changeColor = function(coll, color){

    for(let i=0; i<coll.length; i++)
    {
        coll[i].style["background-color"] = color;
    }
}

let animatedAsideMenu = function(){
    //Networks
    let aColl = document.getElementsByClassName("github");
    let bColl = document.getElementsByClassName("linkedin");
    let cColl = document.getElementsByClassName("viadeo");
    //Skills

    document.getElementById("github").addEventListener('click', function(){
        changeColor(aColl, '#FF0000');
        changeColor(bColl, '');
        changeColor(cColl, '');
    });

    document.getElementById("linkedin").addEventListener('click', function(){
        changeColor(aColl, '');
        changeColor(bColl, '#FFFF00');
        changeColor(cColl, '');
    });

    document.getElementById("viadeo").addEventListener('click', function(){
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
