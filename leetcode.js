// leetcode 75 challenges //

/* 
1768. Merge Strings Alternately
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.Return the merged string.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    let merged = [];

    const one = word1.split("");
    const two = word2.split("");

    if (one.length >= two.length) {
        one.forEach((l, i) => {
            merged.push(one[i], two[i]);
        });
    } else {
        two.forEach((l, i) => {
            merged.push(one[i], two[i]);
        });
    }

    return merged.join("");
};

/*
1071. Greatest Common Divisor of Strings
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    let str1Len = str1.length;
    let str2Len = str2.length;

    while (str2Len) {
        let tmp = str2Len;

        str2Len = str1Len % str2Len;
        str1Len = tmp;
    }

    return str1.substring(0, str1Len);
};

/*
1431. Kids With the Greatest Number of Candies
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
    const maxCandies = Math.max(...candies);

    return candies.map((candy) => candy + extraCandies >= maxCandies);
};

/**
 * 605. Can Place Flowers
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for(let i=0 ; i<flowerbed.length ; i++) {
        if (flowerbed[i] === 0) {
            const prev = flowerbed[i - 1] || 0;
            const next = flowerbed[i + 1] || 0;

            if (prev === 0  && next === 0) {
                flowerbed[i] = 1;
                count ++;
            }
        }
    }

    return count >= n;

/**
 * 345. Reverse Vowels of a String
 * Given a string s, reverse only all the vowels in the string and return it. 
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vowel = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/gi, element => vowel.pop());
};

/**
 * 151. Reverse Words in a String
 * Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. 
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => s.split(' ').filter(el => el.length > 0).reverse().join(' ');

/**
 * 
 */