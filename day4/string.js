function lastWordLength(s) {
  const words = s.trim().split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length;
}   
console.log(lastWordLength("Hello World")); 
console.log(lastWordLength(" fly me to the moon "));




function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  if (normalize(str1) === normalize(str2)) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));