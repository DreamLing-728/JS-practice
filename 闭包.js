function A(){
    var value = 'A';
    function B(){
        return value
    }
    return B;
}
console.log(A()())

// function A(){
//     var value = 'A';
//     return value;
// }
// var result = A()
// console.log(result)


// var name = "The Window";

// var object = {
//     name: "My Object",

//     getNameFunc: function () {
//         return function () {
//             return this.name;
//         };

//     }

// };

// alert(object.getNameFunc());

// function actionList(){
//     var list = [];
//     return function(option){
//         if(list.indexOf(option) > -1){
//             console.log('已存在')
//         } else{
//             list.push(option);
//             console.log('不存在')
//             console.log(list);
//         }
//     } 
// }

// var action = actionList();
// action('张三')
// action('李四')
// action('张三')

// actionList('张三')()
// actionList('李四')()
// actionList('张三')()