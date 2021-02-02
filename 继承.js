// 1. 构造函数继承
// function A(name){
//     this.name = name;
//     this.f = function(){
//         console.log('父函数的方法');
//     }
// }
// A.prototype.gender = '女'

// function B(){
//     this.age = 23;
//     A.call(this, '小小梦');
//     // A.apply(this, '小小梦');
// }

// B.prototype.location = '深圳';

// var b = new B();
// console.log(b.name);    // 小小梦
// console.log(b.f);     // 父函数的方法
// console.log(b.gender);  // undefined
// console.log(b.location);    // 深圳
// console.log(b.age);     // 23

// 原型链继承
// function A(){
//     this.name = '小小梦';
// }
// A.prototype.age = 23;

// function B(){
//     this.gender = '女';
// }

// B.prototype = new A();
// B.prototype.location = '深圳';

// let b = new B();
// console.log(b.name);    // 小小梦
// console.log(b.age);     // 23
// console.log(b.gender);  // 女
// console.log(b.location);    //深圳

// 3. ES6的class继承
class A {
    constructor(name){
        this.name = name;
    }

    fa(){
        console.log('父函数的方法');
    }
}
A.prototype.age = 23;

class B extends A{
    constructor(name, gender){
        super(name);
        this.gender = gender;
    }
    fb(){
        console.log('子函数的方法');
    }
}
B.prototype.location = '深圳';

var b = new B('小小梦', '女');

console.log(b.name);    // 小小梦
b.fa();     // 父函数的方法
console.log(b.gender);  // 女
b.fb();     // 子函数的方法
console.log(b.location);    // 深圳

