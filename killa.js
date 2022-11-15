function convert(){
    var i= document.getElementById("i").value;
    var sq= i*5000;
    var bis = i*32;
    document.getElementById("sq").innerHTML = sq;
    document.getElementById("bis").innerHTML = bis;
}
function back(){
    window.location = "index.html";
}