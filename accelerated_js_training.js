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

+ operators - subtraction

+ operators - multiplication & floating point problems

+ operators - division & modulus

+ operators - comparing values

+ operators - important rules

+ operators - boolean

+ operators - ternary operator

+ operators - precendence

+ wrap up

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
