const arrow = document.getElementById('arrow');
const btn = document.getElementById('box-btn');
const pageLink = document.getElementsByClassName('page-link');
const about = document.getElementById('about');
const $root = $('html, body');
const sr = document.getElementsByClassName('sr');

// let t1 = new TimelineMax();

$(document).ready(() => {
    setInterval(() => {
        $('.preloader').fadeOut('slow');
    }, 1500);

});

particlesJS.load('particlesJS', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});

btn.addEventListener('mouseover', () => {
    arrow.style.transform = 'rotate(0deg)';
});

btn.addEventListener('mouseout', () => {
    arrow.style.transform = 'rotate(-90deg)';
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $($root).animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500, 'swing');
});

$('#box-btn').on('click', () => {
    event.preventDefault();
    $($root).animate({
        scrollTop: $('#about').offset().top
    }, 1000, 'swing');
});

const waypoint = new Waypoint({
    element: document.getElementById('box-btn'),
    handler: () => {
        $('#about-text').toggleClass('opacity-vis');
        $('.col1').toggleClass('animated-left');
        $('.col2').toggleClass('animated-left');
        $('.col3').toggleClass('animated-right');
        $('.col4').toggleClass('animated-right');
        waypoint.disable();
    }
});

const waypointTwo = new Waypoint({
    element: document.getElementById('about'),
    handler: () => {
        $('.languages').toggleClass('animated-left');
        $('.other').toggleClass('animated-right');
        $('.frameworks').toggleClass('opacity-vis');
        $('.skill-header').toggleClass('opacity-vis');
        waypointTwo.disable();
    },
    offset: '25%'
});

const waypointThree = new Waypoint({
    element: document.getElementById('portfolio'),
    handler: () => {
        $('.project').toggleClass('animated-left');

        $('.bk-1').toggleClass('animated-scale').delay(100).queue(() => {
            $('.bk-2').toggleClass('animated-scale').delay(100).queue(() => {
                $('.bk-3').toggleClass('animated-scale').delay(100).queue(() => {
                    $('.bk-4').toggleClass('animated-scale').delay(100).queue(() => {

                    });
                });
            });
        });

        waypointThree.disable();
    },
    offset: '40%'
});

// $('.fa-bars').on('click', () => {
//     $('.nav-links').fadeIn('fast');
//     t1.from('.link1', 0.5, {
//         x: -100,
//         opacity: 0
//     });
//     t1.from('.link2', 0.5, {
//         x: -100,
//         opacity: 0
//     });
//     t1.from('.link3', 0.5, {
//         x: -100,
//         opacity: 0
//     });
//     t1.from('.link4', 0.5, {
//         x: -100,
//         opacity: 0
//     });

//     $('.fa-times').addClass('cross animated-right');
// });

// $('.fa-times').on('click', () => {
//     $('.nav-links').fadeOut('slow');
// });

// $('.page-link').on('click', () => {
//     $('.nav-links').fadeOut('fast');
// });