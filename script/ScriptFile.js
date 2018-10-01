$(document).ready(function()
{

    /*Intro Text and SideNav*/
    let sideNavOpen = false;
    sideNav();
    $(window).resize(swapText);
    $(window).resize(sideNav);

    function swapText()
    {

        if(window.innerWidth <=768)
        {
            $("#intro-introduction").text("Austin Stephens");     
        }
        else
        {
            $("intro-introduction").text("Hello, I'am Austin Stephens");     
        }
    }

    function sideNav()
    {
        if(window.innerWidth <= 768)
        {
            $('.toggleNav').on('click', function()
            {
                $('#mySidenav').css('width', '250px');
                $('body').css('background-color', "rgba(0,0,0,0.4)");
                sideNavOpen = true;
            });

            $('.closebtn').on('click', function()
            {
                $('#mySidenav').css('width', '0px');
                $('body').css('background-color', 'rgba(0,0,0,0');
                sideNavOpen = false;
            });
        }

        if(window.innerWidth > 768 && sideNavOpen)
        {
            $('#mySidenav').css('width', '0px');
            $('body').css('background-color', 'rgba(0,0,0,0');
        }
        else if(window.innerWidth <= 768 && sideNavOpen)
        {
            $('#mySidenav').css('width', '250px');
            $('body').css('background-color', "rgba(0,0,0,0.4)");
        }
    }


    
    /* Toggle Hobbies */
    let hobbies_open = false;
    $('.dropbtn-hobbies').click(function(){
        if($('.hobbies-wrapper').is(':hidden'))
        {
            $('.hobbies-wrapper').css('display', 'flex');
            $('.hobbies-wrapper').css('margin-top', '10px');
            $('.hobbies-wrapper').css('margin-bottom', '30px');
            hobbies_open = true;

        }
        else if (!$('.hobbies-wrapper').is(':hidden'))
        {
            $('.hobbies-wrapper').css('display', 'none');
            $('.hobbies-wrapper').css('margin-top', '0px');
            $('.hobbies-wrapper').css('margin-bottom', '0px');
            hobbies_open = false;
       
        }
    });

    let width = $(window).width();
    $(window).resize(function(){
        if(window.innerWidth > 480 && width != $(window).width())
        {
            $('.hobbies-wrapper').css('display', 'flex');
            hobbies_open = false;
        }
        else if(window.innerWidth <= 480 && width != $(window).width() && !hobbies_open)
        {
            $('.hobbies-wrapper').css('display', 'none');
        }
    });


    /*Skill Width*/
  skillWidth();
  $(window).resize(skillWidth);
  function skillWidth()
   {
       let wrapper = document.getElementById('skill-box');
       let skill1 = document.getElementById('html');
       let skill2 = document.getElementById('angular');
       let skill3 = document.getElementById('java');
       skill1.style.width = `${wrapper.offsetWidth * .5}px`;
       skill2.style.width = `${wrapper.offsetWidth * .2}px`;
       skill3.style.width = `${wrapper.offsetWidth * .7}px`;
       
   
   }
  
});