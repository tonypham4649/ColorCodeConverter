ran = [1, 3, 5, 7, 8, 9, 10]

function numHunter(array, target){
    com = [];
    for (var i = 0; i <= array.length; i++) {
        remain = target - array[i];
        pos_re = array.indexOf(remain)
        if (array.includes(remain) && pos_re != i) {
            com.push([array[i], remain]);
            array.splice(pos_re,1)
        }
    }
    if (com.length === 0){
        console.log('Possible combination is not found!')
    } else {
    console.log('Found possible combination!')
    console.log(com)
    }
}
