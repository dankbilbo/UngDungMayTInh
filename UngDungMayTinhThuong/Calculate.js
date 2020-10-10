function Addition()
{
    let a = parseFloat(document.getElementById("Textbox1").value);
    let b = parseFloat(document.getElementById("Textbox2").value);
    var result = a + b;
    document.getElementById("1").innerHTML = result.toString();

}
function Subtraction()
{
    let a = parseFloat(document.getElementById("Textbox1").value);
    let b = parseFloat(document.getElementById("Textbox2").value);
    var result = a - b;
    document.getElementById("1").innerHTML = result.toString();
}
function Multiplication()
{
    let a = parseFloat(document.getElementById("Textbox1").value);
    let b = parseFloat(document.getElementById("Textbox2").value);
    var result = a * b;
    document.getElementById("1").innerHTML = result.toString();
}
function Division()
{
    let a = parseFloat(document.getElementById("Textbox1").value);
    let b = parseFloat(document.getElementById("Textbox2").value);
    var result = a / b;
    document.getElementById("1").innerHTML = result.toString();
}
