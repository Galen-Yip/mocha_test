'use strict';

function fibonacci(n) {
    if(typeof n !== 'number') {
        throw new Error('n should be a number')
    }

    if(n < 0) {
        throw new Error('n should be >= 0')
    }

    if(n <= 1) {
        return n
    } 

    return fibonacci(n - 1) + fibonacci(n - 2)
}

exports.fibonacci = fibonacci