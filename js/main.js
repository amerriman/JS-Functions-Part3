// add scripts

$(document).on('ready', function() {
  //console.log('sanity check!');
});


// 1 Define a function called getStudentName that takes a single object as an argument and returns the value of the name property/key.

function getStudentName(object){
  return object.name;
}

var studentName = {name: 'Michael', age: 27 };

console.log(getStudentName(studentName));


// 2 Define a function called getTotalLetters that takes an array of strings as an argument and returns the total number of letters in all strings.

function getTotalLetters (strArray) {
  var sentence = strArray.join('');
  //console.log(sentence);
  return sentence.length;
}

var stringArray = ['javascript', 'is', 'not', 'python'];
console.log(getTotalLetters(stringArray));


// 3 Define a function called 'createObject' that takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
function createObject(key, value){
  var objectify = {};
  objectify[key] = value;
  return objectify;
}
console.log(createObject('city', 'Boulder'));

// 4 Define a function called getNegativeIndex that takes an array and a negative number as arguments and returns the value from the array at the given negative index.

//This ONLY works if the negNum is ACTUALLY NEGATIVE.
function getNegativeIndex(arr, negNum){

  var index = negNum = -negNum-1;
  //console.log(index);
  //console.log(arr[index]);
  return arr[index];
}

var letterArray = ['a', 'b', 'c', 'd', 'e'];
console.log(getNegativeIndex(letterArray, -3));


// 5 Define a function called removeCharacter that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed. Do not modify the original string. STRETCH: Write a test case for this last requirement.

function removeCharacter(string, character){
  var toArray = string.split('');
  var newString = [];
  for (var i = 0; i < toArray.length; i++) {
     if (toArray[i] !== character){
        newString.push(toArray[i]);
     }
   }
   return newString.join('');
}

console.log(removeCharacter('javascript', 'a')); // => jvscript
console.log(removeCharacter('javascript', '1')); // => javascript
console.log(removeCharacter('12345', '2')); // => 1345

// 6 Define a function called outputObject that takes an object as an argument and returns each key-value pair in the following format 'key .

function outputObject(object) {
  var ages = " ";
  for (var key in object){
    ages += key + " is " + object[key] + "\n";
  }
  return ages;
}

var ages = {john: 10, jerry: 11, jenny: 12 };
console.log(outputObject(ages)); // => john is 10, jerry is 11, jenny is 12


// 7 Define a function called getVowels that takes a string as an argument and returns an array of all the vowels in the string. Do not include duplicates.

var vowels = ["a", "e", "i", "o", "u"];
function getVowels (string) {
  var toTest = string.split('');
  var vowelsCopy = vowels;
  var vowelMatch = "";
  //var vowelMatch = [];
  for (var i = 0; i < toTest.length; i++) {
    for (var j = 0; j < 4; j++) {
      if (toTest[i] === vowelsCopy[j]){
        //vowelMatch += vowelsCopy.splice([j], 1);
      vowelMatch += vowelsCopy.splice([j], 1);
      //debugger;
      }
    }
  }
   return vowelMatch.split('');
}


console.log(getVowels('javaliiuyy'));


// 8 Define a function called captureTwins that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise return false.

function captureTwins (array) {
  //to hold the number of matching pairs
  counter = 0;
  for (var i = 0; i < array.length; i+=2) {
    //do the pairs match?
    if (array[i] === array[i+1]){
      //if yes, bump up the counter
      counter += 1;
    }
  }
  //do ALL the pairs in the array match?
    if (counter === array.length/2){
      return true;
    }
    else{
      return false;
    }
}

console.log(captureTwins(['m', 'm', 'n', 'n', 's', 's'])); // => true
console.log(captureTwins(['m', 'm', 'm', 'n', 's', 's'])); // => false

// 9 Define a function called testBooleanLogic that takes an array of boolean values and returns true if any value is true.

function testBooleanLogic (boolArray) {
  for (var i = 0; i < boolArray.length; i++) {
    if (boolArray[i] === true) {
       //debugger;
      return true;
    }
  }
  return false;
}

console.log(testBooleanLogic([false, true, false, false])); // => true
console.log(testBooleanLogic([false, false, false])); // =>  false

// 10 Define a function called getUniqueValues that takes an array of strings, and returns a new array consisting of the unique values.

function getUniqueValues (arr) {
  var throwOut = [];
  for (var i = 0; i < arr.length; i++){
    for (var j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        throwOut += arr.splice([i], 1);
      }
      //console.log(arr[i], "i", arr[j], 'j');
    }
  }
  return arr;
  //console.log(arr, "arr");
  //console.log(throwOut, "throwOut");
}
console.log(getUniqueValues(['1', '2', '1', '3', '3', '4', '5'])); // => ['m', 'n', 'r', 's']
console.log(getUniqueValues(['michael', 'ben', 'kerry', 'ben'])); // => ['michael', 'ben', 'kerry']




