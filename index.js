let count = 0;
let saveEl = document.getElementById("save-elem")
let content = document.getElementById("count")
let cnt = document.querySelector("#increment-btn");

function increment() {
    count++;
    content.textContent = count;
}

console.log(cnt)

cnt.addEventListener("click", increment);

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr
    count  = 0
    content.textContent = 0;    
}