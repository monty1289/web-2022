const BASE_URL = 'https://fakestoreapi.com/products'



let fetchimage = (category, parentClass) => {
    fetch(`${BASE_URL}/category/${category}`)
    .then(res=>res.json())
    .then(data=> {   
        console.log(data)
        data.forEach(item =>{

            let product = document.createElement("div");
            product.classList.add('product');
            product.innerHTML = `${item["title"]}`;
            product.style.backgroundImage = `url(${item["image"]})`;
            document.querySelector(parentClass).append(product)

            // let title = document.createElement("li")
            // title.innerHTML = `${item["title"]}`;
            // document.querySelector(".product").append(title)
        })
    })  
}     
     
fetchimage("men's clothing", ".M")
fetchimage("women's clothing", ".W") 
fetchimage("electronics", ".E")
fetchimage("jewelery", ".G")
fetchimage("men's clothing", ".B")



fetch(`${BASE_URL}`)
    .then(res=>res.json())
    .then(data=> {   
        console.log(data)
        
    })  