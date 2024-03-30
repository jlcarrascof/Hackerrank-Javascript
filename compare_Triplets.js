function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    let resultArray = [];

    for (i = 0; i <= a.length; i++) {
        if (a[i] > b[i]) {
            alicePoints ++;
        } else {
            bobPoints ++;
        }
    }

    return resultArray[alicePoints, bobPoints];

}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
