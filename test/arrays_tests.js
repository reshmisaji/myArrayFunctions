const assert = require('assert');
const arraysLibrary = require('../src/arraysLibrary.js');
const arrayFunctionsLibrary = require('../src/arrayFunctionsLibrary.js');
const {filter,map} = arrayFunctionsLibrary;
const {isEven,hasVowels,square} = arraysLibrary;

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

  it('should filter the empty array and the providing function',function(){
   assert.deepEqual(filter(hasVowels,[]),[]);  
  });

  it('should filter the array with only one string and the provided function',function(){
   assert.deepEqual(filter(hasVowels,["a"]),["a"]);  
  });

  it('should filter the array with more than one string and the provided function',function(){
   assert.deepEqual(filter(hasVowels,["b","a"]),["a"]);  
  });
});

describe('Map',function(){
  it('should map empty array with the provided function',function(){
    assert.deepEqual(map(square,[]),[]);
  });
  it('should map array with only one element and the provided function',function(){
    assert.deepEqual(map(square,[1]),[1]);
  });
  it('should map array with more than one element and the provided function',function(){
    assert.deepEqual(map(square,[1,2]),[1,4]);
  });
});
