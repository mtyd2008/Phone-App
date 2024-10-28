
const data = localStorage.getItem("cart")
const convert = JSON.parse(data)

console.log(convert);


const div = document.querySelector("div")

convert.map((item, )=>{
    div.innerHTML += `<div class="card-body">
        <li>Brand: ${item.brand}</li>
        <li>Model: ${item.model}</li>
        <li>Ram: ${item.ram}</li>
        <li>Rom: ${item.rom}</li>
        <li>Camera: ${item.camera}</li>
        <li>Price: ${item.price}</li>
        <button class="btn btn-primary">+</button>
        <button class="btn btn-primary">-</button>
        </div>`
})













