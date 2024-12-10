//1.feladat
function maskify(cc){
    return cc.slice(0,-4).replace(/./g,'#')+ cc.slice(-4);
}
console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
//2.feladat
function isTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(1,2,2));
console.log(isTriangle(4,2,3));
console.log(isTriangle(2,2,2));
console.log(isTriangle(1,2,3));
console.log(isTriangle(-5,1,3));
console.log(isTriangle(0,2,3));
console.log(isTriangle(1,2,9));
//3.feladat
function timeConvert(num){
    if (num <= 0){
        return "00:00";
    }
    let hours = Math.floor(num / 60);
    let min = num % 60;
    return  String(hours).padStart(2, '0');
    return String(min).padStart(2, '0');
}
//4.feladat
function createArrayOfTiers(num){
    const numStr=''+num;
    const result=[];
    for (let i = 1; i <= numStr.length; i++) {
        result.push(numStr.slice(0, i));
    }
    return result.sort();
    return(num)
}