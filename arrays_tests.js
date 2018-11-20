const assert = require('assert');
const arraysLibrary = require('./arraysLibrary.js');
const arrayFunctionsLibrary = require('./arrayFunctionsLibrary.js');
const {filter} = arrayFunctionsLibrary;
const {isEven} = arraysLibrary;

assert.deepEqual(filter(isEven,[]),[]);
assert.deepEqual(filter(isEven,[0]),[0]);
assert.deepEqual(filter(isEven,[0,1]),[0]);
assert.deepEqual(filter(isEven,[0,2]),[0,2]);
assert.deepEqual(filter(isEven,[1,3]),[]);
