// June 10, 2023
// CodeWars: Create Phone Number (6 kyu challenge)
// Description: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. The returned format must be correct in order to complete this challenge. The returned format must be correct in order to complete this challenge.


function createPhoneNumber(numbers){
  var num = '';

  // Get the numbers to be include in the parenthesis using the for loop less than 3 condition
  for(let i = 0; i < 3; i++){
    num += numbers[i];
  }
  var num = `(${num}) `;

  // Get the next three numbers and add '-' at the end of it
  for(let i = 3; i < 6; i++){
    num += numbers[i];
  }
  num += '-';

  // And last, and the rest of the number using loop
  for(let i = 6; i < 10; i++){
    num += numbers[i];
  }

  // Add the trim for safety to get rid all the unnecessary whitespaces.
  return num.trim();

}

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// Community codes:

// This one right here is clever coding!!! - 1
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }




// Community codes: