/*
    js function to fetch image and title from api and use for the store pages 
*/

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

             let title = document.createElement("li")
             title.innerHTML = `${item["title"]}`;
             product.append(title)
        })
    })  
}     
     
fetchimage("men's clothing", ".M")
fetchimage("women's clothing", ".W") 
fetchimage("electronics", ".E")
fetchimage("jewelery", ".G")
fetchimage("men's clothing", ".B")
  