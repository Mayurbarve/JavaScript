//innerText
//<h1> artistayura <span style ="display: none"> mayuusic </span> </h1>
const innerText = document.querySelector('h1').innerText;
console.log(innerText); // result : artistmayura

//innerContent
const innerContent =document.querySelector('h1');
console.log(innerContent); // result : artistmayura mayuusic

//insertAdjacentHTML
//<div> artistmayura </div>
const Adj = document.querySelector('div')
const newAdj = '<b> mayuusic </b>';
Adj.insertAdjacentHTML("beforebegin",newAdj);
Adj.insertAdjacentHTML("beforeend",newAdj);
Adj.insertAdjacentHTML("afterbegin",newAdj);
Adj.insertAdjacentHTML("afterend",newAdj);

//innerHTML
const innerHtml = document.querySelector('.hero')
innerHtml.innerHTML = '<i>Mayura</i>' //replace the class element by Mayura
console.log(innerHtml.innerHTML);

//outerHTML
const outerHtml = document.querySelector('.hero')
outerHtml.outerHTML = '<i>Meow</i>' //replace whole class 
console.log(outerHtml.outerHTML);


//style

document.body.style.backgroundColor = "#fefefe"
const s = document.querySelector('h1');
s.style.color = 'orange';