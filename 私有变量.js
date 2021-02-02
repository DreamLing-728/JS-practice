function A (){
    var name = 'tom';
    this.getName = function(){
        return name
    }
}

let a = new A();
console.log(a.getName());