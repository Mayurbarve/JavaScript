//getAttribute
const Att = document.querySelector('#hero')
console.log(Att.getAttribute('about'));

//setAttribute
hero.setAttribute("exapmle",123);
console.log(hero.outerHTML);

//get All Attribute
for(let attr of hero.getAttribute){
    console.log(`${attr.name} = ${attr.value}`);
}