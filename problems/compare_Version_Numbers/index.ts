function compareVersion(version1: string, version2: string): number {
    let versions1 = version1.split('.').map(Number);
    let versions2 = version2.split('.').map(Number);

    let maxLength = Math.max(versions1.length, versions2.length);

    for(let i = 0; i < maxLength; i++) {
        let num1 = i<versions1.length ? versions1[i] : 0;
        let num2 = i<versions2.length ? versions2[i] : 0;

        if(num1 > num2) return 1;
        if(num1 < num2) return -1;
    }

    return 0;

};