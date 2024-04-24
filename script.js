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
        if (value === 1 && num >= 9) {
            result = result.slice(0, -2); 
            result += obj[key - 2][0] + obj[key][0]; 
            num -= 9;
        } else if (value === 10 && num >= 90) {
            result = result.slice(0, -2);
            result += obj[key - 2][0] + obj[key][0];
            num -= 90;
        } else if (value === 100 && num >= 900) {
            result = result.slice(0, -2);
            result += obj[key - 2][0] + obj[key][0];
            num -= 900;
        }
    }

    return result;
}

console.log(convertToRoman(36)); 
console.log(convertToRoman(979)); 
module.exports = convertToRoman;
