'use strict';

console.log("Hello World");

const myCar = {
Model: 'AWD Trax',
Make: 'Chevy',
Color: 'White',
Year: '2022',
}
document.getElementById("Object").innerHTML = myCar.Model + ", " + myCar.Make + ", " + myCar.Color + ", " + myCar.Year;
console.log(myCar);

const MyJSONObject = JSON.stringify(myCar);

console.log(MyJSONObject);

localStorage.setItem('myCar', MyJSONObject);

console.log(localStorage);

let info = localStorage.getItem('myCar');
console.log(info);

const insects = ["LadyBug", 'Grasshopper', 'Spider', 'Ant', 'Scorpion', 'Butterfly'];

console.log(insects);

const myJSONarray = JSON.stringify(insects);

console.log(myJSONarray);

localStorage.setItem('insects', myJSONarray);

console.log(localStorage);

let information = localStorage.getItem('insects')
console.log(information);
 document.write(insects)