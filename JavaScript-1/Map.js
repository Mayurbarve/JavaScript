//map

var map1 = new Map([[1, "one"],
["Me", "Mayur"],
["Num", [0, 1, 2, 3, 4]]]);

console.log(map1);

//get values using key
console.log(map1.get(1));

//Set value in set
map1.set("You", "Sakshi")

//get keys using For of
var k = map1.keys();
for (let key of k) {
    console.log(key);
}
