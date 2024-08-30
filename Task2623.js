/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const mem = new Map();
    return function(...args) {

        if(!mem.has(JSON.stringify(args))){
            const val = fn(...args);
            mem.set(JSON.stringify(args), val);
            return val;
        }
        else{
            return mem.get(JSON.stringify(args))
        }
        
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