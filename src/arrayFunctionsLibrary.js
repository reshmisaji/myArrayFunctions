/*...........filter..............*/
const filter = function(predicate,array){
  let filterResult = [[],[]];

  for(let index = 0;index < array.length; index ++){
    filterResult[predicate(array[index])].push(array[index]);
  }
  return filterResult[1];
}

/*...........map.................*/
const map = function(mapper,array){
  let mapResult = [];

  for(let index = 0; index < array.length; index++){
    mapResult.push(mapper(array[index]));
  }
  return mapResult;
}

/*..............reduce................*/
const reduce = function(reducer,array,initialValue){
  let reduceResult;

  if(!initialValue && initialValue != 0){
    if(array.length == 0){
      reduceResult = undefined;
    }else {
      reduceResult = array[0];
      array.splice(0,1); 
    }
  }else{
      reduceResult = initialValue;
    }

    for(let index = 0; index < array.length; index ++){
      reduceResult = reducer(array[index],reduceResult);
  }
  return reduceResult;
}

exports.filter = filter;
exports.map = map;
exports.reduce = reduce;
