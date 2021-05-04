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
+ module resources


SECTION 3 -- types & scope
+ intro
+ primitive vs reference types
    - primitive types:
        - stored in memory
        - when this variable is used, i access this variable in memory. variable directly holds value.
            let a = 5; // --> in memory, 5 is stored
            let b = a; // --> in memory, copied from variable a and stored in memory
            // this value is copied and stored, not referenced
    - reference types:
        - objects
        - variable holds pointer, not value
        let a = { a: 5 }; // object is created in memory, but the variable does not hold the value, it holds a pointer, pointing towards that value. the object is created in memory and the variable only has a pointer to this value.
        let b = a; // not copying the value or object in the memory, just the pointer.

        - this is because of the probability that objects can become very compled. allows us to not pollute memory and create a single instance with multiple pointers to that instance.

+ primitive vs reference types - execise
    - arrays are objects so they are also reference types

+ global vs local scope
    - scope: the registry on which your variables, etc. are registered.
    - global scope: window object
        - top most level
    - local scope: nested inside global scope
        - created when we create a function
        - inside the function, there is its own scope
            - variables defined within functions are scoped to that function
            - cannot access function scoped variables outside of the function
    - can go from global scope to local scope but cannot go the opposite

+ global vs local scope - exercise
    - variables declared without let/const/var are default global variables (not in strict)
+ more resources


SECTION 4 -- arrays
+ intro
    - collection of comma separated items
    - index starts at 0

+ basics & managing elements
    - access elements by array_name[index_value] --> arr[0] // access 1st element in arr array
    - can add values via []
        let array = [1,2,3];
        array[4] = 100;
        console.log(array); // 1,2,3,100

        let array = [1,2,3];
        array[5] = 100;
        console.log(array); // 1,2,3,undefined, undefined, 100
    - accessing an undefined element will just return undefined, not an error

+ the forEach() method
    let array = [1,2,3];
    array.forEach(function(element) {
        console.log(element); // 1,2,3
    });

+ working with elements: push, pop, unshift, and shift
    - push(): array.push(value_to_add_to_end);
        - adds an element to the end of the array
        - always appended at the END of the array
            let array = [1,2,3,,];  // 2 commas will create an undefined element
            array.push(4);
            console.log(array); // [1,2,3,undefined,4]

    - pop(): array.pop();
        - removes the last element and RETURNS the removed element.
            let array = [1,2,3,4];
            array.pop();
            console.log(array); // [1,2,3]
            console.log(array.pop()); // 4

    - unshift(): array.unshift(value_to_add_to_start);
        -
            let array = [1,2,3,4];
            array.unshift("new");
            console.log(array); // ["new", 1,2,3,4]

    - shift(): array.shift();
        - removes the first element and RETURNS the removed element
            let array = [1,2,3,4];
            array.shift();
            console.log(array); // [2,3,4]
            console.log(array.shift()); // 1

+ working with parts of an array: indexOf(), splice(), and slice()
    - indexOf(): array.indexOf(value_to_find);
        - returns the index of the value_to_find
            let array = [1,2,3,4];
            array.unshift("new"); // inserts new at position 0
            array[array.indexOf("new")] = "old"; // replacing the element at the index of "new" with "old"
            console.log(array); // ["old", 1,2,3,4]

    - splice(): array.splice(start_element_index, number_of_elements);
        - REMOVES elements from the original array and returns them in a new array

            let array = [1,2,3,4];
            array.unshift("new");
            array[array.indexOf("new")] = "old";

            let newArr = array.splice(3);
            console.log(newArr); // [3,4]

            let array = [1,2,3,4];
            array.unshift("new");
            array[array.indexOf("new")] = "old";

            let newArr = array.splice(2,2);
            console.log(newArr); // [2,3]
            console.log(array); // ["old", 1, 4] --> [2,3] are removed

    - slice(): array.slice(start_element_index, end_element_index);
        - returns elements in the range of start_element_index to end_element_index in a new array, without impacting the original oray

            let array = [1,2,3,4];
            array.unshift("new");
            array[array.indexOf("new")] = "old";

            let newArr = array.slice(2,4);
            console.log(newArr); // [2,3]
            console.log(array); // ["old", 1, 2, 3, 4] --> [2,3] are still there

+ filtering, mapping, and reversing array elements
    - filter():
        es5: array.filter(function(item) { function_code_block });
        es6: array.filter((item) => { function_code_block });

        - creates a new array
        - executed on each value
        - can evaluate each element
        - does not impact original array

        let array = [1,2,3,4];
        array.unshift("new");
        array[array.indexOf("new")] = "old"; // ["old", 1, 2, 3, 4]

        console.log(
            array.filter(item => {
                return item > 2;
            })
        );  // [3,4] --> only items greater than 2

    - map():
        es5: array.map(function(item) { function_code_block });
        es6: array.map((item) => { function_code_block });

        - creates a new array
        - can perform some operation on each element
        - map allows to return something * 2, for instance
        - does not impact original array

        let array = [1,2,3,4];
        array.unshift("new");
        array[array.indexOf("new")] = "old";  // ["old", 1, 2, 3, 4]

        console.log(
            array.map(item => {
                return item * 2;
            })
        );  // [NaN, 2, 4, 6, 8] --> each element * 2

    - reverse(): array.reverse();
        - not returning a new array, this is the original array that is reversed

        let array = [1,2,3,4];
        array.unshift("new");
        array[array.indexOf("new")] = "old";  // ["old", 1, 2, 3, 4]

        console.log(array.reverse());  // [4, 3, 2, 1, "old"]

+ the difference between concat() and join()
    - concat(): array.concat(array_to_append);
        - combines 2 arrays in one single array
        - does not impact either of the original arrays
        - returns a new array of array + newArr at the end: ["old", 1, 2, 3, 4, 'join ', 'me']

        let array = [1,2,3,4];
        array.unshift("new");
        array[array.indexOf("new")] = "old";  // ["old", 1, 2, 3, 4]

        let newArr = ['join ', 'me'];
        console.log(array.concat(newArr)); // ["old", 1, 2, 3, 4, 'join ', 'me']
        console.log(array); // ["old", 1, 2, 3, 4]

    - join(): array.join(item_to_join_on);
        - returns a new string
        - joins an array into a string
        - typically join on a comma or empty string

            let array = [1,2,3,4];
            array.unshift("new");
            array[array.indexOf("new")] = "old";  // ["old", 1, 2, 3, 4]

            let newArr = ['join ', 'me'];
            console.log(array.join(newArr)); // "oldjoin,me1join,me2join,me3join,me4"
            console.log(array); // ["old", 1, 2, 3, 4]

+ reducing arrays
    - reduce():
        es5: array.reduce(function(total,value) { function_code_block });
        es6: array.reduce((total,value) => { function_code_block });

        - takes a function as an argument
        - function takes 2 arguments -- value and total
        - reduces an array to a single value
        - this example, we add all values up
        - does not impact original array
        - shrinks an array into a single value

            let array = [1,2,3,4];
            console.log(
                array.reduce(function(total,value) {
                    console.log('total: ' + total + 'value: ' + value);
                    // total: 1, value: 2 -- 1 + 2 = 3
                    // total: 3, value: 3 -- 3 + 3 = 6
                    // total: 6, value: 4 -- 6 + 4 = 10
                    return total + value;
                })
            );
            console.log(array); // [1, 2, 3, 4]

+ wrap up
+ more resources


SECTION 5 -- objects
+ object basics & literal notation
    - key, value pairs
    - can use one object in multiple variables and if you change one, the others will update as well.

    - creating ojects with literal notation

        let person = {
            name: 'bt', // literal notation
            age: 34,
        };
        console.log(person);
        /*
        [object Object] {
            age: 34,
            name: 'bt'
        }
        */
        console.log(person.name);   // 'bt' --> always use when you kmow what property you're accessing
        console.log(person['name']);   // 'bt' --> not how you should do it by default. useful if you need to dynamically access these properties

        let field = 'name'; // dynamically created
        console.log(person[field]); // 'bt'

        - can have objects as properties
            let person = {
                name: 'bt', // literal notation
                age: 34,
                details: {
                    hobbies: ['sports', 'cooking'],
                    location: ['colorado']
                }
            };
            // access these nested values via dot notation
            console.log(person.details.hobbies);    // ['sports', 'cooking']


        - can have functions / methods
            let person = {
                name: 'bt', // literal notation
                age: 34,
                details: {
                    hobbies: ['sports', 'cooking'],
                    location: ['colorado']
                },
                greet: function() {
                    console.log('hello ');
                }
            };
            person.greet();    // 'hello '

        - console.log(typeof person.name); // "string"

    - may use strings in your variable names which allows you to use dashes and stuff. can be both strings or not.

    let person = {
        "first-name": 'bt', // literal notation
        "age": 34,
    };
    console.log(person["first-name"]); // must access string keys like this

+ properties & "this"
    let person = {
        name: 'bt', // literal notation
        age: 34,
        details: {
            hobbies: ['sports', 'cooking'],
            location: ['colorado']
        },
        greet: function() {
            console.log('hello ');
        }
    };
    person.name = 'anna';   // changes name property
    console.log(person);
    /*
    [object Object] {
        age: 34,
        details: [object Object] {
            hobbies: ['sports', 'cooking'],
            location: ['colorado']
        },
        greet: function() {
            console.log('hello ');
        },
        name: 'anna'
    }
    */

    - objects have their own scope
    - this refers to the object and allows us to reference properties in this scope
        let person = {
            name: 'bt', // literal notation
            age: 34,
            details: {
                hobbies: ['sports', 'cooking'],
                location: ['colorado']
            },
            greet: function() {
                console.log('hello, i am ' + this.name); // access object name using this keyword
            }
        };
        person.greet();

+ alternative ways of creating objects - using the object constructor
    - literal is preferable
        let person = {
            name: 'bt',
            age: 34,
        };

        let otherPerson = new Object(); // instantiate new object
        otherPerson.name = 'homer';
        otherPerson.age = 11;
        console.log(otherPerson);
        /*
        [object Object] {
            age: 11,
            name: "homer"
        }
        */

+ objects are reference types
    let person = {
        name: 'bt',
        age: 34,
    };

    let otherPerson = new Object();
    otherPerson.name = 'bt';
    otherPerson.age = 24;
    console.log(otherPerson == person); // FALSE - same type, fields, and values but different reference

    let person = {
        name: 'bt',
        age: 34,
    };

    let person1 = {
        name: 'bt',
        age: 34,
    };
    console.log(person1 == person); // FALSE still for the same thing since it's a new object
    ** this is actually comparing the pointers, not the objects in memory **

+ object.create()
    - prototypes of objects == js inheritance
    - Object.create() allows for prototypes / inheritance

        let otherPerson = Object.create(null); // null is saying which prototype to base it off of
        otherPerson.name = 'bt';
        console.log(otherPerson);

        let person = {
            name: 'bt',
            age: 34,
        };

        let person1 = Object.create(person); // null is saying which prototype to use
        otherPerson.name = 'bt';
        console.log(person1.age);   // 34 because the prototype passed in (person) has an age property

+ prototypes intro
    - all objects in js already have a prototype -- Object.prototype (also an object)

        let person = {
            name: 'bt',
            age: 34,
        };
        console.log(person.prototype); // undefined
        console.log(person.__proto__); // [object Object] {...}  --> unsafe
        console.log(person.anything()); // undefined --> this method doesn't exists
        console.log(person.toString()); // "[object Object]" --> this method exists

    - prototype has some built-in methods that we can use
    - will always have access to prototype methods
        let person = {
            name: 'bt',
            age: 34,
        };

        // sets a new method on the prototype that any object can access
        Object.prototype.greet = function() {
            console.log('hello there');
        }
        person.greet(); // 'hello there'

    - prototype chain:
        obj.greet() --> looks at obj methods,
            no greet() --> looks at prototype,
                no greet() --> looks at prototype of the prototype ... until it is found or not

+ prototypes in action
    - can create multiple objects of a certain blueprint

        let person = {
            name: 'bt',
            age: 34,
        };

        Object.prototype.greet = function() {
            console.log('hello there');
        }

        let bt = Object.create(person);
        console.log(bt.name); // bt
        bt.greet(); // 'hello there'

        //////////////////////////////////////
        let person = {
            name: 'bt',
            age: 34,
        };

        Object.prototype.greet = function() {
            console.log('hello there, i am ' + this.name);
        }

        let bt = Object.create(person);
        let max = Object.create(person);
        max.name = 'max';

        bt.greet(); // 'hello there, i am bt'
        max.greet(); // 'hello there, i am max'

        //////////////////////////////////////
        let person = {
            name: 'bt',
            age: 34,
        };

        Object.prototype.greet = function() {
            console.log('hello there, i am ' + this.name);
        }

        let bt = Object.create(person);
        let max = Object.create(person);

        bt.greet(); // 'hello there, i am bt'
        max.greet(); // 'hello there, i am bt' --> prototype name is still bt

+ prototypes summary
    - see which prototype is associated with an object
        let person = {
            name: 'bt',
            age: 34,
        };

        Object.prototype.greet = function() {
            console.log('hello there, i am ' + this.name);
        }

        let bt = Object.create(person);
        let max = Object.create(person);
        // debugging only, never do this in production code
        console.log(max.__proto__ == person); // true
        console.log(max.__proto__.__proto__ == Object.prototype); // true

    - safer way to see which object has which prototype
        let person = {
            name: 'bt',
            age: 34,
        };

        Object.prototype.greet = function() {
            console.log('hello there, i am ' + this.name);
        }

        let bt = Object.create(person);
        let max = Object.create(person);
        // safer check
        console.log(Object.getPrototypeOf(bt) == person); // true

+ constructor functions
    - normal function except name starts with capital letter
    - construct objects using this function

        function Person() {

        }
        let person = new Person();
        person.name = 'bt';
        console.log(person);
        /*
            [object Object] {
                name: 'bt'
            }
        */
        console.log(person.__proto__ == Object.prototype); // false
        console.log(person.__proto__ == Person.prototype); // true

    - js created a Person.prototype
        Person.prototype.greet = function() {
            console.log('hello');
        };
        person.greet(); // 'hello'

    - this refers to our person
        function Person() {
            this.name = 'bt';
        }
        let person = new Person();
        console.log(person.name); // "bt" --> name is set in the constructor
        //////////////////////////
        function Person() {
            this.name = 'bt';
        }
        Person.prototype.name = 'homer'; // not overwriting it on the object level

        let person = new Person();
        console.log(person.name); // still "bt" --> name is set in the constructor

    -
        function Person() {
            this.name = 'bt';
            this.greet = function() {
                console.log('hello, i am ' + this.name);
            }
        }
        let person = new Person();
        person.greet(); // 'hello, i am bt'

        person.name = 'homer'
        person.greet(); // 'hello, i am homer'

        let cat = new Person(); // no name set
        cat.greet(); // 'hello, i am bt' --> name is set in the constructor, which was not overwritten

    - checks instance, then constructor, the prototype
    - can check whether an object is an instance of another object via instanceOf
        console.log(person instanceOf Person); // true

+ constructor functions & arguments
    - can pass arguments to constructors
        function Person(name,age) {
            this.name = name;
            this.age = age;
        }
        let person = new Person('bt', 34);
        console.log(person);
            // [object Object] {
            //     age: 34,
            //     name: 'bt'
            // }

+ object creation and prototypes summary
    - constructors are blueprints for your objects to create instances of those constructor functions
    - prototypes are inheritance

        let person = new Object();
        person.name = 'bt';
        person.age = 34;
        console.log(person instanceOf Object); // true

        // set prototype, if null than standalone
        let person = Object.create(null);   // pick your prototype or set to null
        person.name = 'bt';
        person.age = 34;
        console.log(person.toString()); // error - null prototype overwrites the Object.prototype which would give this object access to the toString() method
        console.log(person instanceOf Object); // false - this object is standalone

        //  build your own blueprint, own prototype but also Object.prototype
        function Person(name,age) {
            this.name = name;
            this.age = age;
        }
        let person = new Person('bt', 34);

+ the "this" keyword and why it may behave strangely
    - this always refers to the left part of the dot that executes something where this is included
        function fn() {
            console.log(this);
        }
        fn(); // logs the entire window object

        let obj = {
            obfn: fn
        }
        obj.obfn();
        // [object Object] {
        //     fn: function obfn() {
        //         console.log(this);
        //     }
        // }

    - this refers to obj in this case
    - if we want to still refer to the global window instead of the object scope:
        obj.obfn.bind(this)(); // rebind this to the global this

+ handling "this" with bind(), call(), & apply()
    - allows this keyword to be used as you would guess

    - bind(): object.bind(what_this_is_bound_to, other_function_args);
        - can bind and call later because it isn't called instantly

        function fn(message) {
            console.log(message + this);
        }
        fn(); // logs the entire window object

        let obj = {
            obfn: fn
        }

        let person = {
            name: 'max'
        }
        // last set of () runs this
        obj.obfn.bind(person, 'hello')(); // "hello[object Object]"

    - call(): object.call(what_this_is_bound_to, other_function_args);
        - called instantly

        obj.obfn.call(person, 'hello'); // instantly calls,  "hello[object Object]"

    - apply(): object.apply(what_this_is_bound_to, [other_function_args]);
        - called instantly
        - pass in where it is bound and an array of other args

        obj.obfn.call(person, ['hello']); // instantly calls,  "hello[object Object]"

+ creating properties with defineProperty()
    - configuring properties
    - Object.defineProperty() default is read only, must set writable:true to update

        let account = {
            cash: 12000,
            withdraw: function(amount) {
                this.cash -= amount;
                console.log('withdrew ' + amount ', new balance: ' + this.cash);
            }
        }
        account.withdraw(1000); // withdrew 10000, new balance: 11000

        Object.defineProperty(account, 'deposit', {
            value: function(amount) {
                this.cash += amount;
            }
        });
        account.deposit(3000);
        account.withdraw(1000);

        Object.defineProperty(account, 'name') {
            value: 'ID000-1'
        }
        console.log(account.name); // 'ID000-1'
        account.name = 'ID000-3';

        console.log(account.name); // 'ID000-1' still? because property isn't writable

        /////////////////
        Object.defineProperty(account, 'name') {
            value: 'ID000-1',
            writeable: true
        }
        account.name = 'ID000-3';
        console.log(account.name); // 'ID000-3'

    - want to create a property with more detail, this is the way to go
    - can set writeable and enumerable
    - can create getters and setters
        let account = {
            cash: 12000,
            _name: 'default',
            withdraw: function(amount) {
                this.cash -= amount;
                console.log('withdrew ' + amount ', new balance: ' + this.cash);
            }
        }

        Object.defineProperty(account, 'name') {
            value: 'ID000-1',
            get: function() {
                return this._name;
            },
            set: function(name) {
                this._name = name;
            }
        }
+ import built-in methods and properties
    - delete property
        let person = {
            name: 'bt',
            age: 34
        }
        // person.name = null; // this will null the value but the property still exists
        delete person.name; // deletes the property and you'll get undefined

    - see if a field exists using in. property must be a string passed in first. case sensitive.
        let person = {
            name: 'bt',
            age: 34
        }
        console.log('name' in person); //true
        console.log('Name' in person); //false

    - iterate
        let person = {
            name: 'bt',
            age: 34,
            greet: function() {
                console.log('hello');
            }
        }

        for(let field in person) {
            console.log(field); // name, age, greet --> properties
            console.log(person[field]); // 'bt', 34 --> values
        }

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
