//import chacha from './app.js';
//console.log(a);
//whenever we export default then only one file can be exported and in import file we can import that file by any name
//2.named export
import naam from './app.js';
console.log(naam); 
import laude from './test.js';
console.log(naam,laude);
import {age} from './app.js';//to import any named export we need to write the correct name inside {}
console.log(age);