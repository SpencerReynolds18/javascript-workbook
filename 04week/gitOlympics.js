'use strict'


const listOfOlympians = ['Phelps', 'Biles', 'Jose', 'Spencer', 'Katie']


const printListOfOlympians = (arr) =>{
    arr.forEach(item => {
        console.log(item);
    });
}
printListOfOlympians(listOfOlympians);


// arr.forEach((item,index)=> {
//     console.log(item)
// })


//for each can only do arrays.

//popular method for turning an object into an array, then using forEach on that.
const details = starChart.details;
const detailsKeys = Object.keys(details);

detailsKeys.forEach((key, index)=>{
    console.log(key, details[key])
})
