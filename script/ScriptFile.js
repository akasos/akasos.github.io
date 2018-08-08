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
            $('.toggleNav').on('click', function(){
    
                $('#mySidenav').css('width', '250px');
                $('.landing-page').css("opacity", "0.5");
                navOpen = true;
    
            });
    
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

});

