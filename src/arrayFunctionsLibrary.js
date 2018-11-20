/*...........filter..............*/
const filter = function(functionReference,array){
  let filterResult = [[],[]];
    
  for(let index = 0;index < array.length; index ++){
    filterResult[functionReference(array[index])].push(array[index]);
  }
  return filterResult[0];
}

/*...........map.................*/
const map = function(functionReference,array){
  let mapResult = [];
   
  for(let index = 0; index < array.length; index++){
    mapResult.push(functionReference(array[index]));
  }
  return mapResult;
}

exports.filter = filter;
exports.map = map;
