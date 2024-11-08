
const data = localStorage.getItem("cart")
const convert = JSON.parse(data)

// console.log(convert);


const div = document.querySelector("#card")

function render(){
convert.map((item,index)=>{
    card.innerHTML += `<div class="cards">
    <div>
    <img class="card-img" src="${item.image}">
    </div>
    <div>
    <p class="card-text">Model:${item.brand} ${item.model}</p>
    <p class="card-text">Storage:${item.ram}/${item.rom}
    <div class="d-flex gap-2 mt-2">
    <button class="btn btn-primary" onclick="Decrease(${index}, ${item.price})">-</button>
    <p id="quan-${index}">${item.quantity}</p>
    <button class="btn btn-primary" onclick="Increase(${index}, ${item.price})">+</button>
    </div>
    <p class="mt-2" id="price-${index}">Price $${item.price * item.quantity}</p>
    <button class="btn btn-primary bg-dark btn-h" onclick="Delete(${index})">Delete Item</button>
    </div>`
})
}


function Decrease(index){
    var quantity = document.querySelector(`#quan-${index}`)
    var price = document.querySelector(`#price-${index}`)
    if (quantity.innerHTML > "1") {
        quantity.innerHTML--;
        price.innerHTML = `Price $${price*quantity.innerHTML}`;
        convert[index].quantity = parseInt(quantity.innerHTML);
        localStorage.setItem("cart" , JSON.stringify(convert));

}
}
function Increase(index){
    var quantity = document.querySelector(`#quan-${index}`)
    var price = document.querySelector(`#price-${index}`)

        quantity.innerHTML++;
        price.innerHTML = `Price $${price*quantity.innerHTML}`;
        convert[index].quantity = parseInt(quantity.innerHTML);
        localStorage.setItem("cart" , JSON.stringify(convert));

}

function Delete(index){
    convert.splice(index, 1)
    localStorage.setItem("cart" , JSON.stringify(convert))
    render()
}
render()


function Back(){
    window.location = "index.html"
}