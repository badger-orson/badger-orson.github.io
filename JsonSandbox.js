function jsonBoxOSand(){ //My JSON Sanbox to play in 


    //What is Json? Json is essentially the way to make an object
    //for javascript. It has key value pairs.
    //Rules
    //Data is in name/value pairs
    //Curly braaces hold objects 

    //Happy Path
    var jsonStringExample = {"friends": [
                            {"name": "David", "surname":"Truscott"},
                            {"name": "Jake", "surname": "Robertson"},
                            {"name": "Samantha", "surname" : "Stavist"}                        
                            ]};
    console.log(jsonStringExample); //This will work because the above is already an object
    try{
    console.log(JSON.parse(jsonStringExample)); //parse out the json to a javascript Object // this will throw an error because the object is already a json
    }catch(e){
        console.log(e.toString());
    }

    var parseExample = '{ "name":"John", "age":30, "city":"New York"}';

    try{
    console.log(JSON.parse(parseExample));
    }catch(e){
        console.log(e.toString());
    }
    //JSON.parse cannot parse a non json object.

    try { //Use a try catch to not break the function. This allows it to keep running.
        console.log(JSON.parse("Hello World I am a monkey"));
    }catch(e){
        console.log(e.toString()); //Make the error a string to see what it is
    }

    //Is it possible to pass a null?
    console.log(JSON.parse(null)); //This will not throw an exception but
                                   //it will just print "null"

    //Nasty Path
    // try{
    // var badjsonExample = {"friends": [
    //     {"name": "David", "surname":"Truscott"},
    //     {"name": "Jake", "surname": "Robertson"},
    //     {"name": "Samantha", "surname" : "Stavist"}                        
    // }; //Leave out the closing brace and you are doomed...Not really just it will break
    //     // The Function wont run if I do not have the bracket but it will fail if missing Commented out to maintain broken code.
    
    //     console.log(JSON.parse(badjsonExample));
    // }catch(e)    {
    //     console.log(e.toString);
    // }

    /////////Implementation of Stringify/////////

    var jsonObj = {"friends": [
        {"name": "David", "surname":"Truscott"},
        {"name": "Jake", "surname": "Robertson"},
        {"name": "Samantha", "surname" : "Stavist"}                        
        ]}

    console.log(jsonObj);

    console.log(JSON.stringify(jsonObj));

    //Nasty Paths

    // Obviously you cannot do stringify something if it is null.
    console.log(JSON.stringify(null));

    //it wont do anything if you pass a string either
    console.log(JSON.stringify("Strings dont do much...."));

    //another thing is it does nothing if it is just
    var nothingness;
    console.log(nothingness);

}

jsonBoxOSand(); //Call the function to see it work