const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener ("click",showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount(e){
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const day = document.querySelector("#day").value;
    const tip = document.querySelector("#tip").value;

    if (bill===""||day===""||day<1||day>31){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information'
        })
    }

let amountPerDay=bill/day;
let tipPerDay=(bill*tip)/day;
let totalSum=amountPerDay+tipPerDay;

amountPerDay = amountPerDay.toFixed(2);
tipPerDay = tipPerDay.toFixed(2);
totalSum = totalSum.toFixed(2);

document.querySelector("#dividedBill").textContent = amountPerDay;
document.querySelector("#dividedTip").textContent = tipPerDay;
document.querySelector("#billAndTip").textContent = totalSum;
}


