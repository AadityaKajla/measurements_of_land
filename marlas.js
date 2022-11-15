function convert(){
    var i= document.getElementById("i").value;
    var sq= i*3.25;
    var sar= i*9;
    var kan= i/20;
    var ac= i/160;
    document.getElementById("sq").innerHTML = sq;
    document.getElementById("sar").innerHTML = sar;
    document.getElementById("kan").innerHTML = kan;
    document.getElementById("ac").innerHTML = ac;
}
function back(){
    window.location = "index.html";
}