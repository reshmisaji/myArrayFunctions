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

exports.isEven = isEven;
exports.hasVowels = hasVowels;
exports.square = square;
