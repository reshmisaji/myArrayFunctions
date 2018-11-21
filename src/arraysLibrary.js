/*................arrays Library..................*/
const isEven = function(number){
  return number % 2;
}

const hasVowels = function(string){
  let result = string.match(/["a","e","i","o","u"]/g)
  let returnValue = result == null? 1 : 0;

  return returnValue;
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

exports.isEven = isEven;
exports.hasVowels = hasVowels;
exports.square = square;
exports.addCharacter = addCharacter;
exports.sum = sum;
exports.concat = concat;
