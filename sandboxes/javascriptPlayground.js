//This is the playground for my javascript.

// Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays


// So variables in Javascript are declared with var, they are not strongly typed

var hobbit = "Bilbo Baggins"; //string

var numHobbits = 12; //This is an int

var char = 'B'; //This is a char

var bilbosDamage = 12.567 //Float 


//Loops
//Happy Path
for (var i = 0; i < 10; i++) {
    console.log("I am bob"); // this loop will print bob 10 times
}

// There are different kinds of loops in javascript the FOR, FOR/IN, WHILE, Do WHile

//NastyPath 

// for (int i = 0;  i < 10; i++) {
//      console.log("I am bob"); // This loop will not print a line because it wants var not int.
// }

// for (var i = 0;  i < 10; i++) {
//     console.log("I am bob"); 
//     i--; //This was an error so I recorded it here.DONTT DO THIS. 
// }

// for (var i = 0; i < 10; i++){
//     console.log("I am  An infinite loop");
//     i = 0; // If I set i here it will always equal 0 //This will break a page
// }



function testMyCode(){ // This is simple method with no parameters.
    console.log("This will run a method");

    var two = 2;

    console.log(two + two);
}


testMyCode(); // This is how you call a function. you just call the method name;



// Function Nasty Path
// function addTester(){

//     var iterator = 0; // ah you see this function will never execute because the iterator never itteraates

//     var adder = 3;

//     while (iterator > 0){ // Using a different kind of loop
//         adder + adder;
//         adder + 1;
//         console.log(adder);

//         if (adder == 35){  // This is a conditional statment.
//             console.log(adder);
//             return adder;
//         }


//     }

// }

//NastyPath The itterator may add at the end but it does not run, because it had no way to loop
// function addTester(){

//     var iterator = 0; // ah you see this function will never execute because the iterator never itteraates
    
//     var adder = 3;

//     while (iterator > 0){ // Using a different kind of loop
//         adder + adder;
//         adder + 1;
//         console.log(adder);

//         if (adder == 35){  // This is a conditional statment.
//             console.log(adder);
//             return adder;
//         }
//     }

//     iterator++;

// }


// function addTester(){ // IDK why this is a infinite loop // But it is a nasty path

//     for (var i = 0; ;i++) {

//         var adder = 3;

//         while (i > 0){ // Using a different kind of loop // 
//             adder + adder;
//             adder + 1;
//             console.log(adder);

//             if (adder == 35){  // This is a conditional statment. // Adder is not being added.
//                 console.log(adder);
//                 return adder;
//             }
//         }

//     }

// }

function calculateDamage(num1, num2){  // This is a function that calculates the damage 

    var sol = num1 * num2

    if (sol > 100){ //conditional statment
        console.log("Opponent Killed");
    }

    return console.log("Damage: " + sol);

}

// Parameters are something that we should account for you do not have to define, you just have to say
// what goes into the function. I imagine that this can be troublesome, because what happens if 
// I pass a string into the function

calculateDamage(bilbosDamage, numHobbits);

calculateDamage(char, hobbit); // I see this just returns NaN or Not a Number error. Why does it not break the code?

//what about if I pass in a number and a NaN still = NaN no crash.
calculateDamage(char, numHobbits);



var cars = ["Saab", "Volvo", "BMW"];


// arrays are created in a very simple context. this is the syntax for an array.

// I believe an associative array is  a array of java script objects.

// to make an object in javascript.
var myCar = {
          make: "Ford ", // variables
         model: " Mustang ",
           year: 1969,

           mailCar : function()  {return this.myCar.make;}
        };

        console.log(myCar.make + myCar.model + myCar.year);

console.log(myCar['make']); // This is another way to access an assocciative array property.
//Object Creation Functions, Inheritance, Properties, Methods, Instantiation

myCar.helloworld = "Hello worlds" // it is super easy to add a new property

console.log(myCar);

// it is just as easy to take it away
delete myCar.helloworld;
console.log(myCar);

function makeCar(name, year, model) { //this function makes a car object. I feel like the object is an associative array.
    // It gives me a key and  property to access it by.

    // An associative array is something that has a key and a value. Hence here 
    // mycar it has a key for each of the properties this is on the left hand side, it also 
    //has a value where we can access it if we needed to above you see me providing the way to access it, this is one way.
    myCar = {
        make: name,
        model: year,
        year: model
    }

    return myCar;
}


var myNewCar = makeCar("Dodge", "1968", "Viper");



console.log(myNewCar);


function makeCar(name, year, model) { //this function makes a car object. but what if it has a function?
    myCar = {
        make: name,
        model: year,
        year: model,

        mailCar : function()  {return this.myCar;}
    }


}


