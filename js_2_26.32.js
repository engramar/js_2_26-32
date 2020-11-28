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
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }

  makeServerRequest.then(result => {
    console.log (result) 
});
});

#Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
