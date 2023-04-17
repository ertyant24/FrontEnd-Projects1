const showModal = document.querySelector(".show-modal");

const modalHidden = document.querySelector(".modal-hidden");

const closeModal = document.querySelector(".close-modal");

const closeButton = document.querySelector(".close-button");

showModal.addEventListener("click", function(){
    modalHidden.classList.remove("hidden");
    showModal.classList.add("hidden");
})

closeModal.addEventListener("click", function(){
    modalHidden.classList.add("hidden");
    showModal.classList.remove("hidden");
})

closeButton.addEventListener("click", function(){
    modalHidden.classList.add("hidden");
    showModal.classList.remove("hidden");
})

document.addEventListener("keydown", function(event){
    if(event.key == "Escape"){
        modalHidden.classList.add("hidden");
        showModal.classList.remove("hidden");
    }
})