/*...........filter..............*/
const filter = function(functionReference,array){
  let filterResult = [[],[]];
    
  for(let index = 0;index < array.length; index ++){
   filterResult[functionReference(array[index])].push(array[index]);
  }
  return filterResult[0];
}

exports.filter = filter;
