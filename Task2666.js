/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let count = 0;

   return function(...args){
        count++;
       let res = fn(...args);
      
       return count === 1 ? res : undefined;
   }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
