"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../Data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();

//submit button contact page, on click event and alert
document.getElementById("redirect").onclick = function(){
    console.log("it is working");
    confirm("You will be redirected to Home Page");
    location.href = "localhost:3000/home";
};
//# sourceMappingURL=app.js.map