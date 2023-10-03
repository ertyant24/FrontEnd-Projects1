const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");

btn.addEventListener("click", function(){
    trailerContainer.classList.remove("active");
})

closeIcon.addEventListener("click", function(){
    trailerContainer.classList.add("active");
})