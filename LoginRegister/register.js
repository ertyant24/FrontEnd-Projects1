const emailInput = document.getElementById("txtEmail");
const emailLabel = document.getElementById("labelemail");
const passwordInput = document.getElementById("txtPassword");
const passwordLabel = document.getElementById("labelpassword");
const emailInputVal = document.getElementById("txtEmail").value;
const passwordInputVal = document.getElementById("txtPassword").value;
const search = document.querySelector(".searchinput");
const btnSearch = document.querySelector(".btnsearch");



emailInput.addEventListener("focus", function(){
    emailLabel.style.top = "-2px";
})

emailInput.addEventListener("blur", function(){
    if(emailInputVal.trim() == " "){
        emailLabel.style.top = "20px";
    }
    else{
        emailLabel.style.top = "-2px";
    }
})

passwordInput.addEventListener("focus", function(){
    passwordLabel.style.top = "-2px";
})

passwordInput.addEventListener("blur", function(){
    if(passwordInputVal.trim() == " "){
        passwordLabel.style.top = "20px";
    }
    else{
        passwordLabel.style.top = "-2px";
    }
})

btnSearch.addEventListener("click", function(){
    if(search.value.toUpperCase() == "leftpart".toUpperCase()){
        let leftpart = document.querySelector(".leftpart");
        leftpart.classList.add("leftpart-transition");
        // leftpart.style.position = "relative";
        // leftpart.style.top = "-30px";
        // leftpart.style.transition = "2s ease";
    }
})

btnSearch.addEventListener("click", function(){
    if(search.value.toUpperCase() == "rightpart".toUpperCase()){
        let rightpart = document.querySelector(".rightpart");
        rightpart.classList.add("rightpart-transition");
        // rightpart.style.position = "relative";
        // rightpart.style.top = "-30px";
        // rightpart.style.transition = "2s ease";
    }
})

