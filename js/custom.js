function toggleBox(id) {
	$(id).toggleClass("box-p-toggle");
}

//Get the button:
mybutton = document.getElementById("Btt");
navBar = document.getElementById("navbarid");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
	mybutton.style.animationName = "forwardsAnim";
	mybutton.style.animationDuration = "500ms";
	mybutton.style.animationFillMode = "forwards";
	
  } else {
	mybutton.style.animationName = "backwardsAnim";
	mybutton.style.animationDuration = "500ms";
	mybutton.style.animationFillMode = "forwards";
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});