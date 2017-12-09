



function addNewBill() {
    // Create a textfield 
    var input = document.getElementById("textField").value;
    
    if (!input == "") {  
    createRow(input, false);
    
    saveCurrentState();
    }
}


function checkboxAlert(checked) { 

    if (checked.checked == true) {
        console.log("Hello")
    
    
    var dive = document.createElement("div");
    var body= document.getElementById("billList");
    
    var text = document.createTextNode("CONGRATULATIONS");
   // text.setAttribute("id", "box");

    dive.setAttribute("id", "box");
    dive.style.width = "400px";
    dive.style.height = "0px";
    dive.style.backgroundColor = "";
    // dive.style.marginLeft = "70%"
    // dive.style.marginBottom = "90%"
    dive.style.textAlign = "center"

    dive.style.position = "absolute";
    dive.style.left = "40%";
    dive.style.bottom = "60%";

    dive.appendChild(text);



    //body.appendChild(dive);
    body.append(dive);


    //var div = document.getElementById(box)
    
    if(dive.style.animationPlayState == "running"){
        dive.style.animationPlayState = "paused"
        
      
    } else {
        dive.style.animationName = "roll"
        dive.style.animationPlayState = "running"
    }

    // element.addEventListener("transitionend", function(event) {
    //     element.innerHTML = "Done!";
    //   }, false);
    
      dive.addEventListener("animationend", function(event) {
        body.removeChild(dive);
      }, false);
    }

    saveCurrentState();

}


function createRow(text, checked) {

    var newListItem = document.createElement("li");
    var leftDiv = document.createElement("div");

    leftDiv.setAttribute("class" ,"leftSide");
    newListItem.appendChild(leftDiv);


    // Create a new Checkbox. next to the New Item in the list.
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "box");
    checkbox.setAttribute("id", "box");
    checkbox.setAttribute("onclick", "checkboxAlert(this)");
    if (checked){
    checkbox.setAttribute("checked", checked);
    }

    //associtate the 2 items together
    leftDiv.innerHTML = text;
    
    

    //Creae a new div to store it
    var rightDiv = document.createElement("div");
    rightDiv.setAttribute("class", "rightSide")
    rightDiv.appendChild(checkbox);

    //Append a cancel button to the end of the right div.
    var button = document.createElement("button");
    button.setAttribute("class", "button");
    button.setAttribute("onclick", "deleteRow(this)");

    button.innerHTML = "X";
    rightDiv.appendChild(button);


    // Take the info in the text field and append it to a list of Bills
    newListItem.appendChild(rightDiv);

    document.getElementById("billList").appendChild(newListItem);

}

function deleteRow(button) {
    var listeItem = button.parentElement.parentElement;

    var list = document.getElementById("billList");

    list.removeChild(listeItem);
    saveCurrentState();

}

function saveCurrentState() {

    

    var list = document.getElementById("billList");
    var items = list.getElementsByTagName("li");

    class listItem {
        constructor(text, checked) {
          this.text = text;
          this.checked = checked;
        }
      }

    var array = [];


    for ( i = 0; i < items.length; i++) {
        var text = items[i].getElementsByClassName("leftSide")[0].innerHTML;
        var checkbox = items[i].getElementsByClassName("box")[0].checked;

        var li = new listItem(text, checkbox);
        array.push(li);
    }
         
    localStorage.filesave = JSON.stringify(array);

}

function loadState() {
    var load = localStorage.filesave;
    if (load) {
        var array = JSON.parse(load);


        for (i = 0; i < array.length; i++){
            createRow(array[i].text, array[i].checked);
    }
}
}

