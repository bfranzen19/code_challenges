// ======================================= //
/*
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {
    let single = [];
    for(let i=0 ; i<s.length ; i++) {
        let count = s.split(s[i]).length-1;
        if(count === 1) { single.push(s[i]); }
    }

    if(single.length === 0) { return "_"; }
    else { return single[0]; }
}

// ======================================= //























/* template */
// ======================================= //
/*

*/



// ======================================= //
