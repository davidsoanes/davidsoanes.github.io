//Disable image right click
(function ($) {
  $(document).on("contextmenu", "img", function () {
    return false;
  });
})(jQuery);

var client = {
  init: function () {
    var o = this;

    // this will disable dragging of all images
    $("img").mousedown(function (e) {
      e.preventDefault();
    });

    // this will disable right-click on all images
    $("body").on("contextmenu", function (e) {
      return false;
    });
  },
};

lightbox.addEventListener("click", (e) => {
  //remove this to make image box clickable to return
  //if (e.target !== e.currentTarget) return
  lightbox.classList.remove("active");
});

//Back to top button

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
