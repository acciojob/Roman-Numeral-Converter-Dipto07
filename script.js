function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let result = '';

    for (let key in obj) {
        let [symbol, value] = obj[key];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
        if (value === 1000 && num >= 900) {
            result += 'CM';
            num -= 900;
        } else if (value === 500 && num >= 400) {
            result += 'CD';
            num -= 400;
        } else if (value === 100 && num >= 90) {
            result += 'XC';
            num -= 90;
        } else if (value === 50 && num >= 40) {
            result += 'XL';
            num -= 40;
        } else if (value === 10 && num >= 9) {
            result += 'IX';
            num -= 9;
        } else if (value === 5 && num >= 4) {
            result += 'IV';
            num -= 4;
        }
    }

    return result;
}

console.log(convertToRoman(36)); 
console.log(convertToRoman(979)); 
module.exports = convertToRoman;
