"use strict";
const num1Ele = document.getElementById('num1');
const num2Ele = document.getElementById('num2');
const btn = document.getElementById("button");
let numResult = []; //generic type
let textResult = [];
function add(num1, num2) {
    if (typeof num1 == "string" && typeof num2 == "string") {
        return num1 + ' ' + num2;
    }
    else if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', () => {
    const num1 = num1Ele.value;
    const num2 = num2Ele.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const stringResult = add(num1, num2);
    textResult.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResult, textResult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result);
});
