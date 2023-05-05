const weight = document.getElementById("weight");
const height = document.getElementById("height");
const spanWeight = document.getElementById("weight-val");
const spanHeight = document.getElementById("height-val");
const labelBmi = document.getElementById("bmi-calculate");
const labelHealthyStatus = document.getElementById("health-status");


function calculate(){
    spanWeight.textContent = weight.value + " " + "kg"; 
    spanHeight.textContent = height.value + " " + "cm";
    
    let result = (weight.value / ((height.value / 100) * (height.value / 100))).toFixed(2);
    labelBmi.textContent = result;



    if(result <= 18.50){
        labelHealthyStatus.textContent = "Under Weight";
        labelBmi.style.color = "yellow";
    }
    else if(result <= 24.50){
        labelBmi.style.color = "green";
        labelHealthyStatus.textContent = "Normal Weight"
    }
    else if(result <= 29.99){
        labelBmi.style.color = "orange"
        labelHealthyStatus.textContent = "Over Weight"
    }
    else if(result <= 34.99){
        labelBmi.style.color = "red";
        labelHealthyStatus.textContent = "Obesity";
    }
}



// function calculate(){
//     let result = weight.value / ((height.value / 100) * (height.value / 100));

//     labelBmi.textContent = result;
// }
