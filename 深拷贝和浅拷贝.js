// 浅拷贝的实现方式
// 方式一：lodash的_.clone方法
// var _ = require('lodash');
// let A = { a: '1', b: '2', obj: {c: '3'}};
// let B = _.clone(A)
// B.a = '11';
// B.obj.c = '33';
// console.log(A)


// 方式2：数组concat() 基于当前数组的所有项创建一个新的数组返回
// let A = [{ a: '1', b: '2', obj: {c: '3'}}];
// let B = A.concat();
// console.log(B);     // [{ a: '1', b: '2', obj: {c: '3'}}]
// B[0].a = '11';
// B[0].obj.c = '33';
// console.log(A);     // [{ a: '11', b: '2', obj: {c: '33'}}]

// 方式3：数组slice(start, end) 截取原数组的数据后放到新数组中返回
// let A = [{ a: '1', b: '2', obj: {c: '3'}}, {d: '4'}];
// let B = A.slice(0,1);
// console.log(B);     // [{ a: '1', b: '2', obj: {c: '3'}}]
// B[0].a = '11';
// B[0].obj.c = '33';
// console.log(A);     // [{ a: '11', b: '2', obj: {c: '33'}}, {d: '4'}]


// 深拷贝的实现方式
// 方式一: Object.assign()
// 一级对象是深拷贝，二级对象是浅拷贝
// let A = { a: '1', b: '2', obj: {c: '3'}};
// let B = Object.assign({}, A);
// B.a = '11';
// B.obj.c = '33';
// console.log(B);  // { a: '11', b: '2', obj: {c: '3'}}
// console.log(A);     // { a: '1', b: '2', obj: {c: '3'}}

// 方式二：扩展运算符...
// 一级对象是深拷贝，二级对象是浅拷贝
// let A = { a: '1', b: '2', obj: {c: '3'}};
// let B = {...A}
// B.a = '11';
// B.obj.c = '33';
// console.log(B);     // { a: '11', b: '2', obj: {c: '33'}}
// console.log(A);     // { a: '1', b: '2', obj: {c: '33'}}

// 方式三：JSON.parse(JSON.stringify())
// 一级二级对象都是深拷贝
// 利用JSON.stringify将对象转成JSON字符串，再用JSON.parse把字符串解析成对象
// let A = { a: '1', b: '2', obj: {c: '3'}};
// let B = JSON.parse(JSON.stringify(A))
// B.a = '11';
// B.obj.c = '33';
// console.log(B);     // { a: '11', b: '2', obj: {c: '33'}}
// console.log(A);     // { a: '1', b: '2', obj: {c: '33'}}

// 方式四-1：遍历对象（一级对象）
// 简单的for循环只能拷贝一级对象
// let A = { a: '1', b: '2'};
// let B = {};
// for (let key in A) {
//     console.log(A[key]);
//     if (typeof (A[key]) !== 'object') {
//         B[key] = A[key];
//     } 
// }
// B.a = '11';
// console.log('B', B);     // { a: '11', b: '2' }
// console.log('A', A);     // { a: '1', b: '2' }

// 方式四-2：递归遍历对象（有二级对象）
// let A = { a: '1', b: '2', obj: { c: '3' } };
// 递归函数
// function deepClone(target) {
//     console.log('typeof', typeof(target));
//     if (typeof (target) !== 'object') {
//         return target;
//     } else {
//         console.log('这是个对象');
//         let targetObj = {};
//         for(let key in target){
//             targetObj[key] = deepClone(target[key]);
//         }
//         return targetObj;
//     }
// }

// let B = deepClone(A);

// B.a = '11';
// B.obj.c = '33';
// console.log('B', B);     // { a: '11', b: '2', obj: {c: '33'}}
// console.log('A', A);     // { a: '1', b: '2', obj: {c: '33'}}

// 方式四-3：遍历对象(包含了二级对象是数组的情况)
let A = { a: '1', b: '2', obj: ['3'] };
function deepClone(target) {
    console.log('typeof', typeof(target));
    if (typeof (target) !== 'object') {
        return target;
    } else {
        console.log('这是个对象');
        let targetObj = Array.isArray(target) ? [] : {};
        for(let key in target){
            targetObj[key] = deepClone(target[key]);
        }
        return targetObj;
    }
}

let B = deepClone(A);

B.a = '11';
B.obj[0] = '33';
console.log('B', B);     // { a: '11', b: '2', obj: ['33'] }
console.log('A', A);     // { a: '1', b: '2', obj: ['3'] }




