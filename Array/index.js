// convert a square number to a 1 line string
function squareDigits(num) {
    let numArr = [];
    let newNum = String(num);
    let stringSplit = newNum.split('');
    for (let i = 0; i < stringSplit.length; i++) {
        let square = stringSplit[i] ** 2;
        numArr.push(square);
    }
    let stringArr = numArr.join('');
    return stringArr;
}
console.log(squareDigits(33112));

// search the highest and lowest number in a string of numbers
function highAndLow(numbers) {
    let numArr = numbers.split(' ');
    let arr = [];
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = parseInt(numArr[i]);
    }
    let highestNum = numArr[0];
    let lowestNum = numArr[0];
    for (let i= 0; i < numArr.length; i++){
        if (numArr[i] > highestNum) {
            highestNum = numArr[i];
        } else {
            lowestNum = numArr[i];
        }
    }
    arr.push(highestNum, lowestNum);
    let stringArr = arr.join(' ');
    return stringArr;
}
console.log(highAndLow("1 2 3 4 5"));  // return "5 1"

// remove the every second element from an array
function removeEverySecondElement(arr) {
    for (let i = 1; i < arr.length; i += 1) {
        arr.splice(i, 1); 
    }
    return arr;
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(removeEverySecondElement(myArray));