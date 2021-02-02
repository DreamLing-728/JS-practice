// 求斐波那契数列的第100项
// 1, 1, 2, 3, 5, 8, ...

// 方法1：数组
// function action(n){
//     let result = [];
//     for(let i = 0; i < n; i ++){
//         if(i - 2 < 0) {
//             result.push(1)
//         }else {
//             result.push(result[i - 1] + result[i - 2]);
//         }
//     }

//     return result[result.length - 1];
// }

// 方法2：循环
// function action(n){
//     let res1 = 1;
//     let res2 = 1;
//     let sum;
//     for(let i = 1; i < n - 1; i ++){
//         sum = res1 + res2;
//         res1 = res2;
//         res2 = sum;
//     }
//     return sum;
// }

// 方法3-1：递归
// let n = 4
// function action(num1, num2, i){
//     if(i < n){
//         return action(num2, num1 + num2, ++ i)
//     }else {
//         return (num1 + num2);
//     }
// }

// 方法3-2： 更加简明的递归写法
function action(n){
    if(n <= 1){return 1};
    return action(n-2) + action(n-1);
}

console.log(action(4));