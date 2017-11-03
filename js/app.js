/*
 * Funcionalidad de tu proyecto
 */
var modal = document.getElementById('modal');
var modalTech = document.getElementById('modalTech');

var dropdown = document.getElementById('dropDown');
    dropdown.addEventListener("click", modalOpen);

var dropDownTech = document.getElementById('dropDownTech');
    dropDownTech.addEventListener("click", modalOpen);

var close = document.getElementById("close");
    close.addEventListener("click", modalClose);

var closeTech = document.getElementById("closeTech");
    closeTech.addEventListener("click", modalClose);

function modalOpen(){
   modalTech.style.display = "block";
 }

function modalClose() {
   modal.style.display = "none";
}
