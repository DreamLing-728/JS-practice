// 正常的对象:是可以被：增删改
// let obj = { a: '1', b: '2'}
// obj.a = '11';
// obj.c = '33';
// delete obj.b;
// console.log(obj);

// 方式一：防止扩展preventExtensions
// 可以：改删，不可以：增
// let obj = { a: '1', b: '2'}
// Object.preventExtensions(obj)
// obj.a = '11';
// obj.c = '33';
// delete obj.b;
// console.log(obj);

// 方式二：密封seal()
// 可以：改，不可以：删增
// let obj = { a: '1', b: '2'}
// Object.seal(obj)
// obj.a = '11';
// obj.c = '33';
// delete obj.b;
// console.log(obj);

// 方式三：冻结freeze()
// 不可以：增删改
// let obj = { a: '1', b: '2'}
// Object.freeze(obj)
// obj.a = '11';
// obj.c = '33';
// delete obj.b;
// console.log(obj);

// 对于同一个对象，防止扩展-->密封-->冻结这种操作是不可逆的。一旦该对象被冻结，是无法恢复到防止扩展或密封状态的。一旦该对象被密封，是无法恢复到防止扩展状态的。一旦对象被锁定，它将无法解锁。
let obj = { a: '1', b: '2'}
Object.freeze(obj);
Object.seal(obj);
obj.a = '11';
console.log(obj);

