/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const res = [];
    arr.forEach((val, i)=>{
        if(fn(val, i)){
            res.push(val)}
        else if(!fn(val, i)){
            let a;}
        else {
            res.push(fn(val, i))
        }
    })
    return res;
    
};