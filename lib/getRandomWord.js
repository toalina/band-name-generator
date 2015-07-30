'use strict';

module.exports = function (object) {
  // get all of those properties into an array
  var propArray = Object.keys(object);

  // pick a random word from the array
  // (passing the random number into array
  // and getting the item with that index number)
  var randomProp = propArray[Math.floor(Math.random() *
    propArray.length)];

  // return that word in an object
  // (need to send the front end a JSON!)
  return {word: randomProp};
};
