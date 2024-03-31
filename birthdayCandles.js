/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here

    let highestCandle = Math.max(...candles);
    console.log(highestCandle);

    let numCandles = candles.filter(value => value === highestCandle)

    console.log(numCandles.length);

    return numCandles.length;
}

birthdayCakeCandles([4, 4, 1, 3]);
birthdayCakeCandles([3, 2, 1, 3]);
