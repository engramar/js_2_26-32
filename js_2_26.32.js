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
const makeServerRequest = new Promise((resolve, reject) => {
});

#Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

#Handle a Fulfilled Promise with then

#Handle a Rejected Promise with catch
