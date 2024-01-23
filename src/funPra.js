

//Nodlist (靜態)
const two = document.querySelectorAll(".cool-p")
// HTMLCollection (動態)
const three = document.getElementsByClassName("cool-p")

console.log(two.length)
console.log(three.length)

let body = document.querySelector("body")
let p = document.createElement("p")
p.innerText = "我是來寫程式的"
p.classList.add(p);

console.log(two.length)
console.log(three.length)

const newTwo = document.querySelectorAll(".cool-p")
newTwo.forEach(item => {
    item.addEventListener('click',()=>{
        console.log("COOL")
    })
})