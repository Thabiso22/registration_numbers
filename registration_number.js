var addRegistration = document.querySelector("#addRegistration");
var input = document.querySelector("#textBox");
var regContainer= document.querySelector("#regNumbers");
var list =document.querySelector("#list");
//var ulRegNum= document.querySelector (".regNumbers");
 var radioButt=document.querySelector("#radioButt");

 // var cpt= radioButt.childNodes[1].value;
 // var dbn= radioButt.childNodes[3].value;
 // var jhb= radioButt.childNodes[5].value;
 // var allTowns= radioButt.childNodes[7].value;
 radioButt.addEventListener("change", function(evt){
   var regN = document.querySelectorAll("#tale");
  for(var i =0; i<regN.length; i++) {
var text= regN[i].innerHTML;
if(evt.target.value === "All") {
  regN[i].style.display = "block";
}
else if (text.startsWith(evt.target.value)) {
  regN[i].style.display="block";

}
else {
  regN[i].style.display="none";
}

}
 });

addRegistration.addEventListener("click", function  (){

var copy = document.querySelector("#tale").cloneNode();
var typed = input.value;
copy.innerHTML = typed;
var val = ["CA","CF","GP"];

for (var i = 0 ; i<val.length;i++){

if(typed.startsWith(val[i])) {
  regContainer.appendChild(copy);
  return;

}
}
console.log("Sorry not a valid regNumber");

for (var i = 0; i < regContainer.length;i++) {
  var element = regContainer[i];
  if (!element.innerHTML.startsWith(typed)) {
    element.classList.add("hidden");
  }
}
});
