/*
checks throught api for known users 
*/
 

let btn = document.querySelector('#Loginbu')
btn.addEventListener("click", e => {   

    fetch("/api/users")
    .then(res=>res.json())
        .then(data=> {
            for (let i = 0; i < data.length; i++) {
                let names = data[i]["name"];
                console.log(names)
                
                let input = document.querySelector("#logname").value 
                if (input === names) {
                    fetch("/loginSuccessful")
                    .then(res => {
                        alert("Welcome")

                        window.location = "/"
                    })
                    return
                }
            }
            alert("wrong name or not in the system")        
        })    
});
