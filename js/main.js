$(document).ready(function () {
    $(".burger").click(function (e) { 
        $(".burger").toggleClass("active")        
        $(".nav").toggleClass("active")        
    });
});

const body = document.querySelector("body")
body.addEventListener("click", function () {
    body.classList.toggle("hiden")
})