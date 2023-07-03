// let equal_pressed = 0;
let buttonİnput = document.querySelectorAll(".input-button");

let input = document.getElementById("numbers");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = function(){
    input.value = "";
}

buttonİnput.forEach(function(button_class){
    button_class.addEventListener("click", () => {
        input.value = input.value + button_class.value;
    })
})

equal.addEventListener("click", () => {
    // let equal_pressed = 1;
    // console.log(equal_pressed);
    let realİnput = input.value;
    try{
        let solution = eval(realİnput);

        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.toFixed(2);
        }
    }
    catch(err){
        alert("İnvalid Number. Please try again.");
    }
})

clear.addEventListener("click", function(){
    input.value = "";
})

erase.addEventListener("click", function(){
    input.value = input.value.substr(0,input.value.length - 1);
})

