/**
 * @return {Function}
 */
var createHelloWorld = function() {
    console.log('Hello World');

    return function(...args) {
        // console.log('Hello World');
    }

};

const f = createHelloWorld();
f(); // "Hello World"
