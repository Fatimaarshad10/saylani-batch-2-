// Array Destructure 

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var devices = ["laptop", "computer", "mobile"];

console.log(counting);
console.log(devices);

const [first, second, ...rest] = counting;
console.log(first);
console.log(second);
console.log(rest);

const mergeArray = [...counting, ...devices];
console.log(mergeArray);

function sumAndMultiply(firstValue, secondValue) {
  return [firstValue + secondValue, firstValue * secondValue];
}

const [add, multiply] = sumAndMultiply(10, 23);
console.log("addition", add);
console.log("multiplied", multiply);

var table1 = document.getElementById("table1");
counting.forEach((data) => {
  var currentTable = document.createElement("table");
  currentTable.border = "2";
  var currentTableHTML = "<tr><th>Counting</th><th>Devices</th></tr>";
  devices.forEach((device) => {
    currentTableHTML += `<tr><td>${data}</td><td>${device}</td></tr>`;
  });
  currentTable.innerHTML = currentTableHTML;
  table1.appendChild(currentTable);
});

// Object Destructure

const firstStudent = {
  name: {
    firstName: "john",
    lastName: "kavin",
  },
  semester: "7th (Morining)",
  rollNo: 3245,
  country: "England",
};

const secondStudent = {
  name: {
    firstName: "Anne",
    lastName: "with an E",
  },
  semester: "8th (Morining)",
  rollNo: 3246,
  country: "Paris",
};

const { name: name, semester, ...leftout } = secondStudent;
console.log(name.firstName);
console.log(name.lastName);
console.log(semester);
console.log(leftout);

const ThirdStudent = { ...firstStudent, ...secondStudent };

var boxData = document.getElementById("box-container");
var cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

for (let key in ThirdStudent) {
  if (typeof ThirdStudent[key] === "object") {
    for (let nestedKey in ThirdStudent[key]) {
      var heading = document.createElement("h1");
      heading.innerText = `${nestedKey} : ${ThirdStudent[key][nestedKey]}`;
      cardContainer.appendChild(heading);
    }
  } else {
    var heading = document.createElement("h1");
    heading.textContent = `${key}: ${ThirdStudent[key]}`;
    cardContainer.appendChild(heading);
  }
}

boxData.appendChild(cardContainer);
