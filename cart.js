
const data = localStorage.getItem("cart")
const convert = JSON.parse(data)

console.log(convert);


const div = document.querySelector("div")

convert.map((item)=>{
    div.innerHTML += `<div class="card-body">
        <li>Brand: ${item.brand}</li>
        <li>Model: ${item.model}</li>
        <li>Ram: ${item.ram}</li>
        <li>Rom: ${item.rom}</li>
        <li>Camera: ${item.camera}</li>
        <li>Price: ${item.price}</li>
        <div class="d-flex gap-2 mt-2">
        <button class="btn btn-primary" onclick="plus()">+</button>
        <h1 class="count">0</h1>
        <button class="btn btn-primary" onclick="minus()">-</button>
        </div>
        </div>`
})

let count = 0

function plus(){
    count += 1
    h1.innerHTML = count
}

function minus(){
    count -= 1
    h1.innerHTML = count
}


if(count === -1){
    
}





