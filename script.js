let elBox = document.querySelector(".span")
let elBtn = document.querySelector(".check")
elBox.addEventListener("click", ()=>{
    elBox.classList.toggle("span2")
    elBtn.classList.toggle("check2")
    document.body.classList.toggle("dark")
})