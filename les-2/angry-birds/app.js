//Oefening angry-bird

const bird = document.querySelector(".bird");
let px = 0;

bird.style.left = px;

bird.addEventListener('click', function () {
    px += 50;
    bird.style.left = px + "px";
});

