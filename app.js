var billAmount = document.querySelector("#bill-Amount")
var nextButton = document.querySelector("#Next-btn")
var checkButton = document.querySelector("#check-btn")
var cashGiven = document.querySelector('#cash-given')
var numOfNotes= document.querySelectorAll(".noOfNotes")
var availableNotes=[2000,500,100,20,10,5,1]
checkButton.addEventListener("click",validateBillAmountandCashGiven);
function validateBillAmountandCashGiven(){
    if (billAmount.value>0){
        if (cashGiven.value >= billAmount.value){
            var amountReturned=cashGiven.value - billAmount.value;
            calculateChange(amountReturned);
        }else{
            alert("Cash Amount Should Be Equal to or Greater Than Bill Amount")
        }
    }else{
        alert("The Bill Amount Should Be Positive")
    }
}
function calculateChange(amountReturned){
    for(let i=0;i<availableNotes.length;i++){
        const noOfNotes=Math.trunc(
            amountReturned/availableNotes[i]
        );
        amountReturned%=availableNotes[i];
        numOfNotes[i].innerText=noOfNotes;
    }
}