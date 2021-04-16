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
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
*/
















<<<<<<< HEAD
// template
/* =========================== */
/*

*/
=======




/* template */
// ======================================= //
/*

*/



// ======================================= //
>>>>>>> 5d2b832b206eda0c74a5b6d1dbee00e0fcbe3162
