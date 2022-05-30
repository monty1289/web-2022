let menu = document.querySelector(".menu");

document.querySelector(".menubutton").addEventListener("click", e =>{
    e.target.querySelector(".menu").classList.toggle("active");
})

let inner_grid = document.createElement("div")
inner_grid.classList.add(".inner_grid");

let inspiration = document.createElement("li");
inspiration.classList.add("storeList");
inspiration.innerHTML = "Inspiration"
inner_grid.append(inspiration);

let greenUp = document.createElement("li");
greenUp.classList.add("storeList");
greenUp.innerHTML = "greenUp"
inner_grid.append(greenUp);

let About = document.createElement("li");
About.classList.add("storeList");
About.innerHTML = "About"
inner_grid.append(About);

let CustomerService = document.createElement("li");
CustomerService.classList.add("storeList");
CustomerService.innerHTML = "Customer Service"
inner_grid.append(CustomerService);

let contact = document.createElement("li");
contact.classList.add("storeList");
contact.innerHTML = "contact"
inner_grid.append(contact);

let Academies = document.createElement("li");
Academies.classList.add("secondRow");
Academies.innerHTML = "Academies"
inner_grid.append(Academies);

menu.append(inner_grid);
