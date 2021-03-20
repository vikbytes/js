let arrayI = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
let arrayX = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
let arrayC = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

function convertToRoman(num) {
    let result = "";
    let tally = num;
    if(tally >= 1000) {
        let numberOfM = 0;
        while(tally >= 1000) {
            numberOfM++;
            tally -= 1000;
        }
        for(let i = 0; i < numberOfM; i++) {
            result += "M";
        }
    }
    if(tally > 100) {
        let numberOfC = 0;
        while(tally >= 100) {
            numberOfC++;
            tally -= 100;
        }
        result += arrayC[numberOfC-1];
    }
    if(tally > 10) {
        let numberOfX = 0;
        while(tally >= 10) {
            numberOfX++;
            tally -= 10;
        }
        result += arrayX[numberOfX-1];
    }
    // Process the remainder of tally here
    if(tally > 0) {
        result += arrayI[tally-1];
    }
    return result;
}

console.log(convertToRoman(36));