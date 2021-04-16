/* =========================== */
/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/

function firstDuplicate(a) {
    /*
    // another approach that's slightly harder to read. similar idea - store the current value somewhere and if it pops up again, return it. if not, add it to the store.
    const memory = {};
    for (let i = 0; i < a.length; i++) {
        if (memory[a[i]] !== undefined) { return a[i]; }
        else { memory[a[i]] = a[i]; }
    }
    return -1;
    */

    let r = new Set();  // create a new set
    for(e of a) {   // iterate over the array a
        if (r.has(e)) { return e; }   // if the set contains the current element, return it, that's the first repeated element
        else { r.add(e); } // if the set does not contain the element, add it
    }
    return -1   // if no element is repeated, return -1
}

/* =========================== */
/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
*/
function centuryFromYear(year) {
    if(year%100 !== 0) {    // check if there is a remainder
        let century = Math.floor(year/100)+1;   // get the quotient and add 1 because it's over the threashold
        return century;
    }
    else {
        let century = (year/100);   // even number, divide and call it good
        return century;
    }
}

// ======================================= //
/*
Given the string, check if it is a palindrome.
*/

function checkPalindrome(inputString) {
    // same backwards as it is forwards
    // return boolean --> true if palindrome, false if not
    // non-empty string, only lowercase, between 1 and 10^5 length

    let reverseStr = inputString.split('').reverse().join(''); // string --> split to array, reverse, join, save in 2nd variable
    return inputString === reverseStr;  // compare strings
}

// ======================================= //
/*

*/

















/* template */
// ======================================= //
/*

*/
