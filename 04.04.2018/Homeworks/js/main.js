//Homework 1 & 2

// function arrayMultiplier(inputArray){
//     var result = 0;
//     for(var i = 0; i < inputArray.length; i++){
//         result += inputArray[i] * inputArray[i];
//     }

//     return result;
// }

// var numbers = [15, 37, 26, 65 ,12, 10];
// var numbers1 = [15, 15, 19, 65 ,12, 10];
// var numbers2 = [15, 37, 26, 56 ,12, 10];
// var numbers3 = [15, 8, 26, 7 ,12, 25];

// var netice = arrayMultiplier(numbers3);

// console.log(netice);


//Homework 3

var numberList = [];

var submitBtn = document.querySelector('.submit');
var numberInput  = document.querySelector('#number');
// var resultSpan = document.querySelector('.result span');

submitBtn.onclick = function(){
    
    var result = parseInt(numberInput.value);
    numberList.push(result);

    document.querySelector('.result span').innerHTML = findMax(numberList);
}

function findMax(inputArray){
    var max = inputArray[0];

    for(var i = 1; i < inputArray.length; i++){
        if(inputArray[i] > max){
            max = inputArray[i];
        }
    }

    return max;
}
