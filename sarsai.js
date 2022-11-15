function convert(){
    var i= document.getElementById("i").value;
    var sq= i*3.5;
    var mar= i/9;
    document.getElementById("sq").innerHTML = sq;
    document.getElementById("mar").innerHTML = mar;
}
function back(){
    window.location = "index.html";
}