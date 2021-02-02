// Set: 集合

// 1. 可以理解为一个去重的数组
// let s = new Set();
// s.add(1);
// s.add(3);
// s.add(2);
// s.add(2);
// console.log(s);s

// 应用：数组去重
// let arr = [1, 3, 2, 2];
// let s = new Set(arr);
// arr = [...s];
// console.log(arr);

// 数组Array --> Set
// let arr = [1, 3, 2, 2];
// let s = new Set(arr);
// console.log(s);

// 类数组 --> Set
// arguments是类数组
// function f(){
//     return arguments;
// }
// let s = new Set(f(1,2,3,4,3,5))
// console.log(s);


// Set --> Array
// let s = new Set();
// s.add(1);
// s.add(3);
// s.add(2);
// s.add(2);
// let arr = [...s];
// console.log(arr);
// for(let item of s){
//     console.log(item);
// }


// let s = new Set([1,2]);
// let arr = new Set([...s].map((x)  => (x = x*2)));
// console.log(arr);

// let s = new Set([1,2]);
// s = new Set(Array.from(s, x => (x*2)))
// console.log(s);

// 并集
// let s1 = new Set([1,2]);
// let s2 = new Set([2,3]);
// let u = new Set([...s1, ...s2]);
// console.log(u);


// 交集
// let s1 = new Set([1,2]);
// let s2 = new Set([2,3]);
// let n = new Set([...s1].filter(x => s2.has(x)));
// console.log(n);


// Map: 字典

// ES5的对象
// let obj = {};
// obj.a = '1';
// obj.b = '2';
// obj.b = '3';
// console.log(obj);

// ES6的Map
// let m = new Map();
// m.set('a', '1');
// m.set('b', '2');
// m.set('b', '3')
// m.set({}, '4');
// console.log(m);

// 嵌套二位数组构造map
let arr = [
    ['a', 1],
    ['b', 2]
];
let m = new Map(arr);
console.log(m);

