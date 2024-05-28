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