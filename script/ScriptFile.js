//When a "work" img is clicked it will display the appropriate text
//based on that employer.

var employer_text = {
    "work-hill": "hill text hill text hill text hill text hill text hill text hill text ",
    "work-fedex": "fedex text",
    "work-umpire": "hill umpire",
    "work-grocery": "hill grocery"
}

let current = '';

$('.work-history').on('click', event => {
    if (current == event.target.id) {
        $('#work-text-full').toggle();
    } else if ($('#work-text-full').is(":visible")) {
        console.log('visible')
        $('#work-text-full').show();
    } else {
        $('#work-text-full').toggle();
    }

    document.getElementById("test").innerHTML = employer_text[event.target.id];
    current = event.target.id;
})






