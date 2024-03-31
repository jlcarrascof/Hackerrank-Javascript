function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    let resultArray = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints ++;
        } else if (a[i] < b[i]) {
            bobPoints ++;
        }

        resultArray[0] = alicePoints;
        resultArray[1] = bobPoints;
    }

    return resultArray;

}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
