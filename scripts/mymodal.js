// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
        
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];

var button = document.getElementsByClassName("dodaj")[0];
var button1 = document.getElementsByClassName("dodaj1")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

button.onclick = function() {
    updateSettings()
}

button1.onclick = function() {
    let pizda = 1;
    addMeasurement()    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal1) {
    modal.style.display = "none";
    modal1.style.display = "none";
  }
}