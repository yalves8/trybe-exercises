
const num = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
};

const encode = (string) => {
    let arrSt = string.split('');
    let propNum = Object.keys(num);
    let propVal = Object.values(num);
    arrSt.forEach((st) =>propNum.filter((p,index2) => {
        if(p === st) string = string.replace(st, propVal[index2]);
    }));
    return string;
}
console.log(encode('aeiou'));

module.exports = encode;