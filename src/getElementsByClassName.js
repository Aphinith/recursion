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

  var findMatches = function(node) {
    _.each(node.classList, function(val1) {
      if (val1 === className) {
        matches.push(node);
      }
    })
    _.each(node.childNodes, function(val) {
      findMatches(val);
    })
  }

  findMatches(document.body)
  // console.log("Andy's log", document.body.childNodes)
  // console.log('this is matches:', matches)
  return matches;

};
