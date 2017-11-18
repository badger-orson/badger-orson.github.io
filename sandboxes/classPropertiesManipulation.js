/*
Manipulating CSS Class Properties Using JavaScript
Author: Orson C. Badger

This is a simple study on how to change the css properties just in our javascript. As you can see there are alot of things that we can do to test the limits of our css.
*/



//This changes the color of the text of "div1", this is to see if we can make it behave a certain way if we are trying change it with a radio button.
function cssManipulation() {
    var value = document.querySelector('input[name = "r"]:checked').value;

    var textColor;

    if (value == "red") {
       textColor = document.getElementById("div1");
       textColor.style.color  = "red"
    }
    else if (value == "green") {
        textColor = document.getElementById("div1");
        textColor.style.color  = "green"
     }
     else if (value == "blue") {
        textColor = document.getElementById("div1");
        textColor.style.color  = "blue";
     }

    console.log("Status" + textColor);
    
}


//This changes the fontweight, fontStyle, and textDecoration of the text of "div1", this is to see if we can make it behave a certain way if we are trying change it with a radio button.
function cssManipulation2() {
    //Select the input by the assigned name. the :condition is what it looks for when running. This will only get the value of a checked radio button
  
    try {
        
        var value = document.querySelector('input[name = "ra"]:checked').value;
        var text;

        if (value == "bold") {
            text = document.getElementById("body");
            text.style.fontWeight = "bold";           
        }
        else if (value == "italic") {
            text = document.getElementById("body");
            text.style.fontStyle  = "italic"
        }
        else if (value == "underlined") {
            text = document.getElementById("body");
            text.style.textDecoration  = "underline";
        }
        else if (value == "reset") {
            text = document.getElementById("body");

            //Reset the values to a original values before changing them
            //text.style.textDecoration  = "none";
            text.style = "";
            //text.style.fontStyle  = "normal";
            //text.style.fontWeight = "normal";
        }

        console.log("Status" + text.style.fontStyle);
    }
    catch(e) {
        console.log(e.toString);
    }
}

//These functions are for a series of buttons to call them, this will build a webpage dynamically by altering the css properties we have set.


function cssManipulation3a() {

    //This function is going to change the background of the div
    //Here we are going to change various items in the CSS
    var a = document.getElementById("div1");
    a.style.border = "thick solid #000000";
    a.style.backgroundColor = "orange";
    a.style.padding = "50px";
}


function cssManipulation3b() {
    
    //This function is going to change the background of the div
    
    var c = document.getElementById("div2");
    c.style.backgroundColor = "gray";
    c.style.padding = "120px";
    
}

function cssManipulation3c() {
    
    //This function is going to change the background of the div
    
    var c = document.getElementById("div3");
    c.style.backgroundColor = "orange";
    c.style.borderStyle = "solid";       
    c.style.borderColor = "black";
    c.style.padding = "20px";
    c.style.margin = "0px";
    
}

function cssManipulation3d() {
    
    //This function is going to change the background of the div
    
   var d = document.getElementById("body");
   d.style.backgroundColor = "dimgray";
   d.style.borderStyle = "solid";       
   d.style.borderColor = "black";
   d.style.padding = "20px";
   d.style.margin = "0px";
   d.style.height = "100%"

   //This is the first set of Radio Buttons
    var d2 = document.getElementById("1");
    d2.style.color = "white";
    d2.style.paddingLeft = "30px";

    //This is the second set of Radio Buttons
    var d3 = document.getElementById("2");
    d3.style.color = "white";
    d3.style.paddingLeft = "30px";

    var d4 = document.getElementById("3");
    d4.style.padding = "120px" ;
    
}