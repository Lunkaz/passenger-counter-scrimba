const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
const totalEl = document.getElementById("total-el");
let count = 0;
let total = 0;


function increment() {
    count += 1;
    countEl.textContent = count;
    
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    total += count;
    totalEl.textContent = total;
    count = 0;
}
console.log(totalEl);

incrementBtn.addEventListener('click', increment);
saveBtn.addEventListener('click', save);