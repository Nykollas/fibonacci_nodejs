'use strict'





const fibonacci = (last,arr) => {

    if(!arr){
        arr = [0,1];
        last = 1;
    }
    let lastButOneIndex  = arr.length - 2;
    let next  = Number(arr[ lastButOneIndex ] + last);
    if(next > 350){
        return arr;
    }
    arr.push(next);
    return fibonacci(next, arr)
}

let startArr = [0,1]




const isFibonnaci = (num) => {
    let fibonacciArr = fibonacci(1, startArr);
    let res  = fibonacciArr.find((val) => {
        return val == num;
    })
    if(res){
        return true;
    }else{
        return false
    }
}   



module.exports = {
    fibonacci,
    isFibonnaci
}
