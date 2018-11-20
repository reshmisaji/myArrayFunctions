const assert = require('assert');
const arraysLibrary = require('../src/arraysLibrary.js');
const arrayFunctionsLibrary = require('../src/arrayFunctionsLibrary.js');
const {filter} = arrayFunctionsLibrary;
const {isEven,hasVowels} = arraysLibrary;

describe('Filter',function(){
  it('should filter the empty array with the provided function',function(){
    assert.deepEqual(filter(isEven,[]),[]);
  });

  it('should filter the input array with only one element and the provided function',function(){
    assert.deepEqual(filter(isEven,[0]),[0]);
  });

  it('should filter the input array with more than one elements and the provided function',function(){
    assert.deepEqual(filter(isEven,[0,1]),[0]);
  });

  it('should filter the input array with string and the providing function',function(){
   assert.deepEqual(filter(hasVowels,[]),[]);  
   assert.deepEqual(filter(hasVowels,["a"]),["a"]);  
   assert.deepEqual(filter(hasVowels,["b"]),[]);  
   assert.deepEqual(filter(hasVowels,["b","a"]),["a"]);  
   assert.deepEqual(filter(hasVowels,["b","c"]),[]);  
   assert.deepEqual(filter(hasVowels,["a","e"]),["a","e"]);  
  });
});
