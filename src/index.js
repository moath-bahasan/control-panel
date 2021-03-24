import './assets/sass/styles.scss';
import 'normalize.css/normalize.css';

console.log("hello form webpack");

var student = require("./studentname");
var student1 = student("moath", "bahasan");

console.table([{ a: 1, b: 'Y'}, {a: 'Z', b: 2}]);

setTimeout( () => alert("hello student!"), 4000);