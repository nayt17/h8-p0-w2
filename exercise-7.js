//Soal Exercise 7 (looping-asterisk)

//Nomor 1
var rows1 = 1

while(rows1<=5){
    console.log('*')
    rows1++
}


//Nomor 2

var star =''
var rows2 = 5

for(i=0; i<rows2; i++){
    for(j=0; j<rows2; j++){
        star += '*'
    }
    console.log(star)
    j=0
    star=''
    
}



//Nomor 3
var rows3 = 5

for(i=1;i<=1;i++){
    var tes = ''
    for(j=1; j<=rows3;j++){
        tes += '*'
        console.log(tes)
    }
}