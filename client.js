
var wordArray = [""ASDF", "BLAH", "Oh! ", "Hi ", "There!""]


var stringResult = ''; //starting with an empty string

//concatenate all of the words
for (var i = 0; i < wordArray.length; i++) {
  stringResult = stringResult + wordArray[0]; //Add a word to the string result
}

console.log(stringResult);
