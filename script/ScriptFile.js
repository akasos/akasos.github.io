//When a "work" img is clicked it will display the appropriate text
//based on that employer.

$(document).ready(function()   { 


// var employer_text = {
//     "work-hill": "hill text hill text hill text hill text hill text hill text hill text ",
//     "work-fedex": "fedex text",
//     "work-umpire": "hill umpire",
//     "work-grocery": "hill grocery"
// }


// if($(window).width() >= 769)
// {

//     let current = '';

//     $('.work-history').on('click', event => {
//         if (current == event.target.id) {
//             $('#work-text-full').toggle();
//             $('#work-wrapper-full').toggle();
//         } else if ($('#work-text-full').is(":visible") && $('#work-wrapper-full').is(":visible")) {
//             $('#work-text-full').show();
//             $('#work-wrapper-full').show();
//         } else {
//             $('#work-text-full').toggle();
//             $('#work-wrapper-full').toggle();
//         }

//         console.log(event);
//         document.getElementById("work-text").innerHTML = employer_text[event.target.id];
//         current = event.target.id;
//     });

// }


if($(window).width() <=768)
{
    
        $('#work-wrapper-hill').click(function() {
    
     
                $("#work-wrapper-full").insertAfter(this);
             
    
    

    
        });
    



}


});








