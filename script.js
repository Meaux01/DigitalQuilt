console.log("This works!");

const randColorRGB = () => {
    return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.random()})`
}
const randBoxSize = () => {
    return  `${Math.floor(Math.random()*50)}px`
}
function createSquare(num = Math.floor(Math.random()*500)) {
  for (let i = 1; i <= num; i++) {
    const div = document.createElement("div")
    console.log(div)
    div.textContent = i
    div.classList.add("square")
    const body = document.querySelector("body")
    body.appendChild(div)
    div.style.width = randBoxSize()
    div.style.height = randBoxSize()
    body.style.display = "flex"
    body.style.flexWrap = "wrap"
    div.style.display = "flex"
    div.style.alignContent = "flex-start"
    div.style.border = "1px"
    div.style.borderColor = 'black'
    div.style.backgroundColor = 
    div.style.backgroundColor = randColorRGB()
    // location.reload()
    console.log("location")
  }
}

createSquare(500)
