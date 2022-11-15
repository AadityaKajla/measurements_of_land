function convert(){
    var i= document.getElementById("i").value;
    var sq= i*4840;
    var mar = i*160;
    var kan = i*8;
    document.getElementById("sq").innerHTML = sq;
    document.getElementById("mar").innerHTML = mar;
    document.getElementById("kan").innerHTML = kan;
}
function back(){
    window.location = "index.html";
}