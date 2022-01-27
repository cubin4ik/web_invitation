// Parallax
window.addEventListener('scroll', function(e) {
    const items = document.querySelectorAll('.scroll');
    const scrolled = window.pageYOffset

    for (item of items) {
        let posX = scrolled * item.dataset.ratex
        let posY = scrolled * item.dataset.ratey

        item.style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)'
    }
})

// Inserting name from URL
function getName() {
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)

    let name = 'Дорогие друзья!'
    if (params.has('name')) {
    name = params.get('name')
    }

    element = document.querySelector('#name')
    element.innerHTML = name
}

function countDown() {
    let countDownDate = new Date("Jul 10, 2021 16:30:00").getTime();

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-days").innerHTML = days
        document.getElementById("countdown-hours").innerHTML = hours
        document.getElementById("countdown-minutes").innerHTML = minutes
        document.getElementById("countdown-seconds").innerHTML = seconds

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "ПОЕХАЛИ!";
        }
    }, 1000);
}

getName()
countDown()