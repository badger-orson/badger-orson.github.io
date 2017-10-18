/**
 * Orson C Badger 10-16-17
 */

 //create a new function to practice XMLHttpRequest


function Sandbox() { // This is the correct way to implement the XML http request.
 //obtaining rexburgs weather

 //The stuff that the call will return is data
    var data = "http://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=410ae816ebfc530cb61e454917f053ff";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function() {
        if (http_request.readyState == 4) {
            var jsonObject = JSON.parse(http_request.responseText);
            console.log(jsonObject)
            // The info that we get here we can just make it into an object by parsing the JSON
            console.log(jsonObject.name);
            console.log(jsonObject.weather[0].description);
        }        
    };

    http_request.open("GET", data, true);
    http_request.send();
}

Sandbox();


function nastySandbox(){
    
        //nasty path attempting to get rexburgs weather data
        var data = "http://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=410ae816ebfc530cb61e454917f053ff";
        var http_request = new XMLHttpRequest();
    
        http_request.onreadystatechange = function () {
            //if you do not have a readystate here it will not execute the code. So nothing will happen
            if (http_request == 4) {
                var jsonObj = JSON.parse(http_request.responseText);
    
                console.log(jsonObj.name);
                console.log(jsonObj.weather[0].description);
            }
        };
    
        http_request.open("GET", data, true);
        http_request.send();

        http_requestTwo = new XMLHttpRequest();
        //What happens if you send a different number than 4 for a ready state

        http_requestTwo.onreadystatechange = function () {
            if (http_requestTwo.readyState == 1) {
                var obj = JSON.parse(http_requestTwo.responseText);

                console.log(obj); // Did we get anything back? No data is not transfered.
            }
        }

        http_requestTwo.open("GET", data, true);
        http_requestTwo.send();


        http_request_three = new XMLHttpRequest();
        //What happens if you send a different number than 4 for a ready state

        http_request_three.onreadystatechange = function () {
            if (http_request_three.readyState == 2) { //Data Is never sent anywhere
                var obj = JSON.parse(http_request_three.responseText);

                console.log(obj); // Did we get anything back? No data is not transfered.
            }
        }

        http_request_three.open("GET", data, true);
        http_request_three.send();

    }

nastySandbox();

function nastySandboxAgain(){
    
        //nasty path attempting to get rexburgs weather data
        var data = "http://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=410ae816ebfc530cb61e454917f053ff";
        
        //If an api works what about something that is not an api?
        //var data = "http://google.com"; has been blocked by CORS policy: No 'Access-Control-Allow-Origin' wont work!
        //var data = ""; Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https
        //var data = null; Cross origin request, wont work;
        //what about accessing a page that does not exist?  you get a 404 (Not Found) error.
        //var data = "http://api.openweathermap.org/data/2.5/SUNSHINE?zip=83440,us&appid=410ae816ebfc530cb61e454917f053ff"
        var http_request = new XMLHttpRequest();
    
        http_request.onreadystatechange = function () {
            //if you do not have a readystate here it will not execute the code. So nothing will happen
            if (http_request.readyState == 4) {
                var jsonObj = JSON.parse(http_request.responseText);
    
                console.log(jsonObj.name);
                console.log(jsonObj.weather[0].description);
            }
        };
    
        //What happens if I open my httpRequest with different information?
        // http_request.open("TRY", data, true); BAD wont even try hahah get it?
        // http_request.open("POST", data, true);  This will work, but the endpoint is nonexistent.
        // http_request.open("", data, true); Nothing good happens here
        // http_request.open("DELETE", data, true); wont work because, the endpoint does not allow deleting.
        http_request.open("GET", data, true);
        http_request.send();
        
}

nastySandboxAgain();