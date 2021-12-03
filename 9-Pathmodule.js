const path = require('path')
console.log(path.sep)
//returns the path seperator of the system in this case it is'\'.

console.log(path.join)
const filePath = path.join('/content' , 'subfolder','test.txt');


console.log(filePath);
//displays the path of the file that we get.



const base = path.basename(filePath);
console.log(base)
//return the base of the path.



const absresolve = path.resolve(__dirname,'content','subfolder','test.txt');
//points to the directory where the file is located
console.log(absresolve);