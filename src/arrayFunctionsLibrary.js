/*...........filter..............*/
const filter = function(functionReference,array){
  let filterResult = [[],[]];
    
  for(let index = 0;index < array.length; index ++){
    filterResult[functionReference(array[index])].push(array[index]);
  }
  return filterResult[1];
}

/*...........map.................*/
const map = function(functionReference,array){
  let mapResult = [];
   
  for(let index = 0; index < array.length; index++){
    mapResult.push(functionReference(array[index]));
  }
  return mapResult;
}

/*..............reduce................*/
const reduce = function(functionReference,array,initialValue){
  let reduceResult;

  if(!initialValue){
    reduceResult = array[0];
    array.splice(0,1); 
  }else{
    reduceResult = initialValue;
  }

  for(let index = 0; index < array.length; index ++){
    reduceResult = functionReference(array[index],reduceResult);
  }
  return reduceResult;
}

exports.filter = filter;
exports.map = map;
exports.reduce = reduce;
