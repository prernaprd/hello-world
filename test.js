function sherlockAndAnagrams(s) { 
    let anagrams = 0;
    for (let x = 1; x < s.length + 1; x++) {
        const stringMap = {};

        for (let y = 0; y < s.length - x + 1; y++) {
            const string = s.substring(y, y + x).split('').sort().join('');
            console.log(string);
            stringMap[string] = (stringMap[string] || 0) + 1;
            console.log(stringMap);
        }

        Object.values(stringMap).forEach((value) => {
            anagrams += value * (value - 1)/2;
        });
    }
}

sherlockAndAnagrams('mom');