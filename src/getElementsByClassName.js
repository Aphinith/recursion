// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //iterate through the body to get access to nodes
  //if nodes match, push that match to results;
  //logging to see what document.body is

  //create variable to hold results
  var matches = [];
  //create function to run search
  var findMatches = function(node) {
    //loop through node
    _.each(node, function(val) {
      if (className === val) {
        console.log('this is test:', node)
      }
    })
    
  }
  console.log("this is matches:", matches)

  findMatches(document.body)
  return matches;


  // console.log("this is body:", document.body);
  // //logging to see what element.childNodes is
  // console.log('this is element.childNodes:', document.body.childNodes);
  // //logging to see what element.classList is
  // console.log('this is element.classList:', document.body.classList);
  // //testing log to element.classList
  // console.log('this is element.classList at index 1:', document.body.classList[1]);
};
