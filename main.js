
let paragraph = document.querySelectorAll("p");

// for(let i = 0; i < paragraph.length; i++){
// paragraph[i].style.backgroundColor = "#ff0000"
// }

for(nodes of paragraph){
    nodes.style.backgroundColor = "#ff0000"  
}

let list = document.getElementById("optionsList");
console.log(list);

let listParent = list.parentElement 
console.log(listParent);
let listChild = list.childNodes
console.log(listChild);

let testParagraph = document.getElementById("testParagraph").innerText = "This is a paragraph";

let headerNodes = document.querySelectorAll(".main-header > *");
console.log(headerNodes);
for (let node of headerNodes) {
  node.classList.add("nav-item");
}

let title = document.querySelectorAll(".section-title");
for(nodes of title){
    nodes.classList.remove("section-title")
}