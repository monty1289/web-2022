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

let thirdRow = document.createElement("div")
thirdRow.classList.add(".thirdRow");
menu.append(thirdRow);

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

let menuList3 = (type,clazz,innerHTML) => {
    let element = document.createElement(type);
    element.classList.add(clazz);
    element.innerHTML = innerHTML;
    thirdRow.append(element);
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

menuList3("h5","info","Get in Touch");
menuList3("h5","info","Kantoor:");
menuList3("li","info","071-3050210");
menuList3("li","info","ma – vr: 09:00 – 17:00");



