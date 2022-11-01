const printAsyncName = function(callback, name) {
    setTimeout (() => callback(), 1000);
    setTimeout(() => {console.log(name)},2000);
}

let sayHi = () => console.log("Hello");

printAsyncName(sayHi,"Salvatore")