/*................arrays Library..................*/
const truthyFunction = function(number){
  return 1;
}

const falsyFunction = function(string){
  return 0;
}

const square = function(number){
  return number*number;
}

const addCharacter = function(string){
  return string += "*";
}

const sum = function(currentValue,previousValue){
  return currentValue + previousValue;
}

const concat = function(currentArray,previousArray){
  return previousArray.concat(currentArray);
}

exports.truthyFunction = truthyFunction;
exports.falsyFunction = falsyFunction;
exports.square = square;
exports.addCharacter = addCharacter;
exports.sum = sum;
exports.concat = concat;
