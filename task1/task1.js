let element = document.getElementById("main_header");
element.style.color = "red";

let ul1 = document.getElementsByTagName("ul");
for(let i = 0; i < ul1.length;i++){
    ul1[i].style.width = "400px";
}
let width1 = document.getElementsByClassName("linkList");
for(let i = 0; i <width1.length;i++){
    width1[i].style.width = "50%";
}

let text = document.getElementsByClassName("listElement2");
console.log(text[0].innerText);


let li = document.getElementsByTagName("li");
for(let i = 0; i < li.length; i++){
    li[i].style.background = "green";
    console.log(li[i].innerText)
}
let a = document.getElementsByTagName("a");
for(let i = 0; i < a.length; i++) {
    a[i].classList.add("anchor");
    if (i === "link3"){
        a[i].innerText.style.fontsize = "40px";
    }
}
