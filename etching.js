let body = document.querySelector('body')
body.setAttribute('style','background-color: black; height: 97vh; display: flex; justify-content: space-around;')

let optionsDiv = document.createElement('div')
optionsDiv.setAttribute('style','min-height: 100%; color: white;')
body.appendChild(optionsDiv)

let mainHeader = document.createElement('h1')
mainHeader.textContent = "Etch-a-Sketch!"
mainHeader.setAttribute('style', 'font-size: 4vw;')
optionsDiv.appendChild(mainHeader)

let etchOptions = document.createElement('p')
etchOptions.setAttribute('style', 'font-size: 2vw')
etchOptions.textContent = 'Options:'
optionsDiv.appendChild(etchOptions)

let resolutionDiv = document.createElement('div')
resolutionDiv.setAttribute('style', 'display: flex; justify-content: space-around; align-items: center; font-size: 1.5vw')
optionsDiv.appendChild(resolutionDiv)

let setResolution = document.createElement('p')
setResolution.textContent = 'Squares per side (max 100):'
resolutionDiv.appendChild(setResolution)

let resolution = document.createElement("INPUT")
resolution.setAttribute("type", "number")
resolution.setAttribute("max", 100)
resolution.setAttribute("min", 2)
resolution.setAttribute('style', 'width: 15%; font-size: 1.5vw')
resolution.defaultValue = 16;
resolutionDiv.appendChild(resolution)

let startColorLabel = document.createElement('label')
startColorLabel.setAttribute('for', 'start-colors')
startColorLabel.textContent = 'Start Color:     '
optionsDiv.appendChild(startColorLabel)

let startColor = document.createElement('select')
startColor.setAttribute('name','start-colors')
optionsDiv.appendChild(startColor)

let colorArray = Array('blue', 'red', 'green', 'orange', 'purple', 'yellow')
colorArray.forEach(color => {
    colorOption = document.createElement('option')
    colorOption.textContent = `${color}`
    startColor.appendChild(colorOption)
})

let endColorLabel = document.createElement('label')
endColorLabel.setAttribute('for', 'end-colors')
endColorLabel.textContent = 'End Color:     '
optionsDiv.appendChild(endColorLabel)

let endColor = document.createElement('select')
endColor.setAttribute('name','end-colors')
optionsDiv.appendChild(endColor)

let endColorArray = Array('green','blue', 'red', 'orange', 'purple', 'yellow')
endColorArray.forEach(color => {
    colorOption = document.createElement('option')
    colorOption.textContent = `${color}`
    endColor.appendChild(colorOption)
})

let bigDiv = document.createElement('div')
bigDiv.classList.add('big-div')
body.appendChild(bigDiv)
bigDiv.setAttribute('style', "display: flex; flex-wrap: wrap; height: 100%; aspect-ratio: 1 / 1;background-color: black;")

let addColor = function(event){
    event.target.style.backgroundColor = 'green'
}

for (let i = 0; i < 256; i++){
    let littleDiv = document.createElement('div')
    littleDiv.classList.add('baby-div')
    bigDiv.appendChild(littleDiv)  
}
let littleDivs = document.querySelectorAll('.baby-div')
Array.from(littleDivs).forEach(littleDiv => {
    littleDiv.setAttribute('style',"min-height: 6.25%; min-width: 6.25%; background-color: blue;")
    littleDiv.addEventListener("mouseover", addColor, true);
});


let makeGrid = function(event){
    let oldGrid = document.querySelectorAll('.baby-div')
    Array.from(oldGrid).forEach(oldDiv => {oldDiv.remove()})
    let gridSize = event.target.value
    console.log(gridSize)
    for (let i = 0; i < (gridSize**2); i++){
        let littleDiv = document.createElement('div')
        littleDiv.classList.add('baby-div')
        bigDiv.appendChild(littleDiv)   
    }
    let littleDivs = document.querySelectorAll('.baby-div')
    Array.from(littleDivs).forEach(littleDiv => {
        littleDiv.setAttribute('style',`min-height: ${1/gridSize * 100}%;min-width: ${1/gridSize * 100}%; background-color: blue;`)
        littleDiv.addEventListener("mouseover", addColor, true);
    });
}


resolution.addEventListener('input', makeGrid)

startColor.addEventListener('change', event => {
    let newColor = event.target.value
    let littleDivs = document.querySelectorAll('.baby-div')
    Array.from(littleDivs).forEach(littleDiv => {
        littleDiv.style.backgroundColor = `${newColor}`

    });
})

endColor.addEventListener('change', (event) =>{
    let littleDivs = document.querySelectorAll('.baby-div')
    let newColor = event.target.value
    let addNewColor = function(event){
        event.target.style.backgroundColor = newColor
    };
    Array.from(littleDivs).forEach(littleDiv => {
        littleDiv.removeEventListener("mouseover", addColor, true)
        littleDiv.addEventListener("mouseover", addNewColor, true)
    })
    resolution.removeEventListener('input', makeGrid)
    makeBetterGrid = function(event){
        let oldGrid = document.querySelectorAll('.baby-div')
        Array.from(oldGrid).forEach(oldDiv => {oldDiv.remove()})
        let gridSize = event.target.value
        console.log(gridSize)
        for (let i = 0; i < (gridSize**2); i++){
            let littleDiv = document.createElement('div')
            littleDiv.classList.add('baby-div')
            bigDiv.appendChild(littleDiv)   
        }
        let littleDivs = document.querySelectorAll('.baby-div')
        Array.from(littleDivs).forEach(littleDiv => {
            littleDiv.setAttribute('style',`min-height: ${1/gridSize * 100}%;min-width: ${1/gridSize * 100}%; background-color: blue;`)
            littleDiv.addEventListener("mouseover", addNewColor, true);
        });
    }
    resolution.addEventListener('input',makeBetterGrid)

})