//IIFE
(function()
{

    function Start()
    {
        console.log("App Started!");

       $("a.delete").on("click", function(event){
            if(!confirm("Are you sure?")){
                event.preventDefault();
                console.log("working");
                location.href = "/contact-list";
            }
        }); 
    }

    window.addEventListener("load", Start);

})();