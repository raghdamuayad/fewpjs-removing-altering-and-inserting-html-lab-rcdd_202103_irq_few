// Write your code here!
let newHeader = document.createElement("h1");
//function myFunction() {
  //document.getElementById("victory").innerHTML = h1;
//}
newHeader.id="victory";
let node = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(node);
let element = document.getElementById("victory");
element.appendChild(newHeader);
