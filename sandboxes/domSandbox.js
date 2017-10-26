/*
    DOM Manipulation Using createElement, appendChild, insertBefore, removeChild, etc.	
    Auth
*/

function createElementBoxOSand(){
    
    // Using javascript we can create HTML tags and make them behave depending on the code that we write.
    var p = document.createElement("P");
    //lets fill it with some text.
    var text = document.createTextNode("This is a study on how the Dom works, what is possible here in javascript? Well lets find out. I think that we will be able to find some interesting things. Just so you know this paragraph was built with JavaScript SURPRISE!!! Cool huh!"); 
    // to add the text to our p tag we need to append it
    p.appendChild(text);
    //now for it to show up in our page we need to add it.
    document.body.appendChild(p);


    var h1 = document.createElement("H1");
    var h1text = document.createTextNode("Dom Manipulation with JS");
    h1.appendChild(h1text);
    document.body.appendChild(h1);

    var h2 = document.createElement("H2");
    var h2text = document.createTextNode("Dom Manipulation with JS");
    h2.appendChild(h2text);
    document.body.appendChild(h2);

    var h3 = document.createElement("H3");
    var h3text = document.createTextNode("Dom Manipulation with JS");
    h3.appendChild(h3text);
    document.body.appendChild(h3);

    var h4 = document.createElement("H4");
    var h4text = document.createTextNode("Dom Manipulation with JS");
    h4.appendChild(h4text);
    document.body.appendChild(h4);

    var h5 = document.createElement("H5");
    var h5text = document.createTextNode("Dom Manipulation with JS");
    h5.appendChild(h5text);
    document.body.appendChild(h5);

    var h6 = document.createElement("H6");
    var h6text = document.createTextNode("Dom Manipulation with JS");
    h6.appendChild(h6text);
    document.body.appendChild(h6);

    var p = document.createElement("P");
    var text = document.createTextNode("Hello This is my Java Script Paragraph It was made with JS");
    p.appendChild(text);
    document.body.appendChild(p);

    // This is a pretty dynamic to be able to  make things in just pure javascript and append them to the DOM. haha COOl;

    //Nasty Paths

    // Now how will this break
    var pippy = document.createElement("Pippy"); //will it work if I put in a bad tag name? /Yes, it does not crash but it returns "object HTMLUnknownElement";
    console.log("Pippy" + pippy);

    //What about an int?
    try{
        var int = 9000;
        document.createElement(int); // This will break it because of invalid characters.
    } catch (e){
        console.log(e.toString());
    }

    //What about an string sentence?
    try{
        var string = "Hello World, this is a test";
        document.createElement(string); // This will break it because of invalid characters. Same as int
    } catch (e){
        console.log(e.toString());
    }


// Now lets play with setAttribute
    p.setAttribute("id", "newParagraph"); // This gives my new paragraph an ID with the name of newParagraph.
    console.log(p);

    var attr = p.getAttribute("id");
    console.log(attr); // This will return the name of the id associated with it.

    //can I rename it?
    p.setAttribute("id", "newerParagraph"); // haha Totally valid to rename it.
    console.log(p);




// createTextNode 
    var testTxt = document.createTextNode("Inside of our new paragraph"); // this creates something that could be appended.
    console.log(testTxt); 

    //what about with a null

    var testTxt = document.createTextNode(null); // this just puts a string of null into the text we can append it if we wanted to for some reason.
    console.log(testTxt); 

    //what about an empty method call
    try {
        var testTxt = document.createTextNode(); // It breaks because it expects arguments. 
        console.log(testTxt); 
    } catch (e) {
        console.log(e.toString());
    }

}

createElementBoxOSand();

function learningToAppendChild() {
    // So now lets create some HTML elements to mess with appending.

    //Appending basically just adds something to the end.

    var btn = document.createElement("button");
    var p2 = document.createElement("p");
    var br = document.createElement("br");

    var btnName =document.createTextNode("Append");
    var pName = document.createTextNode("New Paragraph");
    

    btn.appendChild(btnName);  
    p2.appendChild(pName);
    p2.appendChild(br);
    p2.appendChild(btn);


    //This adds the new p2 to our old p with an id of "newerParagraph"
    var currentDiv = document.getElementById("newerParagraph");
    console.log(currentDiv);
    currentDiv.appendChild(p2);

    //Nasty Paths
    // Can I append to the same thing? NOPE haha oh well.
    //currentDiv.appendChild(currentDiv); // HierarchyRequestError (DOM Exception 3): The operation would yield an incorrect node tree. Wont work

    // What about a string of info?
    // var string = "Hello does this work?"
    // currentDiv.appendChild(string); // Argument 1 ('node') to Node.appendChild must be an instance of Node

    //Ok now a null?
    //currentDiv.appendChild(null); // same error as above, it needs a Node object to work. the node is wher the information is stored

}

learningToAppendChild();


// just make an iterator here;
var i = 0;
function insertBeforeBoxOSand() {

    var insertBeforeDiv = document.createElement("div")
    insertBeforeDiv.setAttribute("id", "parent");
    var data = document.createTextNode("==================================");
    insertBeforeDiv.appendChild(data);
    document.body.appendChild(insertBeforeDiv);


    var insertInnerDiv = document.createElement("div")
    insertInnerDiv.setAttribute("id", "child");
    var data = document.createTextNode("+++++++++++++++++++++++++++++++++++");
    insertInnerDiv.appendChild(data);
    document.body.appendChild(insertInnerDiv);


    //Create the thing to be insertedBefore.
    var el = document.createElement("p");
    el.innerHTML = "Insert Before" + i;
    
    var parent = document.getElementById("parent");
    var child = document.getElementById("newerParagraph");
    
    console.log(parent);
    console.log(child);

    parent.insertBefore(el, child);
    i++;

    

    

}

insertBeforeBoxOSand();