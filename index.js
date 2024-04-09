const containerEl = document.querySelector(".img-container")

const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click",()=>{
    let newNum = 10
    for(let index=0;index<newNum;index++){
        const newimgEl = document.createElement("img")
        containerEl.appendChild(newimgEl)
        newimgEl.src = `https://picsum.photos/200?random=${Math.floor(Math.random()*1000)}`
        newimgEl.alt = `random-photos${index+1}`
    }
})

