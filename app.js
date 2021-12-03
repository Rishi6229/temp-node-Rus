/*
1. npm - global command , comes with node
2. npm --version
3. local dependency - use it only in this particular project
4. glocal dependency- use it in any object
5. npm install -g <packageName>
6. sudo install -g <packageName>
7. package.json - manifest file(Stores important info about project/package)
8. manual approach (create package.json in the root,create properties etc)
9. npm init (step by step, press enter to skip)
10. npm init -y(everything default)
*/

const _ = require('loadash');

const items = [1,[2 , [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
