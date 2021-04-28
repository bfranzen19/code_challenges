SECTION 1 -- course content
+ into
+ execute js
+ js versions
+ course format


SECTION 2 -- language basics
+  intro
+ use js - inline HTML
    - execute code inside html document by using script tags
        <script>console.log('hi')</script>  // will print hi to the console
    - attributes of the script tag:
        - type (text/javascript)    // this is default
    - script can be in head or bottom of body
        - bottom of the bottom makes sure the document is loaded before script runs
    - noscript tags (<noscript>message for js turned off</noscript>)

+ use js - HTML import
    - import via script tag in html, path == script.js
        - executed immediately (as soon as js finds the file)
        - gets rid of code in the file
        - can be in the head or body, body ensures it's loaded last
        - must have closing script tag
        - if you put something inbetween the script tags, will not show
            ex: <script src="script.js"></script>

        - can add multiple scripts
        - place imports in the correct order for dependencies

+ variables - basics
    - store data

+ variables - null, undefined, and NaN
    - == value equality, === type equality
    - set an unset variable to null, not undefined
    - typeof null == "object"
    - typeof undefined == "undefined"
    - NaN:
        - result of a mathematical operation error
        - typeof == "number"
        - error message from a mathematical calculation

+ variables - objects
    - typeof object == "object"
    - objects have fields and methods
    - fields / properties: variables inside objects
    - methods: functions inside objects
        let obj = {
            name: 'bt'
        }
    - access properties via name.property (example: obj.name returns 'bt')

+ strict mode
    - not in strict mode:
        - don't have to use let/var/const to set a variable
        - don't have to use semicolons at line ends
        - decreases performance overall
    - strict mode:
        - certain syntacical things
        - in script.js file, set strict mode:
            "use strict";
        - now must use let/var/const to set a variable and use semicolons at line ends now.
        - if you're using a 3rd party library, you may have issues with strict mode.

+ dynamic typing
    - var1 and Var1 are 2 different variables because js is case sensitive
    - can reset variable values without worry about original variable data type
        let var1 = 5;
        console.log(var1);    // 5
        var1 = "ten";
        console.log(var1);    // ten

+ hoisting
    - essentially runs over the code twice:
        - first time: fetches all declarations
        - second time: running all declarations
    - all variables are hoisted to the top of the code so it does not matter if you declare a variable after using it.
    - at least have the declaration before the initialization

+ functions - creating and calling
    - enclosed code that you can execute whenever you want
    - can have function definitions after calls because of hoisting

        function calc() { // declaring a function
            console.log('inside calc()');
        }
        calc(); // calling the fuction

        let calc = function() {
            console.log('inside calc()');
        };  // this is setting a variable
        calc(); // called the same way

        // typeof calc == "function"

        let anotherFn = calc;
        anotherFn(); // still calls calc() via the variable

        let anotherFn = calc();
        anotherFn(); // executes and then shows an error that anotherFn != function

+ functions - arguments & returning data
    - inputs into a function == arguments

        function calc(number1, number2) {
            return number1 + number2;
        }
        let calculator = calc;
        console.log(calculator(15,2));  // prints 17

+ control structures - if statement
    if(condition) { condition_is_true; }
    else if(condition2) { condition_2_is_true; }
    else { condition_is_false; }

+ control structures - if statement advanced
    - 1 == true, 0 == false (casting to boolean)
    - 2 gets interpreted to truthy as well
    - anything not equal to 0 will be interpreted as truthy (including negatives)
    - only 0 and 1 can be casted, everything else is truthy
    - string is also true
    - null is treated as falsy

+ control structures - switch
    let condition = 8;
    switch(condition) {
        case 1: // condition === case
            console.log('is 1');
            break;
        case 8:
            console.log('is 8');
            break;
        default: // condition never equals case
            console.log('is default');
            break;
    }

+ control structures - switch & break
    - without break in a switch statement, it doesn't stop. it jumps right over the other cases and executes everything
    - break tells js that we break out of that condition

+ control structures - for loop
+ control structures - nested loops
+ control structures - controlling loops with break & continue
    // break
    for(let i=0 ; i<5 ; i++) {
        if(i == 1) {
            break;  // i == 1, break statement and exits the loop
        }
        console.log(i); // 0
    }

    // continue
    for(let i=0 ; i<5 ; i++) {
        if(i == 1) {
            continue; // i == 1, continue with the next iteration
        }
        console.log(i); // 0, 2, 3, 4
    }

    // nested continue
    for(let i=0 ; i<5 ; i++) {
        for(let j=0 ; j<2 ; j++) {
            if(i == 1) {
                continue; // i == 1, continue with the next in the INNER loop
            }
            console.log('inner loop, j = ' + j);
        }
        console.log(i);
    }
    // prints:
    /*
    inside inner loop, j = 0
    inside inner loop, j = 1
    0
    1
    inside inner loop, j = 0
    inside inner loop, j = 1
    2
    inside inner loop, j = 0
    inside inner loop, j = 1
    3
    inside inner loop, j = 0
    inside inner loop, j = 1
    4
    */

    // nested break
    for(let i=0 ; i<5 ; i++) {
        for(let j=0 ; j<2 ; j++) {
            if(i == 1) {
                break; // i == 1, break out of the INNER loop
            }
            console.log('inner loop, j = ' + j);
        }
        console.log(i);
    }
    // prints:
    /*
    inside inner loop, j = 0
    inside inner loop, j = 1
    0
    1
    inside inner loop, j = 0
    inside inner loop, j = 1
    2
    inside inner loop, j = 0
    inside inner loop, j = 1
    3
    inside inner loop, j = 0
    inside inner loop, j = 1
    4
    */
    - continue and break only refer to the loops that they are inside, not the outer loops that may be surrounding the loops they are in

+ control structures - for loop variations
    for(let i=5 ; i > 1 ; i--) // counts backwards

+ control structures - looping through arrays
    let arr = [1,2,3];
    for(let i=0 ; i<arr.length ; i++) {
        console.log(arr[i]);    // loop through each element
    }

+ control structures - while loop
    // generic while loop
    let number = 5;
    while(number < 7) {   // while the condition is true, execute
        console.log(number);    // 5, 6
        number++;
    }

    // while loop with if statement
    let condition = true;
    let i = 2;
    while(number < 7) {
        if(i == 3) { condition = false; }
        console.log(i);    // 2, 3
        i++;
    }

    // want to run the code once, dynamically setting the condition
    let condition = false;
    do {
        console.log('executed');
    }
    while(condition);

+ operators - addition
    - can add strings like numbers
        let a = 'join ';
        let b = 'us';
        console.log(a + b); // "join us"

    - can add numbers and strings and it will concatenate
        let a = 'join ';
        let b = 3;  // gets cast into a string
        console.log(a + b); // "join 3"

    - and booleans
        let a = true;   // gets cast into a string
        let b = ' join';
        console.log(a + b); // "true join"

    - and arrays
        let a = [1,2];  // gets cast into a string
        let b = ' join';
        console.log(a + b); // "1,2 join"

    - can add booleans and numbers since true and false are 1 and 0
        let a = 12;
        let b = true; // gets cast to a number
        console.log(a + b); // 13

        let a = true;   // gets cast to a number
        let b = true;   // gets cast to a number
        console.log(a + b); // 2

    - null and number
        let a = 12;
        let b = null;   // gets cast to a number, which is a falsy value of 0
        console.log(a + b); // 12

    - undefined and number
        let a = 12;
        let b = undefined;   // cannot be cast so it shows an error. same as if it's NaN.
        console.log(a + b); // NaN

    - ++ and +=

+ operators - subtraction
    - subtraction does not work the same, it will just turn NaN with subtracting strings
    - if the non-numeric value can be cast to a number, it will be. otherwise, it will be NaN.
    - -= and --

+ operators - multiplication & floating point problems
    - *= and
    - ** throws an error
    - floating point numbers are problematic
        let a = 1.3;
        let b = 2.2;
        console.log(a * b); // 2.86000000000000003

    - makes a much more complex number out of simple multiplication
        let a = 1.3;
        let b = 2.2;
        console.log(a * b); // 2.86000000000000003

        if(a * b == 2.86) { console.log('true'); }
        else { console.log('false'); } // false

    - how to get around this
        let a = 1.3;
        let b = 2.2;
        console.log(a * b); // 2.86000000000000003

        if((a * b).toFixed(2) == 2.86) { console.log('true'); } // true
        else { console.log('false'); }

    - can cast a string to a number but cannot cast types that are not able to cast
    - Infinity: representation of the infinity value

+ operators - division & modulus
    - /=
    - same casting rules apply
    - floating point number issue still applies
    - % modulus gives the remainder
    - divide by 0 will give us Infinity
    - divide by Infinity will give us 0

+ operators - comparing values
    - comparison:
        - == checks value
            1 == 1      // true
            1 == '1'    // true

        - === checks value and type
            1 === 1     // true
            1 === '1'   // false
        - != not equal values and !== value and type (same rules apply)
        - >= <=
            - only a single

+ operators - important rules
    - NaN == NaN // false -- built in rule, NaN is not equal to NaN
    - NaN != NaN // true
    - 0 == null // false -- null cannot be compared
    - null == undefined // true -- null can only be compared to undefined
    - 0 == undefined // false -- undefined compared to anything is always false EXCEPT when compared to null

+ operators - boolean
    - && AND
        - both sides must be true
            if(1==1 && 2==2)    // true
            if((1==1) && (2==3)) // false, 2 != 3

    - || OR
        - just one has to be true
            if((1==1) || (2==2))    // true
            if(1==2 || 2==3)        // false, none are true
            if(1==1 || 2==3 && 4==5)// true, first statement is true, neither of the 2nd must be true
            if(1==1 && 2==3 || 4==4)    // true
            if((1==1 && 2==3) || 4==4)// true
            if((1==1 && 2==3) || 4==5)// false

    - !== equality
    - !variable inverts the meaning (the opposite)

+ operators - ternary operator
    - condition ? 'if_true' : 'if_false';
        let a = 5;
        let b = 5;
        console.log(a==b ? 'equal' : 'not equal');  //equal

        let a = 5;
        let b = 6;
        console.log(a==b ? 'equal' : 'not equal');  //not equal

+ operators - precendence
    - which operator takes precedence over the other
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

+ wrap up
    - 

+ module resources


SECTION 3 -- types & scope
+ intro

+ primitive vs reference types

+ primitive vs reference types - execise

+ global vs local scope

+ global vs local scope - exercise

+ more resources

SECTION 4 -- arrays
+ intro

+ basics & managing elements

+ the forEach() method

+ working with elements: push, pop, unshift, and shift

+ working with parts of an array: indexOf(), splice(), and slice()

+ filtering, mapping, and reversing array elements

+ the difference between concat() and join()

+ reducing arrays

+ wrap up

+ more resources

SECTION 5 -- objects
+ intro

+ object basics & literal notation

+ properties & "this"

+ alternative ways of creating objects - using the object constructor

+ objects are reference types

+ object.create()

+ prototypes intro

+ prototypes in action

+ prototypes summary

+ constructor functions

+ constructor functions & arguments

+ object creation and prototypes summary

+ the "this" keyword and why it may behave strangely

+ handling "this" with bind(), call(), & apply()

+ import built-in methods and properties

+ wrap up

+ more resources

SECTION 6 -- errors and debugging
+ debugging with the browser developer tools

+ logging data to the console

+ handling errors with try and catch

+ more resources

SECTION 7 -- functions
+ intro

+ closures

+ immediately invoked function executions (IIFEs)

+ more resources

SECTION 8 -- built-in objects & functions
+ intro

+ timers & intervals

+ transforming formats & values

+ string functions

+ math object

+ date object

+ regular expressions

+ more resources

SECTION 9 -- working with the window & document object model (DOM)
+ intro

+ the window object

+ the location object

+ the document object and how to interact with it

+ traversing the DOM

+ selecting elements

+ selecting elements with the query selector

+ selecting elements - excercises

+ creating & inserting elements

+ deleting elements

+ DOM interaction summary

+ dialogs

+ DOM properties & methods

+ more resources

SECTION 10 -- events
+ intro

+ the event object

+ event handlers

+ event listeners

+ event behavior

+ event object properties

+ changing propagation order

+ more resources

SECTION 11 -- js and http requests (AJAX)
+ intro

+ setup and sending a GET request

+ POST request

+ more resources

SECTION 12 -- libraries, frameworks, & modules
+ intro

+ libraries & jquery

+ frameworks

+ writing modular code

+ more resources

SECTION 13 -- course project
+ intro

+ setup

+ fetching user input

+ http request setup

+ creating a weather object

+ fetching and handling weather data

+ displaying data

+ complete code

SECTION 14 -- course wrap up
+ wrap up

+ bonus content
