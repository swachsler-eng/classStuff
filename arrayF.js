'use strict';

const number = [1, 2, 3, 4];
number.forEach(function (n){
    console.log(n);
});

function ourForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }   
}

ourForEach(number, function (n) {
    console.log(n);
});



// eslint-disable-next-line no-unused-vars
function ourFilter(array, callback) {
    return [];
 }
console.log(ourFilter(number, function (n) {
    return n % 2 === 0;
}));
