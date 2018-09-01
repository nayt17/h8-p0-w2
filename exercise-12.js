//Soal Exercise 12
function konversiMenit(menit){
    var jam = ''
    var nilai1 = ''
    var nilai2 = ''

    if (menit%60 == 0 ) {
        hasilJam = menit/60
        return (hasilJam+':'+'00')
    }else{
        nilai2 = menit
        nilai1 = menit/60
        nilai1 = Math.floor(nilai1)
        nilai2 = menit%60
        if(nilai2<10){
            return (nilai1+':0'+nilai2)
        }else{
            return (nilai1+':'+nilai2)
        }

    }
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))