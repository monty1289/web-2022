fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>
                data.forEach(Image => {
                    console.log(Image["category"])
                    
                }))
            