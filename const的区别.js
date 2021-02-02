// 1. var变量会挂在window上，let和const不会
var a = 1;
console.log(window.a);      //1

let b = 2;
console.log(window.b);      //undefined
console.log(b);     // 2

const c = 3;
console.log(window.c);      // undefined
console.log(c);     //3
c = 4;
console.log(c);     //3