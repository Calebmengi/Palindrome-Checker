
const submitBtn = document.getElementById("submit");



function palindromeChecker(){
   const str = document.getElementById("input").value;
   const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
   const reversedStr = cleanedStr.split("").reverse().join("");

   result.innerHTML = '';

   if (cleanedStr === reversedStr){
    let ifPalindrome = `<span style='color:green'><b>"${str.toUpperCase()}"</b></span> is a Palindrome`;
    let result = document.getElementById("result");
    result.insertAdjacentHTML("beforeend", ifPalindrome);
   } else {
    let ifNotPalindrome = `<span style='color:red'><b>"${str.toUpperCase()}"</b></span> is not a Palindrome`;
    result.insertAdjacentHTML("beforeend", ifNotPalindrome);
   }
}

submitBtn.onclick = function(){
    palindromeChecker();
}
