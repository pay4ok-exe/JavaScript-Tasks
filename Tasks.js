/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let count = 0;
    let mem = new Map();
    return function(...args) {
        const key = JSON.stringify(...args);
        if(mem.has(key)){
            return mem.get(key)
        }
        count++;
        const val = fn(...args);
        mem.set(key, val);
        return val;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */