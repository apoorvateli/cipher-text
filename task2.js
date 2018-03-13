var vowels = ["a", "e", "i", "o", "u"];
var map = ["e", "i", "o", "u", "a"];

function isVowel(char) {
  return vowels.indexOf(char.toLowerCase()) !== -1;  // returns index of vowel from vowels[], if the char is a vowel
}

// for encoding, vowel at index i in vowels[] will be replaced with corresponding vowel in map[] i.e. reverseVowel(vowel, vowels, map)
// for decoding, reverseVowel(vowel, map, vowels) while calling reverseVowel()

function reverseVowel(vowel, arr1, arr2) {
  var changedVowel;
  var  index = arr1.indexOf(vowel.toLowerCase());
  if (vowel === vowel.toUpperCase()) {    // check if given vowel is uppercase
    changedVowel = arr2[index].toUpperCase(); // if yes, then make the corresponding vowel in arr2 uppercase
  }
  else changedVowel = arr2[index]; // else keep it lowercase
  return changedVowel;
}

function encode(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if ( isVowel(char) ) {      // if character of string is a vowel
      var new_vowel = reverseVowel(char, vowels, map);
      result = result.concat(new_vowel);
    }
    else { // if char is constant
      var new_pattern = char + "o" + char;
      result = result.concat(new_pattern);
    }
  }
  return result;
}

function decode(str) {
  // first if constant is found, check for pattern & replace pattern with constant
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (isVowel(char) === false) {  // char is constant
      var pattern = char + "o" + char;
      var re = new RegExp(pattern);
      str = str.replace(re, char);
    }
    else {
      // reverse vowel
      var new_vowel = reverseVowel(char, map, vowels);
      str = str.replace(char, new_vowel);
    }
  }
  return str;
}

// Output:
console.log("---ENCODE---");
console.log("\nEncode string: SECRET");
console.log(encode("SECRET"));    // run encode()
console.log("\nEncode string: hEllo");
console.log(encode("hEllo"));   // run encode()
console.log("\nEncode string: egUio");
console.log(encode("egUio"));  // run encode()

console.log("\n---DECODE---");
console.log("\nDecode string: SoSICoCRoRIToT");
console.log(decode("SoSICoCRoRIToT"));    // run decode()
console.log("\nDecode string: hohIlollolu");
console.log(decode("hohIlollolu"));   // run decode()
