//Soal exercise 6

//Nomor 1
var i = 2
var j = 20

console.log('Looping pertama')
while(i <= 20){
    console.log(i + ' - I love coding')
    i+=2
}

console.log('Looping kedua')
while(j > 1 ){
    console.log(j + ' - I will become fullstack developer')
    j-=2
}

//Nomor 2
console.log('Looping pertama(Nomor 2)')
for(i = 1; i <= 20; i++){
    console.log(i + ' - I love coding')
}

console.log('Looping kedua(Nomor 2)')
for(i=20; i>0 ; i--){
    console.log(i + ' - I will become fullstack developer')
}

//Nomor 3
console.log('Ganjil genap counter 1')
for(i=1; i<=100; i++){
    if(i%2){
        console.log('Angka '+ i +' Genap')
    }else{
        console.log('Angka ' + i + ' Ganjil')
    }
}

console.log('')
console.log('Counter 2')
for(i=1; i<=100; i+=2){
    if(i%3){
        console.log('')
    }else{
        console.log('Angka '+i+' Kelipatan 3')
    }
}

console.log('')
console.log('Counter 5')
for(i=1; i<=100; i+=5){
    if(i%6){
        console.log('')
    }else{
        console.log('Angka ' + i + ' Kelipatan 6')
    }
}

console.log('')
console.log('Counter 9')
for(i=1; i<=100; i+=9){
    if(i%10){
        console.log('')
    }else{
        console.log('Angka ' + i + ' Kelipatan 10')
    }
}