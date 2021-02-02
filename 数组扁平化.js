// let arrinit = [1, 2, 3, [4, 5, [7, 8]], 6];
let arrinit = [1, 2, 3]

// 方法1：ES6的flat方法
// function action(arrinit){
//     let result = arrinit.flat()
//     return result;
// }

// 方法2：数组.join() ==> 字符串 ==> 字符串.split()
// function action(arrinit){
//     let result = arrinit.join().split();
//     return result;
// }

// 方法3：递归
// let result = [];
// function action(arrinit){
//     arrinit.forEach(element => {
//         if(typeof(element) !== 'object'){
//             result.push(element);
//         } else {
//             action(element);
//         }
//     });
// }

// 方法4：扩展运算符(但是这个只能把二维变一维)
// function action(arrinit){
//     let result = [...arrinit];
//     return result;
// }

// 方法5：数组.toString() ==> 字符串
// function action(arrinit){
//     let result = arrinit.toString().split();
//     return result;
// }

// 方法6：借助reduce()
function action(arrinit){
    return arrinit.reduce((prev, cur) => {
        console.log(prev, cur);
        // console.log((typeof(cur) === 'object') ? action(cur) : cur)
        let result = prev.push(((typeof(cur) === 'object') ? action(cur) : cur));
        console.log(result)
        return result
    }, [])
}


action(arrinit);
// console.log(result);