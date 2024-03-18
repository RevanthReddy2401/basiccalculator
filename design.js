function add()
{
   var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a+b;
    document.getElementById("res").textContent=c;
}
function sub()
{
   var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a-b;
    document.getElementById("res").textContent=c;
}
function mul()
{
   var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a*b;
    document.getElementById("res").textContent=c;
}
function div()
{
   var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a/b;
    document.getElementById("res").textContent=c;
}