// Write your code here!
var newHeader = document.createElement("h1");
//function myFunction() {
  //document.getElementById("victory").innerHTML = h1;
//}
document.getElementById("victory").innerHTML = "New text!";
var node = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(node);
var element = document.getElementById("victory");
element.appendChild(newHeader);
