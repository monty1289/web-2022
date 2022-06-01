let menu = document.querySelector(".menu");

document.querySelector(".menubutton").addEventListener("click", e =>{
    e.target.querySelector(".menu").classList.toggle("active");
})


let inner_flex = document.createElement("div")
inner_flex.classList.add(".inner_flex");
menu.append(inner_flex);

let secondRow = document.createElement("div")
secondRow.classList.add(".secondRow");
menu.append(secondRow);

let menuList = (type,clazz,innerHTML) => {
    let element = document.createElement(type);
    element.classList.add(clazz);
    element.innerHTML = innerHTML;
    inner_flex.append(element);
}

let menuList2 = (type,clazz,innerHTML) => {
    let element = document.createElement(type);
    element.classList.add(clazz);
    element.innerHTML = innerHTML;
    secondRow.append(element);
}

menuList("li","storeList","Inspiration");
menuList("li","storeList","greenUp");
menuList("li","storeList","About");
menuList("li","storeList","Customer Service");
menuList("li","storeList","contact");

menuList2("li","Helper","Academies");
menuList2("li","Helper","Privacy statement");
menuList2("li","Helper","terms and conditions");
menuList2("li","Helper","store locator");



