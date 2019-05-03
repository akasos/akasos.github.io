$(document).ready(function() {
  /*Intro Text and SideNav*/
  let sideNavOpen = false;
  sideNav();
  $(window).resize(swapText);
  $(window).resize(sideNav);

  function swapText() {
    if (window.innerWidth <= 768) {
      $("#intro-introduction").text("Austin Stephens");
    } else {
      $("intro-introduction").text("Austin Stephens");
    }
  }

  function sideNav() {
    if (window.innerWidth <= 768) {
      $(".toggleNav").on("click", function() {
        $("#mySidenav").css("width", "250px");
        $("body").css("background-color", "rgba(0,0,0,0.4)");
        sideNavOpen = true;
      });

      $(".closebtn").on("click", function() {
        $("#mySidenav").css("width", "0px");
        $("body").css("background-color", "rgba(0,0,0,0");
        sideNavOpen = false;
      });
    }

    if (window.innerWidth > 768 && sideNavOpen) {
      $("#mySidenav").css("width", "0px");
      $("body").css("background-color", "rgba(0,0,0,0");
    } else if (window.innerWidth <= 768 && sideNavOpen) {
      $("#mySidenav").css("width", "250px");
      $("body").css("background-color", "rgba(0,0,0,0.4)");
    }
  }

  /*Smooth Scrolling */
  $('a[href^="#"]').on("click", function(event) {
    //Prevent = MENU from throwing an air when toggle nav is click because of #.
    if (event.currentTarget.className == "toggleNav") {
      return;
    }
    // console.log(event.currentTarget.className);

    let target = $(this.getAttribute("href"));
    console.log(target);
    if (window.innerWidth > 600) {
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 50
            },
            700
          );
      }
    }

    //If the user clicks link with side nav, make sure to close it.
    if (sideNavOpen) {
      $("#mySidenav").css("width", "0px");
      $("body").css("background-color", "rgba(0,0,0,0");
      sideNavOpen = false;
    }
  });

  /*Link highlighter */
  // const links = document.querySelectorAll('.nav-links a');
  // const highlight = document.createElement('span');
  // highlight.classList.add('highlight');
  // document.body.append(highlight);

  // function highlightLink() {
  //     console.log('test');
  //     const linkCoords = this.getBoundingClientRect();
  //     const coords = {
  //         width: linkCoords.width,
  //         height: linkCoords.height,
  //         top: linkCoords.top + window.scrollY,
  //         left: linkCoords.left + window.scrollX
  //     }
  //     highlight.style.width = `${coords.width}px`;
  //     highlight.style.height = `${coords.height}px`;
  //     highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
  //   }

  //   links.forEach(link => link.addEventListener('mouseenter', highlightLink));

  /* Toggle Hobbies */
  let hobbies_open = false;
  $(".dropbtn-hobbies").click(function() {
    if ($(".hobbies-wrapper").is(":hidden")) {
      $(".hobbies-wrapper").css("display", "flex");
      $(".hobbies-wrapper").css("margin-top", "10px");
      $(".hobbies-wrapper").css("margin-bottom", "30px");
      hobbies_open = true;
    } else if (!$(".hobbies-wrapper").is(":hidden")) {
      $(".hobbies-wrapper").css("display", "none");
      $(".hobbies-wrapper").css("margin-top", "0px");
      $(".hobbies-wrapper").css("margin-bottom", "0px");
      hobbies_open = false;
    }
  });

  /*work around for chrome mobile browser */
  let width = $(window).width();
  $(window).resize(function() {
    if (window.innerWidth > 480 && width != $(window).width()) {
      $(".hobbies-wrapper").css("display", "flex");
      hobbies_open = false;
    } else if (
      window.innerWidth <= 480 &&
      width != $(window).width() &&
      !hobbies_open
    ) {
      $(".hobbies-wrapper").css("display", "none");
    }
  });

  /*Skill Width*/
  skillWidth();
  $(window).resize(skillWidth);
  function skillWidth() {
    let wrapper = document.getElementById("skill-box");
    let skill1 = document.getElementById("html");
    let skill2 = document.getElementById("angular");
    let skill3 = document.getElementById("java");
    skill1.style.width = `${wrapper.offsetWidth * 0.5}px`;
    skill2.style.width = `${wrapper.offsetWidth * 0.2}px`;
    skill3.style.width = `${wrapper.offsetWidth * 0.4}px`;
  }

  /*Load More Projects */
  $(".project-row-wrapper")
    .slice(0, 1)
    .show();
  $(".load-projects-wrapper").on("click", function(e) {
    e.preventDefault();
    if (window.innerWidth > 600) {
      $(".project-row-wrapper:hidden")
        .slice(0, 1)
        .slideDown();
      if ($(".project-row-wrapper:hidden").length == 0) {
        $(".load-projects-wrapper").fadeOut("slow");
      }
      if (window.innerWidth > 992) {
        $("html,body").animate(
          {
            scrollTop: $(this).offset().top - 400
          },
          700
        );
      } else if (window.innerWidth > 600) {
        $("html,body").animate(
          {
            scrollTop: $(this).offset().top - 200
          },
          700
        );
      }
    } else {
      $(".project-row-wrapper:hidden")
        .slice(0, 1)
        .show();
      if ($(".project-row-wrapper:hidden").length == 0) {
        $(".load-projects-wrapper").fadeOut("slow");
      }
    }
  });

  /*Hide More Projects */
  //    $('.hide-projects-container').on('click', function(e){
  //        e.preventDefault();

  //        if($('.project-row-wrapper:visible').length > 1)
  //        {
  //         $('.project-row-wrapper:visible').slice(-1).slideUp();
  //         $('.load-projects-wrapper').fadeIn('slow');
  //        }
  //    });

  /*Google Map*/
  myMap();
  function myMap() {
    let myCenter = new google.maps.LatLng(39.7642543, -104.9955382);
    let mapCanvas = document.getElementById("googleMap");
    let mapOptions = {
      center: myCenter,
      zoom: 6,
      disableDefaultUI: true,
      zoomControl: false,
      gestureHandling: "none"
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
    let marker = new google.maps.Marker({ position: myCenter });
    marker.setMap(map);
  }
});
