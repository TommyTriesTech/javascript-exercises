var repeatString = function(word, x) {
  var startWord = "";
  while (x > 0){
    startWord += word;
    x--;
    if (x === 0){
      return startWord;
    }
  }if (x === 0){
    return startWord;
  }if (x < 0){
    error = "ERROR";
    return error;
  }
}

module.exports = repeatString
