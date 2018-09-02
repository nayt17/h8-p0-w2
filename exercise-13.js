//Soal exercise 13 (XO Chalenge)

function xo(str){
    var bakO = ''
    var bakX = ''
    for(i=0; i<str.length ; i++){
        if(str[i] === 'x'){
            bakX = bakX + str[i]
        }else{
            bakO = bakO + str[i]
        }
    }
    panjang = bakO.length/bakX.length
    if(panjang == 1){
        return true
    }else{
        return false
    }
}

console.log(xo('xoxoxo'))
console.log(xo('oxooxo'))
console.log(xo('oxo'))
console.log(xo('xxxooo'))
console.log(xo('xoxooxxo'))