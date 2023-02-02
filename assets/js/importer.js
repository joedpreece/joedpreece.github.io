console.log(window.location.href)

$(function(){
    $("#header").load("/assets/html/header.html");
});

$(function(){
    $("#footer").load("/assets/html/footer.html");
});

$(function(){
    $("#menu").load("/assets/html/menu.html");
});

document.getElementById("year").innerHTML = new Date().getFullYear();