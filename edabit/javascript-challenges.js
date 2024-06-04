/**
 * You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
    drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
    ]
 */
function sortDrinkByPrice(drinks) {
    return drinks.sort((a,b) => a.price - b.price);
}

/**
 * Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
 */
function numberSplit(n) {
    const half = n/2;
	if(n%2 !== 0) return [Math.floor(half), Math.ceil(half)];
    return [half, half];
}

/**
 * Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
 */
function shiftToLeft(x, y) {
  	return x * Math.pow(2,y);
}

/**
 * Power Calculator
 * Create a function that takes voltage and current and returns the calculated power.
 * The formula is power = voltage * current
 */
function circuitPower(voltage, current) {
  return voltage * current;
}

/**
 * Incorrect Import Statement
 * When importing objects from a module in Python, the syntax usually is as follows: 
 * from module_name import object
 * Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.
 */
function fixImport(s) {
    const [ a, b, c, d ] = s.split(" ");
    return `${c} ${d} ${a} ${b}`;
}

/**
 * Number of Squares in an N * N Grid
 * Create a function that calculates the number of different squares in an n * n square grid. As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.
 */
function numberSquares(n) {
    if (n === 0) return 0;

    return n * n + numberSquares(n - 1);
}

/**
 * Tile Teamwork Tactics
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 * Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
 */
function possibleBonus(a, b) {
    return b - a <= 6 && b - a > 0;
}

/**
 * Error Messages
 * Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
 * For any other value, return 101 (you can use an if statement here).
 */
function error(n) {
    const msgs = {
        1: "Check the fan",
        2: "Emergency stop",
        3: "Pump Error",
        4: "c",
        5: "Temperature Sensor Error"
    };

    return msgs[n] ? `${msgs[n]}: e${n}` : 101;
}

/**
 * Spotlight Sum
 * Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.
 */
const spotlightSum = (n) => n * 9;

/**
 * No Conditionals?
 * Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
 */
const flip = (y) => 1 - y;

/**
 * Come Check Out This Crazy Function
 * You are given two numbers, a and b. Write a function which uses an expression to return the expected output.
 */
const crazyfunction = (a, b) => (a ^= b);

/**
 * Find the Amount of Potatoes
 * Create a function to return the amount of potatoes there are in a string.
 */
const potatoes = (str) => (str.match(/potato/g) || []).length;

/**
 * Restaurant Voter
 * 1. return the restaurant name that was voted for the most times
 * 2. return the 2 restaurant names that were voted for the most
 * 3. return the rank order of the restaurant that had the most votes (0th = 3pts, 1st = 2pts, 2nd = 1pt)
 */

const data = {
    riot: ["Buff", "Snooze", "Hapa"],
    alby: ["Snooze", "Hapa", "LePeep"],
    homer: ["Tangerine", "Japanga", "Hapa"]
};

// build the votes object and conditionally return the necessary order
const buildVotes = (sorted, ranked) => {
    const votes = {};
    const points = {
        0: 3,
        1: 2,
        2: 1
    };

    for (const prop in data) {
        data[prop].forEach((name, i) => {
            if (!votes[name]) votes[name] = ranked ? points[i] : 1;
            else votes[name] += ranked ? points[i] : 1;
        });
    }

    if (sorted) return Object.entries(votes).sort((a, b) => b[1] - a[1]);

    return votes;
};

// return restaurant name with the most votes
const pickOne = () => {
    return buildVotes(true, false)[0][0];
};

// return 2 restaurant names with the most and 2nd most votes
const pickTwo = () => {
    const votes = buildVotes(true, false);
    return [votes[0][0], votes[1][0]];
};

// return the restaurant name with the highest points
const rankOrder = () => {
    return buildVotes(true, true)[0][0];
};

/* ----- tests ----- */
const one = pickOne();
const two = pickTwo();
const ranked = rankOrder();

console.log("pickOne: ", one === "Hapa", " - ", one);
console.log("pickTwo: ", two.length === 2 && two[0] === "Hapa" && two[1] === "Snooze", " - ", two);
console.log("rankOrder: ", ranked === "Snooze", " - ", ranked);