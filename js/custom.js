function toggleBox(id) {
    $(id).toggleClass("box-p-toggle");
    if ($("#js").hasClass("box-p-toggle")) {
        $("#jq").css("margin-top", "0px");
    } else {
        $("#jq").css("margin-top", "50px");
    }
}

// Function below closes the mobile nav menu on any nav element click

$(function() {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse('hide');
    });
});

//Get the button:
mybutton = document.getElementById("Btt");
navBar = document.getElementById("navbarid");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".btt").addClass("btt-show");

    } else {
        $(".btt").removeClass("btt-show");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(window).on('hashchange', function(e) {
    history.replaceState("", document.title, e.originalEvent.oldURL);
});