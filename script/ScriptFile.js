$(document).ready(function()   { 

//Used to check if the side nav has been manually open or closed;
let navOpen = false;
sideNav();

$(window).resize(sideNav);

function sideNav()
{
        //Opening and closing the side nav. 
        if(window.innerWidth <= 768)
        {
            //open up side nav on = MENU click.
            $('.toggleNav').on('click', function(){
                $('#mySidenav').css('width', '250px');
                $('.landing-page').css("opacity", "0.5");
                navOpen = true;
            });

            //Close side nav if X is clicked.
            $('.closebtn').on('click', function(){
    
                $('#mySidenav').css('width', "0px");
                $('.landing-page').css("opacity", "1");
                navOpen = false;
    
            });
        }
    
        /* Close the side nav if the user resizes the window
           > 786 if they didn't close it manually via the X
            button. */
        if(window.innerWidth > 768 && navOpen)
        {
            $('#mySidenav').css('width', "0px");
            $('.landing-page').css("opacity", "1");
    
        }
        /*Reopen the side nav if the user resizes the window
          less than 768 and didn't manually close it before
          via the X button */
        else if(window.innerWidth <= 768 && navOpen)
        {
            $('#mySidenav').css('width', '250px');
            $('.landing-page').css("opacity", "0.5");
        
        }   
}


/* Smooth scrolling */ 
$('a[href^="#"]').on('click', function(event) {

    //Prevent = MENU from throwing an air when toggle nav is click because of #.
    if(event.currentTarget.className == "toggleNav")
        return;

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
   
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1500);

        //If the user clicks link with side nav, make sure to close it.
        if(navOpen){
        $('#mySidenav').css('width', "0px");
        $('.landing-page').css("opacity", "1");
         navOpen = false;
        }
        

    }
});

 /* Sliding in work containers */

 //Only registers a few scroll events at a time.
function debounce(func, wait = 15, immediate = true) {
        var timeout;
        return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
    }


const slideInWorkExp = document.querySelectorAll('.work-container');

function checkSlide(e) {
    
        slideInWorkExp.forEach(workExp => {
            //half way through the div
            const slideInAt = (window.innerHeight + window.scrollY) - workExp.clientHeight / 2;
            //bottom of the div;
            const workBottom = workExp.offsetTop + workExp.clientHeight;
            const isHalfShown = slideInAt > workExp.offsetTop;
            const isNotScrollPast = window.scrollY < workBottom;
            if(isHalfShown && isNotScrollPast)
            {
                workExp.classList.add('active');
            }
            else{
                workExp.classList.remove('active');
            }
        });
    }

if(window.innerWidth > 1024)
{
    window.addEventListener('scroll', debounce(checkSlide));
}
else
{
    slideInWorkExp.forEach(workExp => {
        workExp.classList.add('active');
    })
}


/*hovering over contact section */

const contact_links_a = document.querySelectorAll('.contact-hover');

function addBorder(e) {
const div = document.querySelector(`div[data-contact="${e.srcElement.id}"]`);
// relatedTarget.classList.add('testt')
div.classList.add('contact-mouseenter');

}


function removeBorder(e) {
    const div = document.querySelector(`div[data-contact="${e.srcElement.id}"]`);
div.classList.remove('contact-mouseenter');
}
contact_links_a.forEach(link => link.addEventListener('mouseenter', addBorder))
contact_links_a.forEach(link => link.addEventListener('mouseleave', removeBorder))


});