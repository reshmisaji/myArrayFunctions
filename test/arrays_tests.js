/*............get all the libraries.............*/

const assert = require('assert');
const arraysLibrary = require('../src/arraysLibrary.js');
const arrayFunctionsLibrary = require('../src/arrayFunctionsLibrary.js');
const {filter,map,reduce} = arrayFunctionsLibrary;
const {truthyFunction,falsyFunction,square,addCharacter,sum,concat} = arraysLibrary;

/*............tests for filter.............*/

describe('Filter',function(){
  describe('Empty array',function(){
    it('should return an empty array when given an empty array',function(){
      assert.deepEqual(filter(truthyFunction,[]),[]);
    });
  });

  describe('Array with one element',function(){
    it('should return an array with one element if the predicate returns truthy',function(){ 
      assert.deepEqual(filter(truthyFunction,[0]),[0]);
      assert.deepEqual(filter(truthyFunction,["a"]),["a"]);
    });

    it('should return an empty array if the predicate returns falsy',function(){
      assert.deepEqual(filter(falsyFunction,[1]),[]);
      assert.deepEqual(filter(falsyFunction,["b"]),[]); 
    });
  });

  describe('Array with more than one element',function(){
    it('should return an array with the elements for which the predicate returns truthy',function(){
      assert.deepEqual(filter(truthyFunction,[1,2]),[1,2]);
      assert.deepEqual(filter(truthyFunction,["a","b"]),["a","b"]);

    });

    it('should return an empty array when the predicate returns falsy for all',function(){
      assert.deepEqual(filter(falsyFunction,[1,3]),[]);
      assert.deepEqual(filter(falsyFunction,["c","b"]),[]);        
    });
  });
});

/*..........tests for map................*/

describe('Map',function(){
  describe('Empty array',function(){
    it('should return an empty array when given an empty array',function(){
      assert.deepEqual(map(square,[]),[]);
    });
  });

  describe('Array with one element',function(){
    it('should return an array of length 1(one)',function(){
      assert.deepEqual(map(square,[1]),[1]);
      assert.deepEqual(map(addCharacter,["a"]),["a*"]); 
    });
  });

  describe('Array with more than one element',function(){
    it('should return an array of same length as the input array',function(){
      assert.deepEqual(map(square,[1,2]),[1,4]);
      assert.deepEqual(map(addCharacter,["aa","b","c*"]),["aa*","b*","c**"]);
    });
  });
});

/*....................tests for reduce...............*/

describe('Reduce',function(){
  describe('Should not alter the array',function(){
    it('when given an empty array',function(){
      let emptyArray = [];
      reduce(sum,emptyArray,0);
      assert.deepEqual(emptyArray,[]);
    });

    it('when given an array with some elements',function(){
      let nonEmptyArray = [1];
      reduce(sum,nonEmptyArray,0);
      assert.deepEqual(nonEmptyArray,[1]);
    });
  });

  describe('Without Initial Value',function(){
    it('should return undefined if we give an empty array',function(){
      assert.deepEqual(reduce(sum,[]),undefined); 
    });

    it('should return the same element when given an array of one element ',function(){
      assert.deepEqual(reduce(sum,[1]),1); 
      assert.deepEqual(reduce(concat,["a"]),"a"); 
    });

    it('should return a value when given an array with some elements',function(){
      assert.deepEqual(reduce(sum,[1,0]),1); 
      assert.deepEqual(reduce(concat,["a","b"],),"ab"); 
    });
  });

  describe('With initial value',function(){
    it('should return initial value if we give an empty array ',function(){
      assert.deepEqual(reduce(sum,[],0),0);
    });

    it('should return a value combining the accumulator and array elements',function(){
      assert.deepEqual(reduce(sum,[0],1),1); 
      assert.deepEqual(reduce(concat,["a"],"b"),"ba"); 
      assert.deepEqual(reduce(sum,[1,1],1),3); 
      assert.deepEqual(reduce(concat,["a","b"],"c"),"cab"); 
    });
  });
});
