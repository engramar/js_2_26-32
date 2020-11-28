#Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

#Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

#Import a Default Export
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

#Create a JavaScript Promise

#Complete a Promise with resolve and reject

#Handle a Fulfilled Promise with then

#Handle a Rejected Promise with catch
