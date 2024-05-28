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