function findNthDigit(n: number): number {
    let lengthOfDigit = 1;
    let start = 1;
    let count = 9;

    while (n > lengthOfDigit * count) {
        n -= lengthOfDigit * count;
        lengthOfDigit += 1;
        count *= 10;
        start *= 10;
    }

    const finalNumber = start + (n - 1) / lengthOfDigit;
    const strNum = finalNumber.toString();
    const result = parseInt(strNum[(n - 1) % lengthOfDigit]);

    return result;
}

console.log(findNthDigit(4));