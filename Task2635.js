/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = []
    arr.forEach((val,i)=>{
        newArr.push(fn(val, i));
    });
    return newArr;
};