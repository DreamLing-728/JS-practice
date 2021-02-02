let arr = [6, 4, -3, 5, -2, -1, 0, 1, -9];

function action(arr){
    let arrPositive = [];
    let arrNegative = [];
    let arrZero = [];
    arr.forEach(item => {
        if(item > 0) {
            arrPositive.push(item);
        }else if(item < 0){
            arrNegative.push(item);
        }else {
            arrZero.push(item)
        }
    });
    let result = [...arrPositive, ...arrZero, ...arrNegative];
    return result;
}
console.log(action(arr))