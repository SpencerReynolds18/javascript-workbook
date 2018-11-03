const carsInReverse = ['Honda', 'Toyota', 'Porsche', 'Audi'];

// for loop
// Use a for loop to console.log each item in the array carsInReverse.
carsInReverse.forEach((car) => {
    console.log(car);
});


// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop to console.log each key.
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.

const userInfo = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
};

for (const key in userInfo) {
    console.log(key);
}

// const arrOfKeys = Object.keys(userInfo);
// console.log(arrOfKeys)


for (const key in userInfo) {
    if (userInfo.hasOwnProperty(key)) {
        console.log(`userInfo.${key} = ${userInfo[key]}`);
    }
}


// // Use a for loop to console.log the numbers 1 to 1000.
//
//normal for loop
for (let i = 1; i < 1001; i++) {
    console.log(i);
};
//
//
// //while loop
let j = 0;
while (j < 1000) {
    j += 1;
    console.log(j);
}

// do...while loop
let k = 0;
do {
    k += 1;
    console.log(k);
} while (k < 1000);
