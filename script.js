const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
const reachLimit = document.getElementById("limit");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter()

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;

    if(textareaEl.value.length == "50"){ 
        reachLimit.classList.remove("hiden");
    }
}



