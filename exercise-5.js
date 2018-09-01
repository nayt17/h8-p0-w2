//Soal exercise 5

//Nomor 1
var word = 'Javascript '
var second = 'is '
var third = 'awesome '
var fourth = 'and '
var fifth = 'I '
var sixth = 'love '
var seventh = 'it!'

console.log(word.concat(second,third,fourth,fifth,sixth,seventh))

//Nomor 2
var word = 'wow Javascript is so cool'
var exampleFirstWord = word[0] + word[1] + word[2]
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]+word[14]
var thirdWord = word[15]+word[16]
var fourthWord = word[18]+word[19]
var fifthWord = word[21]+word[22]+word[23]+word[24]

console.log('First word: ' +exampleFirstWord)
console.log('Second word: ' + secondWord)
console.log('Third word: ' + thirdWord)
console.log('Fourth word: ' + fourthWord)
console.log('Fifth word: ' + fifthWord)

//Nomor 3
var word3 = 'wow Javascript is so cool'
var exampleFirstWord3 = word3.substring(0,3)
var secondWord3 = word3.substring(4,14)
var thirdWord3 = word3.substring(15,17)
var fourthWord3 = word3.substring(18,20)
var fifthWord3  = word3.substring(21,25)

console.log('First word: ' + exampleFirstWord3)
console.log('Second word: ' + secondWord3)
console.log('Third word: ' + thirdWord3)
console.log('Fourth word: ' + fourthWord3)
console.log('Fifth word: ' + fifthWord3)

//Nomor 4

var word4 = 'wow Javascript is so cool'
var exampleFirstWord4 = word4.substring(0,3)
var secondWord4 = word4.substring(4,14)
var thirdWord4 = word4.substring(15,17)
var fourthWord4 = word4.substring(18,20)
var fifthWord4  = word4.substring(21,25)

var firstWordLength = exampleFirstWord4.length
var secondWordLength = secondWord4.length
var thirdWordLength = thirdWord4.length
var fourthWordLength = fourthWord4.length
var fifthWordLength = fifthWord4.length

console.log('First word: ' + exampleFirstWord4 + ', with lenght ' + firstWordLength)
console.log('Second word: ' + secondWord4 + ', with lenght ' + secondWordLength)
console.log('Third word: ' + thirdWord4 + ', with lenght ' + thirdWordLength)
console.log('Fourth word: ' + fourthWord4 + ', with lenght ' + fourthWordLength)
console.log('Fifth word: ' + fifthWord4 + ', with lenght ' + fifthWordLength)
