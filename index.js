// Write your solution in this file!
let driver = {};

funyction updateDriverWithKeyAndValue(driver,key, value){
 return Object.assign({},driver,{[key]:value});
}