// Traverse the DOM

//ParentElement
var parent = document.querySelector('div')
var p = parent.parentElement;
console.log(p);

//previousElementSibling
//Method 1
var sibling = document.querySelectorAll('.hero');
var s = sibling.parentElementSibling;
console.log(s);

//Method 2 
sibling.forEach((element) => {
    console.log(element.previousElementSibling);
})

//children
var child = document.querySelector('ul')

console.log(child.children[0]);
console.log(child.childNodes[1]);

//appendChild
const add = document.querySelector('ul');
const newEle = document.createElement('li');
newEle.textContent = 'Yuru';
add.append(newEle);

//remove
const rem = document.querySelector('ul');
rem.remove();


//replaceChild
const repl = document.querySelector('ul')
const chnageTo = repl.children[1];
const newChild = document.createElement('li');
newChild.textContent = 'Meow';
repl.replaceChild(newChild,chnageTo)

//PreviousSibling
const m = document.querySelector('.hero');
console.log(m.previousSibling); //It print #text 


