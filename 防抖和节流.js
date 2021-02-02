// 浏览器的 resize、scroll、keypress、mousemove 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制。

// 防抖：短时间内出发同一个函数，只执行一次（第一次或者最后一次）

// 正常情况下：每按一次事件就会触发一次函数
// window.addEventListener('keypress', ()=>{
//     console.log('keypress')
// })

// 加了防抖
// 案例：回车事件，延迟两秒触发
// 过程：按回车 --> 触发计时器 --> 如果2S内没有再按回车 --> 2秒后触发回车事件
//                           --> 如果2S内再次按了回车 --> 上一个没有结束的定时器会被清除 --> 重新计时，2S后触发回车事件


// function debounce(fn, delay) {
//     let timer = null;

//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             fn.call();
//         }, delay)
//     }
// }

// function foo() {
//     console.log('我按下了keypress');
// }
// window.addEventListener('keypress', debounce(foo, 2000));

// 存在的问题：如果我每次按回车的间隔都不超过2S，那就永远触发不了回车事件了，所以我们把代码改成执行第一次
// function debounce(fn, delay) {

//     var timer = null;
//     console.log('timer', timer);

//     return function () {
//         if (timer) {
//             clearTimeout(timer);
//             timer = setTimeout(function () {
//                 timer = null;
//             }, delay)
//         } else {
//             fn();
//             timer = setTimeout(function(){
//                 timer = null;
//             }, delay)
//         }
//     }
// }

// function foo() {
//     console.log('我按下了keypress');
// }

// window.addEventListener('keypress', debounce(foo, 2000));


// 节流：在固定事件内只执行一次
// 上面的案例还回有新的问题，虽然我第一按回车触发了事件，但是我接着继续按了好几十次，而且每次间隔都不超过2S，就会发现下一次回车事件就永远触发不了，所以引出了新的节流问题
function debounce(fn, delay) {
    var timer = null;

    return function () {
        fn();
        timer = setTimeout(function(){
            timer = null;
        }, delay)
    }
}

function foo() {
    console.log('我按下了keypress');
}
window.addEventListener('keypress', debounce(foo, 2000));