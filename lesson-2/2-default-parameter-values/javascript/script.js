/* function printMessage(message) {
    //I want to check if there is no message
    //I want to assign text to this message
    //I Want to console log the message
    if (!message) {
        message = "No value is here";
    }
    console.log(message);
}

printMessage();
 */

//default value for the property argument

function printMessage(message = "No value is here"){
    console.log(message)
}

printMessage("hello Sudi");


//example 3

function getSum(numA = 4, numB = 5){
    return numA + numB;
};
const totalSum = getSum(4,5);

console.log("totalSum: " + totalSum);


const totalSumtwo = getSum();
console.log(totalSumtwo);