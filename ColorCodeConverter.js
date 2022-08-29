ex_1 = '#C9143C'; //hex
ex_2 = '(201,20,60)'; //rgb

function converter(code){
    dict = {'0':0, '1':1, '2':2, '3':3, '4':4,'5':5, '6':6, '7':7,
    '8':8, '9':9, 'A':10, 'B':11, 'C':12, 'D':13, 'E':14, 'F':15}

    if (code.indexOf('#') !== -1 && code.length === 7) {
        R = dict[code[1]]*16 + dict[code[2]];
        G = dict[code[3]]*16 + dict[code[4]];
        B = dict[code[5]]*16 + dict[code[6]];
        return console.log(`RGB code is (${R},${G},${B})`);
    } 
    else if (code.indexOf('(') !== -1) {
        function getObjKeys(obj, value) {
            return Object.keys(obj).filter(key => obj[key] === value);
          }

        code = code.replace(/[()]/g, '');
        R = code.split(',')[0];
        G = code.split(',')[1];
        B = code.split(',')[2];
        
        x = getObjKeys(dict, Math.floor(R/16));
        y = getObjKeys(dict, R%16);
        z = getObjKeys(dict, Math.floor(G/16));
        l = getObjKeys(dict, G%16);
        m = getObjKeys(dict, Math.floor(B/16));
        n = getObjKeys(dict, B%16);
        hex = x+y+z+l+m+n;

        return console.log(`HEX code is #${hex}.`)
    }
    else{
        console.log('Please input Hex or RGB color format!')
    }
}
