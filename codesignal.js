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
add bold tag in string
Given a string s and a list of strings dict, you need to add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them.
*/


function addBoldTag(s, dict) {
    // loop through scroll
    // find longest bold word end index for each index
    // connect them if needed
    // return the result string

    // return -1 if no bold found
    // return the last bold index if found
    const getBoldEnd = (i) => {

    }

    let result = '';

    for(let i=0 ; i<s.length ; i++) {
        let boldEnd = getBoldEnd(i);

        while(boldEnd !== -1) {
            let next =
        }


    }

}

// ======================================= //
/*
get an amount and a list of recipients, return the name and the most even payment amount.

1. cannot overpay anyone
2. split as evenly as possible
*/

function payEvenly(amountToPay, recipients) {
  // return an object containing names and amounts owed
  let recObj = {};

  // get the total totalAmountOwed from recipients
  let totalAmountOwed = 0;
  for(let recipient in recipients) {
    totalAmountOwed += recipients[recipient];
  }

  // if totalAmountOwed <= amountToPay, pay everyone
  if(totalAmountOwed <= amountToPay) { return recipients; }

  // if totalAmountOwed > amountToPay
  else {
    // get equal split amount
    let equalSplit = Math.floor(amountToPay / Object.keys(recipients).length);

    // need to find highest and lowest payment amounts
    let arr = Object.values(recipients);  // could be problematic for a large number of recipients
    let highest = Math.max(...arr);
    let lowest = Math.min(...arr);

    // equalSplit is less than or equal to totalAmountOwed
    if(equalSplit > totalAmountOwed) {
      // if payments aren't using equalSplit, use this variable
      let payment = 0;

      // check that equalSplit does not exceed the lowest amount available. return empty obj.
      if(lowest <= amountToPay) {
        return {};
      }

      // make sure equalSplit isn't overpaying the lowest payment
      if(lowest <= equalSplit) {
        if(highest <= equalSplit) { payment = highest; }
        else if(lowest >= equalSplit) { payment = lowest; }
        else { payment = equalSplit; }
      }
      else {
        for(let recipient in recipients) {
          recObj[recipient] = lowest;
        }
      }

      if(payment > 0) {
        for(let recipient in recipients) {
          recObj[recipient] = equalSplit;
        }
      }
    }
    // equalSplit < totalAmountOwed, return equalSplit
    else {
      for(let recipient in recipients) {
        recObj[recipient] = equalSplit;
      }
    }
  }

  // check that the overall amount does not exceed the available funds
  let totalAmountPaid = 0;
  for(let prop in recObj) {
    totalAmountOwed += recObj[prop];
  }

  if(totalAmountPaid <= amountToPay) {
    return recObj;
  }
  else {
    return 'error: payment amount exceeds available funds';
  }
}


// examples
let amt_even = 100;
let rec_even = {
  "bob": 25,
  "mary": 25,
  "joe": 25,
  "larry": 25
}
let even = payEvenly(amt_even, rec_even);
console.log('even: ' + JSON.stringify(even)); // expect 25 each

let amt_high = 100;
let rec_high = {
  "bob": 125,
  "mary": 25,
  "joe": 75,
  "larry": 35
}
let high = payEvenly(amt_high, rec_high);
console.log('high: ' + JSON.stringify(high)); // expect 25 each

let amt_highest = 100;
let rec_highest = {
  "bob": 225,
  "mary": 125,
  "joe": 175,
  "larry": 335
}
let highest = payEvenly(amt_highest, rec_highest);
console.log('highest: ' + JSON.stringify(highest)); // expect 25 (even split) - all values exceed split

let most_recps = 100;
let rec_most = {
  "bob": 225,
  "mary": 125,
  "joe": 175,
  "larry": 335,
  "skip": 17,
  "strous": 22
}
let most = payEvenly(most_recps, rec_most);
console.log('most: ' + JSON.stringify(most)); // expect 17

// ======================================= //
/*

*/


























/* template */
// ======================================= //
/*

*/
