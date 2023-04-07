// const items=document.querySelector("#items")
// console.log(items.parentElement);
// console.log(items.lastElementChild);
// console.log(items.lastChild);
// console.log(items.firstElementChild);
// console.log(items.firstChild);
// console.log(items.nextSibling);
// console.log(items.nextElementSibling);
// console.log(items.previousSibling);
// console.log(items.previousElementSibling);

const newform=document.createElement("form")
newform.setAttribute("class", "nayafaram")
const text=document.createElement("p")
const textNode=document.createTextNode("This is new form")
text.appendChild(textNode)
newform.append(text)
const newinput=document.createElement("input")
newform.appendChild(newinput)
newinput.setAttribute("type", "time")
newinput.setAttribute("id", "newinput")
const body=document.querySelector("body")
const container=document.querySelector("div .container")
body.insertBefore(newform,container)

const p=document.createElement("p")
const HEllo=document.createTextNode("HEllo")
p.appendChild(HEllo)
const value=document.querySelector("#header-title")
const mainheader=document.querySelector(".container")
mainheader.insertBefore(p,value)

const p2=document.createElement("p")
const HEllo2=document.createTextNode("HEllo")
p2.appendChild(HEllo2)
const value2=document.querySelector(".list-group-item")
const mainheader2=document.querySelector("#items")
mainheader2.insertBefore(p2,value2)

// console.log(value2);
// console.log(mainheader2);

