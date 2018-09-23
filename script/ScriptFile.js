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




/*Project Section */

// let slideIndex = 1;
// const sm_images = document.querySelectorAll('.project-sm-pictures');
// const bg_images = document.querySelectorAll('.project-bg-pictures');
// slide_images(slideIndex);

// sm_images.forEach(function(image, currentIndex) {
//     image.addEventListener("click", currentDiv);
// });

// function currentDiv(e)
// {
//    slide_images((slideIndex = parseInt(e.srcElement.id, 10)));
// }

// function slide_images(index){

//     // if(index > bg_images.length)
//     //  slideIndex = 1;
//     // if(index < 1)
//     //  slideIndex = bg_images.length;

//     for(let i = 0; i < bg_images.length; i++)
//     {
//         bg_images[i].style.display = 'none';
//     }

//     for(let i = 0; i < sm_images.length; i++)
//     {
//         sm_images[i].style.opacity = "0.5";
//     }

//     sm_images[slideIndex-1].style.opacity = "1";
//     bg_images[slideIndex-1].style.display = "block";


// }


// const project = document.querySelector('.project-section');
// console.log((project.clientHeight - 100) / 2);

// const previousBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const bg_images = Array.from(document.querySelectorAll('.project-bg-pictures'));
// const sm_images = Array.from(document.querySelectorAll('.project-sm-pictures'));
// const carousel_width = document.querySelector('.project-sm-image-container');

// syncBigImage(bg_images, sm_images);
// setWidthOfImages(sm_images, carousel_width.clientWidth);


// previousBtn.addEventListener('click', function(){
//     slideLeft(bg_images, sm_images);
// });
// nextBtn.addEventListener('click', function() {
//     slideRight(bg_images, sm_images);
// });


// sm_images.forEach(image => image.addEventListener('click', function(){

//     slideImages(image,bg_images,sm_images);

// }));


// function slideImages(image, bg_images, sm_images)
// {

//     if(parseInt(image.getAttribute('id')) > 1)
//     slideLeft(bg_images, sm_images);
//     if(parseInt(image.getAttribute('id')) < 1)
//     slideRight(bg_images, sm_images);

// }

// function slideLeft(bg_img_array, sm_img_array) {
//  shiftArrayLeft(bg_img_array);
//  shiftArrayLeft(sm_img_array);
//  for(let i = 0; i < sm_img_array.length; i++)
//  {
//      sm_img_array[i].style.setProperty('order', i);
  
//  }

//  syncBigImage(bg_images, sm_images);

// }

// function slideRight(bg_img_array, sm_img_array) {
//   shiftArrayRight(bg_img_array);
//   shiftArrayRight(sm_img_array);
//   for(let i = 0; i < sm_img_array.length; i++)
//   {
//       sm_img_array[i].style.setProperty('order', i);
   
//   }

//   syncBigImage(bg_images, sm_images);

// }

// function shiftArrayLeft(array) {
//     let elem_1 = array.shift();
//     array.push(elem_1);
// }

// function shiftArrayRight(array) {
//     let elem_1 = array.pop();
//     array.unshift(elem_1);
// }


// function syncBigImage(bg_array, sm_array, slideIndex = 1)
// {
//     for(let i = 0; i < bg_array.length; i++)
//     {
//         bg_array[i].style.display = 'none';
//     }
//     for(let i = 0; i < sm_array.length; i++)
//     {
//         sm_array[i].style.opacity = "0.5";
//         sm_array[i].setAttribute('id', i.toString());
//     }
    
//     bg_array[slideIndex].style.display = "block";
//     sm_array[slideIndex].style.opacity = "1";
  
// }

// function setWidthOfImages(array, carousel_width)
// {
//     array.forEach(item => item.style.width = `${carousel_width / array.length / carousel_width * 100}%`);
// }

$('.project-bg-images-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.project-sm-images-container'
  });
  $('.project-sm-images-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.project-bg-images-container',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true
  });
          

// $('.project-sm-image-container').slick();

});