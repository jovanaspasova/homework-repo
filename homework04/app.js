// part-01
let arrays = ["Jovana" , "sleepy" , "sleep"];
function tellStory(){
        console.log(`My name is ${arrays[0]}.
        Today im ${arrays[1]}.
        I want to ${arrays[2]} `);
    }

tellStory(arrays);
// part-02
let arr = [12, 3, 4, 15, 6];
function sum() { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) 
        sum += arr[i]; 

    return sum; 
} 
console.log("Sum of given array is " + sum(arr));
// part-03
let array = ["Hi", "My" , "Name", "Is", "Jovana"];
function strings(arr){
    let result = [];
    for (let i = 0;i < array.length;i++){
        result += arr[i]
    }
    console.log(result);
}
strings(array);
// part-04
function filterOddEven() {
    let i = 1;
    while (i <= 20){
        if (i % 2===0){
            console.log(`${i} This number is even`);
        }
        if (i % 2!==0){
            console.log(`${i} This number is odd`);
        }
        i++;
    }
    
  }
  filterOddEven();
//   part-05
let arrayy = [30, 52, 63, 84, 110]
function maxAndMin (numArray){
    let counter = 0;
    let max = numArray[0];
    let min = numArray[0];
    let sum;
    while (counter < numArray.length){
        let currentNumber = numArray[counter];
        if (currentNumber > max){
            max = currentNumber;
        }
        counter++;
    }
    if (counter < numArray.length){
        let currentNumber = numArray[counter];
        if (currentNumber < min){
            min=currentNumber;
        }
        counter++;
    }
    sum = min + max;
    return (`The max number is ${max}.
    And the min number is ${min}
    And the sum of the min and max is ${sum}`);
    
}
console.log(maxAndMin(arrayy));

