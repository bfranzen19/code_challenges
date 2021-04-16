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
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
    // execution limit == 4s
    // array of integers containing at least 2 elements
    // do no change the order of the array
    // pair of adjacent elements that has largest product
    // return product

    let product = -Infinity;
    for (let i = 1; i < inputArray.length; i++) {
        product = Math.max(inputArray[i] * inputArray[i - 1], product);
    }
    return product;
}

// ======================================= //
/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
*/

function shapeArea(n) {
    // input: integer n, between 1 and 10^4
    // output: integer, the area of the polygon
    // n1 == 1, n2 == 5, n3 == 13, n4 == 25
    //  diff == 4   diff == 8  diff == 12
    //            4          4

    // pattern: each n === 4
    return n * n + (n - 1) * (n - 1);
    //              2 - 1     2 - 1
    //     2 * 2
    //                1    *    1
    //       4   +    1
    // return 5
}

// ======================================= //
/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

// sorting arrays
// statues.sort(function(a,b){
//   return a - b;
// });

// comparing arrays
// const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
//
// const a = [1, 2, 3];
// const b = [1, 2, 3];
//
// equals(a, b); // true

function makeArrayConsecutive2(statues) {
    // input: array, integers (statues)
    // integer --> minimal numebr of statues that need to be added to the existing statues so that it contains every integer

   return Math.max(...statues)-Math.min(...statues)+1-statues.length // return the length of the outstanding statues array
}

// ======================================= //
/*

*/
































/* template */
// ======================================= //
/*

*/
