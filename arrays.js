let arr2 = [
  ['apple', 'orange', 'pear'],
  ['carrots', 'beans', 'peas'],
  ['cookies', 'cake', 'muffins', 'pie']
];
console.table(arr2);

// Declare and initialise an single-dimensional array with 5 names
let nameArray = ['Jensen', 'Miguel', 'Edgar', 'Donato', 'Jesus'];

// Log the table to the console.
console.table(nameArray);

// Use a for loop to loop through the array and log the array index and values
for (i = 0; i < nameArray.length; i++;) {
  console.log(`${nameArray[i]} is in position ${i}.`);
}

// Log the length of the array
console.log(nameArray.length);