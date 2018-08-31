// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver,key, value){
 return Object.assign({},driver,{[key]:value});
}

destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key] = value;
}