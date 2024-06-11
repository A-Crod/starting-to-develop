const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back")
let cardCurrent = 0;
const cards = document.querySelectorAll(".card");

btnNext.addEventListener("click", function (){
    if (cardCurrent === cards.length - 1) return;

    hideCardSelected();
    
    cardCurrent++;
    showsCardSelected();
     
})
btnBack.addEventListener("click", function (){
    if(cardCurrent === 0) return;
    
    hideCardSelected();
    
    cardCurrent--;
    showsCardSelected();
     
})

function showsCardSelected() {
    cards[cardCurrent].classList.add("selected");
}

function hideCardSelected() {
    const cardSelected = document.querySelector(".selected");
    cardSelected.classList.remove("selected");
}
