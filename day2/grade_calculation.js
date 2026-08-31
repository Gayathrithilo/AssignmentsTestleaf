function gardeCalculation(score) {
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F';
    }
}

console.log(gardeCalculation(95)); 
console.log(gardeCalculation(85)); 
console.log(gardeCalculation(75)); 
console.log(gardeCalculation(65)); 
console.log(gardeCalculation(55)); 