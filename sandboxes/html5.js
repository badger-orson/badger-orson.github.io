/*
This is where I am going to set up my html tag info.
*/


function drawLine() {
    var line = document.getElementById("canvas");

    var ctx = line.getContext("2d");

    //now we have to say where we want to start drawing, we are going to draw a straight line here.
    // 0,0 is the top left corner.
    ctx.moveTo(1000,250);
    ctx.lineTo(0,250);
    ctx.stroke();
}

function drawCircle() {
    var circle = document.getElementById("canvas");

    var ctx = circle.getContext("2d");

    ctx.beginPath()
    ctx.arc(500,250, 10, 0, 2*Math.PI);
    ctx.fill() // this is what actually puts the arc on the canvas to see.

    var ctx1 = circle.getContext("2d");
    
        ctx1.beginPath()
        ctx1.arc(950,50, 10, 0, 2*Math.PI); // Circles are drawn by giving them position and then a radius and a starting angle, and ending one.
        ctx1.stroke()
}


function drawTriangle() {
    var triangle = document.getElementById("canvas");

    var ctx = triangle.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(400, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(250, 400);
    ctx.fill();

}

function drawStrokeText() {
    var txt = document.getElementById("canvas");

    var c = txt.getContext("2d");
    c.font = "25px Times";
    c.strokeText("Dot with triangle on horizon", 30, 450);
}

//This concludes the study of the sandbox for html5 tags and canvas