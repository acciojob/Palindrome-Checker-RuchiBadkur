// complete the given function

function palindrome(str){
	let newStr = "";
	newStr = str.toLowercase().split("").filter(char => char !== " ").join("");
	
	return newStr === str.toLowercase().split("").reverse().join("");
	
}
module.exports = palindrome
