/*...........filter..............*/
const filter = function(functionReference,array){
  let filterResult = [[],[]];
    
  for(value of array){
   filterResult[functionReference(value)].push(value);
  }
  return filterResult[1];
}

exports.filter = filter;
