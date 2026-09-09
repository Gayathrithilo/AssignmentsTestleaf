function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

//console.log(reverseString('hello'));


function findPalindrome(str){
    let reversed = reverseString(str);
    if (reversed === str) {
        console.log("The string is a palindrome");
    } else {
        console.log("The string is not a palindrome");
    }
}

// findPalindrome('racecar');
// findPalindrome('hello');


function isPalindrome(str){
     let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
    if(str===reversed){
        console.log("Palindrome");
    }else{
        console.log("not palindrome")
    }
}

//isPalindrome("racecar");