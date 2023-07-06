const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterCards = document.querySelectorAll(".card");

for(let button of filterButtons){
    button.addEventListener("click", function(e){
        // console.log(e.target);
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        for(let card of filterCards){
            card.classList.add("hide");
            // console.log(card);
            if(card.dataset.name == e.target.dataset.name || e.target.dataset.name == "all"){
                card.classList.remove("hide");
            }
        }
    })
} 

