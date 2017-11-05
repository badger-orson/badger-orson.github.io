/* 

Standard JavaScript Events Including those for Mobile Devices ( Ex. onTouchBegin, onLoad, etc.) and Animation and Transition Events

Author: Orson C Badger
*/

function callOnLoad() {
    console.log("loaded body");
    var divs = document.getElementsByClassName("divsofworth");

    console.log(divs);
    console.log(divs.length)

    //add a touchstart event listener to my divs
    for (var i = 0; i < divs.length; i++) {
        console.log(divs[i]);
        divs[i].addEventListener("touchstart", function(event) {
            console.log("Touch Start Event");
            console.log(event.touches[0].target.id)
        })
    }

    //add a touchend event
    for (var i = 0; i < divs.length; i++) {
        console.log[i];
        divs[i].addEventListener("touchend", function(event) {
            console.log("Touch End Event");
            console.log(event);
        })
    }

    //Watch for touch movement.
    for (var i = 0; i < divs.length; i++) {
        console.log(divs[i]);
        divs[i].addEventListener("touchmove", function(event) {
            console.log("Touch Move Event");
            console.log(event.touches[0].target.id);
        })
    }


}


function onMouseOver(obj) {
    obj.innerHTML = "HAHAH MOUSE OVER!";
    var b =  document.getElementById("red");

    b.style.background = "green";
}

function onout(obj) {
    obj.innerHTML = "Run the Mouse over me....";

    var b =  document.getElementById("red");  
    b.style.background = "red";
}

//create an array here to do some fun magic, and to store a accurate amount of clicks.
var array =  [];

function onClick(obj) {

    var o = obj.id;
    array.push(o);

    if (array.length % 10 == 0)
    {
        obj.innerHTML = " Changed Color with click event % 10 = 0";
        var b =  document.getElementById("blue");

        b.style.background = "red";
    }
    else if(array.length % 3 == 0)  {
        obj.innerHTML = " Changed Color with click event % 3 = 0";
        var b =  document.getElementById("blue");

        b.style.background = "purple";
    }
    else {
        obj.innerHTML = " Changed Color with click event everything else";
        var b =  document.getElementById("blue");

        b.style.background = "blue";
    }
    
}



//Try animations with js