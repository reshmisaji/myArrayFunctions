/*...........filter..............*/
const filter = function(predicate,array){
  let filterResult = [[],[]];

  for(let element of array){
    filterResult[predicate(element)].push(element);
  }
  return filterResult[1];
}

/*...........map.................*/
const map = function(mapper,array){
  let mapResult = [];

  for(let element of array){
    mapResult.push(mapper(element));
  }
  return mapResult;
}

/*..............reduce................*/
const reduce = function(reducer,array,accumulator){
  if(accumulator==undefined){
    accumulator=array[0];
    array = array.slice(1);
  }

  if(array.length == 0){
    return accumulator;
  }

  accumulator = reducer(array[0],accumulator);
  accumulator=reduce(reducer,array.slice(1),accumulator);
  return accumulator;
}

exports.filter = filter;
exports.map = map;
exports.reduce = reduce;
