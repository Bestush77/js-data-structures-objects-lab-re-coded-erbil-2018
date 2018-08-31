// Write your solution in this file!
let driver = {};

updateDriverWithKeyAndValue(driver,key, value){
 return Object.assign({},driver,{[key]:value});
}