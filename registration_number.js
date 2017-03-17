var addRegistration = document.querySelector("#addRegistration");
var input = document.querySelector("#textBox");
var regContainer= document.querySelector("#regNumbers");
var list =document.querySelector("#list");
var ulRegNum= document.querySelector (".regNumbers");

addRegistration.addEventListener("click", function  (){
var copy = document.querySelector(".tale").cloneNode();
copy.innerHTML = input.value;
regContainer.appendChild(copy);




});
