const submit = document.querySelector(".btn1");

const buttonOk = document.querySelector(".btn2");

const header = document.querySelector(".header");

const main = document.querySelector(".main");

const popUpModal = document.querySelector(".popup");

function popUpModala(){
    header.classList.add("closemodal");
    main.classList.add("closemodal");
    popUpModal.classList.remove("closemodal");
}


buttonOk.addEventListener("click", function(){
    header.classList.remove("closemodal");
    main.classList.remove("closemodal");
    popUpModal.classList.add("closemodal");
})



