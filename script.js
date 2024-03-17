// complete the given function

function palindrome(str){
	let newStr = "";
	newStr = str.toLowerCase().split("").filter(char => char !== " ").join("");
	
	return newStr === str.toLowerCase().split("").reverse().join("");
	
}
module.exports = palindrome
