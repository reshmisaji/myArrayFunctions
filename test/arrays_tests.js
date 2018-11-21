/*............get all the libraries.............*/

const assert = require('assert');
const arraysLibrary = require('../src/arraysLibrary.js');
const arrayFunctionsLibrary = require('../src/arrayFunctionsLibrary.js');
const {filter,map} = arrayFunctionsLibrary;
const {isEven,hasVowels,square,addCharacter} = arraysLibrary;

/*............tests for filter.............*/

describe('Filter',function(){
  describe('numbers',function(){
    it('should filter the empty array with the provided function',function(){
      assert.deepEqual(filter(isEven,[]),[]);
    });

    it('should filter the input array with only one element and the provided function',function(){
      assert.deepEqual(filter(isEven,[0]),[0]);
    });

    it('should filter the input array with more than one elements and the provided function',function(){
      assert.deepEqual(filter(isEven,[0,1]),[0]);
    });
  });

  describe('string',function(){
    it('should filter the array with only one string and the provided function',function(){
      assert.deepEqual(filter(hasVowels,["a"]),["a"]);  
    });

    it('should filter the array with more than one string and the provided function',function(){
      assert.deepEqual(filter(hasVowels,["b","a"]),["a"]);  
    });
  });
});

/*..........tests for map................*/

describe('Map',function(){
  describe('numbers',function(){
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

  describe('strings',function(){
    it('should map array with no string',function(){
      assert.deepEqual(map(addCharacter,[]),[]); 
    });

    it('should map array with only one string',function(){
      assert.deepEqual(map(addCharacter,["a"]),["a*"]); 
    });

    it('should map array with more than one string',function(){
      assert.deepEqual(map(addCharacter,["aa","b"]),["aa*","b*"]);
    });
  });
});
