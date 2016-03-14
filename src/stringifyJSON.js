// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
    return obj + "";
  //check to see if object is a string
  } else if (typeof obj === 'string'){
    return '"' + obj + '"';
  }
  //check if obj is ar"{" + "}";
  if(Array.isArray(obj)){
    //check if obj.length is 0
    //create array to collect results
    var tempArr = [];
    if(obj.length === 0){
      return "[]";
    } else {
      _.each(obj, function(item, index, list){
        tempArr.push(stringifyJSON(item));
      })
    }
    return "[" + tempArr + "]";
  }   
  //check to see if obj is object
  else {
    //loop thru obj using for loop
    for(var key in obj){
      //check if property value is undefined or a function
      if(obj[key] === undefined || typeof obj[key] === 'function')
        return "{}";
    }
    //create empty array to collect results
    var emptyArr = [];
    //iterate thru obj and push results to emptyArr
    _.each(obj, function(item, key, list){
      emptyArr.push(stringifyJSON(key) + ':' + stringifyJSON(item));
    })
    return '{' + emptyArr + '}';
  }
};
