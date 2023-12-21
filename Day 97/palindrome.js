/*Palindrome Checker:
Write a function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise. */
function reverse(str)
{
    return str.reverse();
}

function isPalindrome(str)
{
    let reversedStr= reverse(str);
    if(reversedStr===str)
    {
        console.log("palindrome")
    }
    else{
        console.log("not an palindrome")
    }
}
isPalindrome("mam");