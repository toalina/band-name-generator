'use strict';

module.exports = function(word, wordObject) {

  // check if the WORD is on the OBJECT
  if (!wordObject.hasOwnProperty(word)) {

    // if it's NOT on obj, add it and send a message that we added it
    wordObject[word] = true;
    return {message: 'Got it! Your word, ' + word + ', has been added to the list.'};

    // don't need this to be an obj, it'll be JSONified when it's sent
  }

  // if it IS on the obj, send a polite message saying we have it
  return {message: 'Already have this word, ' + word + '. Try another one!'};

  // those messages will be the return value of this function
};
