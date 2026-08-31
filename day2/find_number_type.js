function findNumberType(num){
    if(num>0){
        return "Positive";
    }
    else if(num<0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}

console.log(findNumberType(-5));
console.log(findNumberType(0));
console.log(findNumberType(10));
console.log(findNumberType(-0));