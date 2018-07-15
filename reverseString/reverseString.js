var reverseString = function(x) {
  splitString = x.split('');
  reverseArray = splitString.reverse();
  completeString = reverseArray.join('');
  return completeString;
}

module.exports = reverseString
