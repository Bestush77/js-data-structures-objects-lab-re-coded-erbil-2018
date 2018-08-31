// Write your solution in this file!
let driver = {};

updateDriverWithKeyAndValue(driver,key, value){
  Object.assign({},driver,{[key]:value});
}