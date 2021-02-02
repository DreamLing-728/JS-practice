let arrinit = [2, 2, 3, 3]

// 方法一：用新的数组存放不重复的值
// function action(arrinit){
//     let result = [];
//     arrinit.forEach(item => {
//         if(result.indexOf(item) < 0){
//             result.push(item)
//         }
//     });
//     return result;
// }

// 方法二：借助set
// function action(arrinit){
//     let m = new Set(arrinit);
//     // let result = [...m];     // 方式1
//     let result = Array.from(m);     // 方式2
//     return result;
// }

// 方法三：双重for循环，用splice方法删除数据
// function action(arrinit){
//     for(let i = 0; i < arrinit.length; i ++){
//         for(let j = i + 1; j < arrinit.length; j ++){
//             if(arrinit[i] == arrinit[j]){
//                 arrinit.splice(i, 1);
//                 i --;
//             }
//         }
//     }
//     return arrinit;
// }

// 方法四：先sort，再比较两个相邻的元素
// function action(arrinit) {
//     arrinit.sort();
//     for (let i = 0; i < arrinit.length - 1; i++) {
//         if (arrinit[i] == arrinit[i + 1]){
//             arrinit.splice(i, 1);
//             i --;
//         }
//     }
//     return arrinit;
// }

// 方法五：利用对象的属性不能相同去重
// function action(arrinit){
//     let resultarr = [];
//     let resultabj = {};
//     arrinit.forEach(item => {
//         if(!resultabj[item]){
//             resultabj[item] = 1;
//             resultarr.push(item)
//         }
//     });
//     return resultarr;
// }

// 方法六：借助数组的includes方法
// function action(arrinit){
//     let result = [];
//     for(let i = 0; i < arrinit.length; i ++){
//         if(!result.includes(arrinit[i])){
//             result.push(arrinit[i]);
//         }
//     }
//     return result;
// }

// 方法七：借助数组的filter方法
// function action(arrinit){
//     return arrinit.filter((item, index) => {
//         return arrinit.indexOf(item) === index;
//     })
// }

// 方法八：借助ES6的Map数据结构也可以去重
function action(arrinit){
    let result = []
    let m = new Map();
    arrinit.forEach(element => {
        if(!m.has(element)){
            m.set(element, true);
            result.push(element);
        }
    });
    return result;
}

console.log(action(arrinit))












