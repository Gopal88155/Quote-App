let h1 = document.querySelector("h1")
let p = document.querySelector("p")
let button = document.querySelector("button")
let container = document.querySelector("#container")


const colors = ["#00FF74" , "#000000", "#BBFF00", "#FFD000", "#0011FF" ]

let count = 0

const getQuote = async () => {
    const response = await fetch("http://quotable.io/random")
    const data = await response.json()
    console.log(data)
    h1.innerText = data.content
    p.innerText = data.author
    container.style.backgroundColor = colors[count]
    count++;
    if (count === colors.length){
        count = 0
    }
}



button.addEventListener("click", getQuote)
getQuote()

setInterval(() => {
    getQuote()
}, 10000)