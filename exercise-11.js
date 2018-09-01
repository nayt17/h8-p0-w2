//Soal Exercise 11
function balikKata(kata){
    var kalimat = ''
    for(i=0; i<=kata.length-1; i++){
        kalimat = kata[i] + kalimat
    }
    return kalimat
} 

console.log(balikKata('John Doe'))
console.log(balikKata('I am a bookworm'))
console.log(balikKata('Coding is my hobby'))
console.log(balikKata('Super'))