const BASE_URL = 'https://fakestoreapi.com/products'



let fetchimage = (category, parentClass) => {
    fetch(`${BASE_URL}/category/${category}`)
    .then(res=>res.json())
    .then(data=> {   
        console.log(data)
        data.forEach(item =>{
            let product = document.createElement("div");
            product.classList.add('product');

            product.style.backgroundImage = `url(${item["image"]})`;
            document.querySelector(parentClass).append(product)
        })
    })  
}     
     
fetchimage("men's clothing", ".M")
fetchimage("women's clothing", ".W") 
fetchimage("electronics", ".E")

let fetchData = (category, parentClass) => {
    fetch(`${BASE_URL}/category/${category}`)
    .then(res=>res.json())
    .then(data=> {   
        
        data.forEach(item =>{
            console.log(item["price"])
            let price = document.createElement("li");
            price.classList.add('price');
            price.innerHTML = `url(${item["price"]})`
            
            document.querySelector(parentClass).append(price)
        })
    })  
}     

fetchData("men's clothing", "product")

fetch(`${BASE_URL}`)
    .then(res=>res.json())
    .then(data=> {   
        console.log(data)
        
    })  