function printStaircase(n) {
    let max = n;
    while (n >= 1) {
        let string = '';
        string = ' '.repeat(n-1);
        string = string + '#'.repeat(max - (n-1));
        console.log(string);
        n --;
    }
}

printStaircase(6);
