// 1. Inputan berupa array
// 2. console.log(allEqual([1,2,3,4,5])); === false
// 3. console.log(allEqual([12,12,12,12])) === true

var allEqual=(arrAngka=[])=>{
    var totalAngka=0
    banyakAngka=arrAngka.length
    for (i=0; i<banyakAngka; i++){
        var totalAngka = totalAngka + arrAngka[i]
    }
    if ((totalAngka/banyakAngka)==arrAngka[0]){ //arrAngka[0] harus diganti yang lebih pasti hitungannya
        return true
    }
    else{
        return false
    }
    // return totalAngka/banyakAngka
}
console.log(allEqual([1,2,3,4,5,6]))
console.log(allEqual([12,12,12,12]))