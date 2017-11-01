/*
 * Funcionalidad de tu proyecto
 */
var modal = document.getElementById('modal');

var dropdown = document.getElementById('dropDown');
    dropdown.addEventListener("click", modalOpen);

var close = document.getElementById("close");
    close.addEventListener("click", modalClose);

function modalOpen(){
   modal.style.display = "block";
 }

function modalClose() {
   modal.style.display = "none";
}
