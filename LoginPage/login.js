const submit = document.querySelector(".btn1");

const buttonOk = document.querySelector(".btn2");

const header = document.querySelector(".header");

const main = document.querySelector(".main");

const popUpModal = document.querySelector(".popup");



function popUpModala(){
    let email = document.getElementById("txtEmail").value;

    let password = document.getElementById("txtPassword").value;

    let cem = document.querySelector(".cem");

    if(email == "" || password == ""){
        console.log("Hey");
        let alert = document.createElement("div");
        alert.classList = "alert";
        let alerttext = document.createTextNode("Please fill in the email or password");
        alert.appendChild(alerttext);
        cem.appendChild(alert);
        console.log("Hey");
    }
    if(email != "" && password != ""){
        console.log("Hey");
        header.classList.add("closemodal");
        main.classList.add("closemodal");
        popUpModal.classList.remove("closemodal");
    }
}

buttonOk.addEventListener("click", function(){
    header.classList.remove("closemodal");
    main.classList.remove("closemodal");
    popUpModal.classList.add("closemodal");
})



