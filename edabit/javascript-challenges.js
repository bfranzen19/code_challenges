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