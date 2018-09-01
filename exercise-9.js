//Soal Exercise 9 
'use strict'

//Nomor 1
function shoutOut(){
    return 'Halo Function!'
}
console.log(shoutOut())

//Nomor 2
var num1 = 5
var num2 = 6
function calculateMultiply(num1, num2){
    calculateMultiply = num1 * num2

    return calculateMultiply
}

var hasilPerkalian = calculateMultiply(num1,num2)
console.log(hasilPerkalian)

//Nomor 3
var name = 'Agus'
var age = 30
var address = 'Jln. Malioboro, Yogjakarta'
var hobby = 'gaming'

function processSentence(nama, umur, alamat, hobi){
    var biodata =''
    biodata = 'Nama saya '+nama+', umur saya '+umur+' tahun'+', alamat saya di '+alamat
    biodata += ', dan saya punya hobby yaitu '+hobi+'!'

    return biodata
}

var fullSentence = processSentence(name,age,address,hobby)
console.log(processSentence(name,age,address,hobby))
