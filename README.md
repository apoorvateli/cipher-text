# cipher-text

## Problem Statement

You have an ordinary word and you have to replace the consonants with the consonant doubled and with an “o” in between.   
So the consonant “b” is replaced by “bob”, “r” is replaced by “ror”, and so on.   
Vowels are to be changed to another matching vowel, the vowel map is given below.

‘A’,’a’   => ‘E’,’e’

‘E’,’e’   => ‘I’,’i’

‘I’,’i’     => ‘O’,’o’

‘O’, ‘o’ => ‘U’, ‘u’

‘U’,’u’  => ‘A’,’a’
 

For eg., a word like, ‘SECRET’ should be encoded to ‘SoSICoCRoRIToT’. Similarly the word ‘SoSICoCRoRIToT’, should be decoded to ‘SECRET’.

Write a program in any language, to encode a string and decode the ciphered text.

## Instructions to run

**Clone the project**  

```git clone https://github.com/apoorvateli/cipher-text.git```

**If you have Node.js installed on your machine**  
* Open up your teminal or command prompt and go to the directory cipher-text  
* Run the program using  
```node task2.js```

**If you don't have Node.js installed on your machine, no worries!**  
* Go to the folder cipher-text-master and open the test.html file with your browser
* In your browser, press Ctrl+Shift+J or Cmd+Shift+J to view the output in the Console and run encode() and decode() with your own text as a parameter.
