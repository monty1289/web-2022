// let myfunc = () => {
//     let x = "Monty";
//     console.log(x);
// }

// myfunc();

// let matrix = [
//     [1,0,1],
//     [0,1,0],
//     [1,1,1]
// ]

// matrix.forEach((row,i) => {
//     console.log(row,i); //each row of matrix
//     row.forEach((x,ii) => {
//         console.log(x,ii);  //each cell (col) in that row
//     });
// });

// let people = [
//     ["adon", "moskal", "(canadian)"],
//     ["donald", "trump", "(ameracan)"],
//     ["Jacinda", "Ardern", "(Kiwi)"]
// ]

//2 ways to convert array to string

// people.forEach(person => {
//     let name = " ";
//     person.forEach(data => {
//         name += data + " ";
//     })
//     console.log(name); 
// })

// people.forEach(person => console.log(person.join(" ")));


// //sorting and filtering

// let filterd = people.filter (person => person[1].lenght > 5);

// filterd.sort((a,b) => {
//     if(a[1] > b[1])
//         return 1;
//     else
//         return -1;
    
// });

// console.log(filterd);

let calendar = document.querySelector(".calendar");

document.querySelector(".llegada").addEventListener("click",
    calendar.classList.toggle("active")
    );

    let inner_grid = document.createElement("div");
    inner_grid.classList.add("inner_grid");

    for(let i =1; i <= 31;i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.innerHTML = i;
        inner_grid.append(square);
    }

calendar.append(month,inner_grid);