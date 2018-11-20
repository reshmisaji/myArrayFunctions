const assert = require('assert');
const arraysLibrary = require('../src/arraysLibrary.js');
const arrayFunctionsLibrary = require('../src/arrayFunctionsLibrary.js');
const {filter} = arrayFunctionsLibrary;
const {isEven,mapLength} = arraysLibrary;

describe('Filter',function(){
  it('should filter the input array with the providing function',function(){
    assert.deepEqual(filter(isEven,[]),[]);
    assert.deepEqual(filter(isEven,[0]),[0]);
    assert.deepEqual(filter(isEven,[0,1]),[0]);
    assert.deepEqual(filter(isEven,[0,2]),[0,2]);
    assert.deepEqual(filter(isEven,[1,3]),[]);
  });
});
