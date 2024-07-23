const x = 121;
var isPalindrome = function(x) {
    const abc = JSON.stringify(x)

    const result = abc.split("").reverse().join('')
    if(abc !== result){
        return false
    }
    return true
};
isPalindrome(x)