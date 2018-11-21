/*............get all the libraries.............*/

const assert = require('assert');
const arraysLibrary = require('../src/arraysLibrary.js');
const arrayFunctionsLibrary = require('../src/arrayFunctionsLibrary.js');
const {filter,map,reduce} = arrayFunctionsLibrary;
const {isEven,hasVowels,square,addCharacter,sum,concat} = arraysLibrary;

/*............tests for filter.............*/

describe('Filter',function(){
  describe('Empty array',function(){
    it('should return an empty array when given an empty array',function(){
      assert.deepEqual(filter(isEven,[]),[]);
    });
  });

  describe('Array with one element',function(){
    it('should return an array with one element if the predicate returns truthy',function(){ 
      assert.deepEqual(filter(isEven,[0]),[0]);
      assert.deepEqual(filter(hasVowels,["a"]),["a"]);
    });

    it('should return an empty array if the predicate returns falsy',function(){
      assert.deepEqual(filter(isEven,[1]),[]);
      assert.deepEqual(filter(hasVowels,["b"]),[]); 
    });
  });

  describe('Array with more than one element',function(){
    it('should return an array with the elements for which the predicate returns truthy',function(){
      assert.deepEqual(filter(isEven,[0,1]),[0]);
      assert.deepEqual(filter(hasVowels,["b","a"]),["a"]);

    });

    it('should return an empty array when the predicate returns falsy for all',function(){
      assert.deepEqual(filter(isEven,[1,3]),[]);
      assert.deepEqual(filter(hasVowels,["c","b"]),[]);        
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

/*....................tests for reduce...............*/

describe('Reduce',function(){
  describe('Numbers',function(){
    it('should reduce array with only one element and no initial value',function(){
      assert.deepEqual(reduce(sum,[1]),1); 
    });

    it('should reduce array with only one element and with initial value',function(){
      assert.deepEqual(reduce(sum,[1],0),1); 
    });

    it('should reduce array with more than one element and no initial value',function(){
      assert.deepEqual(reduce(sum,[1,2]),3); 
    });

    it('should reduce array with more than one element and with initial value',function(){
      assert.deepEqual(reduce(sum,[1,2],1),4); 
    });
  });

  describe('Strings',function(){
    it('should reduce array of only one string and without initial value',function(){
      assert.deepEqual(reduce(concat,["a"]),"a"); 
    });

    it('should reduce array of only one string and with initial value',function(){
      assert.deepEqual(reduce(concat,["a"],"b"),"ba"); 
    });

    it('should reduce array of more than one string and without initial value',function(){
      assert.deepEqual(reduce(concat,["a","b"],),"ab"); 
    });

    it('should reduce array of more than one string and with initial value',function(){
      assert.deepEqual(reduce(concat,["a","b"],"c"),"cab"); 
    });

    it('should reduce array of more than one string and with initial value as an array',function(){
      assert.deepEqual(reduce(concat,["a","b"],["c"]),["c","a","b"]); 
    });
  });
});
