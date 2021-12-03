//commonJs  , every file in node is module.
//MODULES:- blocks that help us to split the code that is why we use modules. 
//encapsulated code we only share minimum.

const names = require('./4-firstMod');
const sayHi = require('./5-module.js');
const papaFma = require('./6-alternative-flavor.js');
console.log(papaFma);
require('./7-mind-grenade')


//sayHi('susan');
//sayHi(names.Rishi);
sayHi(names.Akash);
