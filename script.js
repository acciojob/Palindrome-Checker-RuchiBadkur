// complete the given function

function palindrome(str){
	let newStr = "";
	newStr = str.split("").filter(char => char !== " ").join("");
	
	return newStr === str.split("").reverse().join("");
	
}
module.exports = palindrome
