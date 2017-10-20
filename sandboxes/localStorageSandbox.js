// This sandbox is for learning
//               v
// Local Storage API, Storing and Retrieving Simple Data, Arrays, Associative Arrays, and Objects


function localStorage() {
    // There are a few different storage techniques

    //First session storage non-persistent after closing page.
        //To set the storage  
    sessionStorage.setItem("thing 1", "bill")
    console.log("Setting session Storage"); // Just a message to state info was stored
        //To get the storage, if it was not stored then it will say undefined.    
    console.log("Get Session Storage: " + sessionStorage.getItem("thing 1")); 

    sessionStorage.removeItem("thing 1"); // This removes it from the session Storage.


    //Set the localStorage. No expiriation after closing page or browser;
    console.log("Set the localStorage " + (localStorage.userName = "bob"));
    console.log("Get Local Storage " + localStorage.userName); //Retrieve From LocalStorage
    // I don't know why but I cannot get the localStorage.setItem() to work or the getItem()


    //Since localStorage.removeItem() will not work, I set it to null hence removing it.;
    localStorage.userName = null;
    console.log("Removed from local storage: " + localStorage.userName);

    //Storing an array of info
    var newArray = new Array();
    newArray.push(2);
    newArray.push(3);
    newArray.push(5);
    newArray.push(6);
    newArray.push(7);

    //storing the array into the sessionStorage
    sessionStorage.setItem("newArray", newArray);
    console.log(sessionStorage.getItem("newArray"));

    //try to get data out of array
    arrayString = sessionStorage.getItem("newArray");
    var array2 = new Array();
    array2 =  arrayString.split(","); //splits the string at the ,
    console.log(array2);

    //so now that we know that we can store the normal array what about a associative array/object.

    var associativeArray = {"friends": [
        {"name": "David", "surname":"Truscott"},
        {"name": "Jake", "surname": "Robertson"},
        {"name": "Samantha", "surname" : "Stavist"}                        
        ]};

    sessionStorage.setItem("object" , JSON.stringify(associativeArray)); //have to store it in a string.
    console.log(sessionStorage.getItem("object"));

    //what about storing an object with a method?
    
    var object2 = {
        att1: "value",
        name: "Orson",
        method: function() {
            x = 5;
            return x;
        }
    }

    //store it in the sessionStorage.
    sessionStorage.setItem("object2", JSON.stringify(object2));
    console.log(sessionStorage.getItem("object2"));

    //storing an object with a method will not work correctly, becayse the method is not stored.


    //ok now lets try to break the code.

    //null value
    sessionStorage.setItem("",null); 
    console.log(sessionStorage.getItem("")); //no crash just returns null

    //null key and null value
    sessionStorage.setItem(null,null);
    console.log(sessionStorage.getItem(null));// again no crashing, just a null

    //null key
    sessionStorage.setItem(null, "Hello");
    console.log(sessionStorage.getItem(null)); //This still returns the right info.

    //Two empty Keys
    sessionStorage.setItem("",""); 
    console.log(sessionStorage.getItem("")); //This works just it gives us a blank line in console or empty string

    //Non-existing object
    console.log(sessionStorage.getItem("I don't Like keys")); // does not break, just a null

    //passing in a function
    // sessionStorage.setItem(localStorage(),"");
    // console.log(sessionStorage.getItem(localStorage())); 
    //this does not break it just recursivley calls my function I made.


    //This concludes this sandbox




    








}


localStorage();
