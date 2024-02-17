// // Array Destructure

// var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var devices = ["laptop", "computer", "mobile"];

// console.log(counting);
// console.log(devices);

// const [first, second, ...rest] = counting;
// console.log(first);
// console.log(second);
// console.log(rest);

// const mergeArray = [...counting, ...devices];
// console.log(mergeArray);

// function sumAndMultiply(firstValue, secondValue) {
//   return [firstValue + secondValue, firstValue * secondValue];
// }

// const [add, multiply] = sumAndMultiply(10, 23);
// console.log("addition", add);
// console.log("multiplied", multiply);

// var table1 = document.getElementById("table1");
// counting.forEach((data) => {
//   var currentTable = document.createElement("table");
//   currentTable.border = "2";
//   var currentTableHTML = "<tr><th>Counting</th><th>Devices</th></tr>";
//   devices.forEach((device) => {
//     currentTableHTML += `<tr><td>${data}</td><td>${device}</td></tr>`;
//   });
//   currentTable.innerHTML = currentTableHTML;
//   table1.appendChild(currentTable);
// });

// // Object Destructure

// const firstStudent = {
//   name: {
//     firstName: "john",
//     lastName: "kavin",
//   },
//   semester: "7th (Morining)",
//   rollNo: 3245,
//   country: "England",
// };

// const secondStudent = {
//   name: {
//     firstName: "Anne",
//     lastName: "with an E",
//   },
//   semester: "8th (Morining)",
//   rollNo: 3246,
//   country: "Paris",
// };

// const { name: name, semester, ...leftout } = secondStudent;
// console.log(name.firstName);
// console.log(name.lastName);
// console.log(semester);
// console.log(leftout);

// const ThirdStudent = { ...firstStudent, ...secondStudent };

// var boxData = document.getElementById("box-container");
// var cardContainer = document.createElement("div");
// cardContainer.classList.add("card-container");

// for (let key in ThirdStudent) {
//   if (typeof ThirdStudent[key] === "object") {
//     for (let nestedKey in ThirdStudent[key]) {
//       var heading = document.createElement("h1");
//       heading.innerText = `${nestedKey} : ${ThirdStudent[key][nestedKey]}`;
//       cardContainer.appendChild(heading);
//     }
//   } else {
//     var heading = document.createElement("h1");
//     heading.textContent = `${key}: ${ThirdStudent[key]}`;
//     cardContainer.appendChild(heading);
//   }
// }

// boxData.appendChild(cardContainer);

// Array data structure

// const dvdCollection = new Array(15);

// class DVD {
//   constructor(name, releaseYear, director) {
//     this.name = name;
//     this.releaseYear = releaseYear;
//     this.director = director;
//   }

//   toString() {
//     return `${this.name} , directed by ${this.director} , released in ${this.releaseYear}`;
//   }
// }

// const dvd1 = new DVD("Anne with an E", 2022, "Director1");
// const dvd2 = new DVD("Death note", 2023, "Director2");
// const dvd3 = new DVD("Tokyo ghoul", 2022, "Director3");

// dvdCollection[0] = dvd1;
// dvdCollection[1] = dvd2;
// dvdCollection[2] = dvd3;
// console.log('0 index value' , dvdCollection[0]);
// console.log('10 index value' ,dvdCollection[10]);



// for (const dvd of dvdCollection) {
//   if (dvd) {
//     console.log(dvd.toString());
//   }
// }

// const arrayCapacity = new Array(6)

// let length = 0


// for(let i =0 ;i < 3 ; i++){
//   arrayCapacity[i] = i*i;
//   length++;
// }

// console.log("The Array has a capacity of " + arrayCapacity.length)
// console.log("The Array has a length of " + length)



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxConsecutiveOnes = function(nums) {
//   let maxValue = 0;
//   let currentValue = 0
//   for(let i = 0 ; i < nums.length ; i++){
//     if(nums[i] === 1){
//       currentValue++
//       maxValue = Math.max(currentValue ,maxValue )
      
//     }else{
//       currentValue = 0
//     }
//   }
//   console.log(maxValue)
// };

// findMaxConsecutiveOnes([1,0,1,1,1,0,1])



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findNumbers = function(nums) {
//   let count = 0;
//   for(let loopKoChalana = 0 ; loopKoChalana < nums.length ; loopKoChalana++){
//     console.log("Array ke har value" , nums[loopKoChalana])
//     const Savekaro = nums[loopKoChalana].toString().length
//     console.log("ke length check karo" , Savekaro)
//     if(Savekaro % 2 == 0 ){
//       count++
//     }
//   }
//   console.log(count)
    
// };
// findNumbers([5551,901,482,1771])



// let newArray = []
// for(let loopchalao = 0 ; loopchalao < arrayKeNum.length ; loopchalao++){
//   console.log(arrayKeNum[loopchalao] * arrayKeNum[loopchalao] )
//   newArray.push(arrayKeNum[loopchalao] * arrayKeNum[loopchalao])
// }
// const sortedData = newArray.sort((a,b)=> {
//   return a-b
// })
// console.log(sortedData)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//  const n = nums.length 
//  let result = new Array(n)
//  let left = 0;
//  let right = n-1
//  let index = n-1
//  while(left <=right){
//   const leftSquare = nums[left] ** 2
//   const rightSquare = nums[right] ** 2
//   if(leftSquare > rightSquare){
//     result[index] = leftSquare
//     left++
//   }else{
//     result[index] = rightSquare
//     right--
//   }
//   index--
//  }
//  console.log(result)

// };

// sortedSquares([1])

// right side 
//  left side 
// index 

/*
right side move to nth to negative
left side negative to nth time 
index move to nth to negative 

first it check if the left > right 

result[index] add the left one small 
left increased move to next step **/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var largestDivisibleSubset = function(nums) {
//   let data = [];
//   let j = 1 
//    for(let i = 0 ; i < nums.length ; i++){
//     // for(let j = 1; j < nums.length ; j++){
//       if(nums[i] % nums[j] === 0 ){
//        data.push(nums[i]) 
//       j++;

//       }

//     // }
//    }
//    console.log(data)  
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var largestDivisibleSubset = function(nums) {
//   if (nums.length === 0) {
//       return [];
//   }

//   nums.sort((a, b) => a - b);

//   let dp = new Array(nums.length).fill(1);
//   let prevIndex = new Array(nums.length).fill(-1);
//   let maxIndex = 0;

//   for (let i = 1; i < nums.length; i++) {
//       for (let j = i - 1; j >= 0; j--) {
//           if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
//               dp[i] = dp[j] + 1;
//               prevIndex[i] = j;
//           }
//       }

//       if (dp[i] > dp[maxIndex]) {
//           maxIndex = i;
//       }
//   }

//   let result = [];
//   let currentIndex = maxIndex;
//   while (currentIndex !== -1) {
//       result.unshift(nums[currentIndex]);
//       currentIndex = prevIndex[currentIndex];
//   }

//   return result;
// };
// largestDivisibleSubset([1,2,4,8])


// /**
//  * @param {number[]} arr
//  * @return {void} Do not return anything, modify arr in-place instead.
//  */
// var duplicateZeros = function(arr) {
//     const originalLength = arr.length;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             arr.splice(i, 0, 0);
//             i++;  
//         }
//     }
//     arr.length = originalLength;
// };

// duplicateZeros([1,0,2,3,0,4,5,0])

// [1,0,0,2,3,0,0,4]