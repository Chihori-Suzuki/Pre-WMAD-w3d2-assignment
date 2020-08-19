// write a function that takes the last item of the second array, and adds it to the end of the first array.
let food = ['apple', 'orange', 'cake', 'carrots', 'pasta', 'rice', 'eggs'];

let numbers = ['1', '2', '3', '4'];

const addTheLast = function (arr1, arr2) {

    console.log(arr1);
    console.log(arr2);

    console.log("*****adds it to the end of the first array******")
    arr1.push(arr2[arr2.length-1])
    console.log(arr1);
    // console.log(arr2[arr2.length-1] += arr1[arr1.length-1]);
};

addTheLast(food, numbers);
