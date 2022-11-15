function convert(){
    var i= document.getElementById("i").value;
    var sq= i*151.25;
    var kil = i/32;
    var big = i/20;
    document.getElementById("sq").innerHTML = sq;
    document.getElementById("kil").innerHTML = kil;
    document.getElementById("big").innerHTML = big;
}
function back(){
    window.location = "index.html";
}