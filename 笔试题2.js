// 原对象
let initObj = { 'A': 1, 'B.A': 2, 'B.B': 3, 'CC.D.E': 4, 'CC.D.F': 5 };
let result = {}

// 遍历原对象
for (let key in initObj){
    let arrKey = Array.from(key.split('.'));
    let obj = action(arrKey, initObj[key]);
    console.log('obj', obj);
    for(let key in obj){
        result[key] = obj[key];
    }
}

function addToResult(){
    
}

// 递归
// 输入：['B', 'A'], 2
// 输出： {'B': {'A': 2}}
function action(key, value){
    if(key.length == 1){
        var keyTemp = key[0]
        let obj = {};
        obj[key] = value
        return obj
    } else {
        var keyTemp = key.shift(0);
        let obj = {};
        obj[keyTemp] = action(key, value)
        return obj;
    }
}

console.log(result);
