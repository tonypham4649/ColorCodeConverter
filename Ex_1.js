array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

function cleaner(array){
    count = {};
    for (element of array){
        if (count[element]){
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    n_array = [];
    l_holder = [];
    for ([key, value] of Object.entries(count)){
        for (let n = value; n > 0; --n){
            l_holder.push(Number(key));
        }
        if (l_holder.length === 1){
            n_array.push(Number(l_holder[0]))
        } else {
            n_array.push(l_holder)
        }
        l_holder = [];   
    }
    console.log(n_array)
}
