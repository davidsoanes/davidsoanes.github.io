//Disable image right click
(function($){
	$(document).on('contextmenu', 'img', function() {
		return false;
	})
  })(jQuery);




lightbox.addEventListener('click', e => {
	//remove this to make image box clickable to return
	//if (e.target !== e.currentTarget) return
	lightbox.classList.remove('active')
})




//Back to top button

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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



//Form Validation
function form_validation()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var what =  document.forms["RegForm"]["Subject"];  
    var address = document.forms["RegForm"]["Message"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (subject.value == "")                                   
    { 
        window.alert("Please enter a message."); 
        email.focus(); 
        return false; 
    } 
   
    return true; 
}
