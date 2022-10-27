let bigDiv = document.createElement('div')
let body = document.querySelector('body')
body.setAttribute('style','background-color: black; height: 100vh;')
bigDiv.classList.add('big-div')

// bigDiv.textContent = 'testing'
body.appendChild(bigDiv)
bigDiv.setAttribute('style', "display: flex; flex-wrap: wrap; min-height: 100%; min-width: 100%; background-color: red;")
for (let i = 0; i < 256; i++){
    let littleDiv = document.createElement('div')
    littleDiv.classList.add('baby-div')
    bigDiv.appendChild(littleDiv)  
}

let littleDivs = document.querySelectorAll('.baby-div')
Array.from(littleDivs).forEach(littleDiv => {
    littleDiv.setAttribute('style',"min-height: 6.25%;min-width: 6.25%; background-color: blue;")
    littleDiv.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = 'green'
    });
});

